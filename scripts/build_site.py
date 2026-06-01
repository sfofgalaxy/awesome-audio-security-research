#!/usr/bin/env python3
"""Build the GitHub Pages data bundle from the Markdown reading list."""

from __future__ import annotations

import json
import os
import re
import subprocess
from collections import Counter, defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CATEGORY_DIR = ROOT / "categories"
DOCS_DIR = ROOT / "docs"
ASSETS_DIR = DOCS_DIR / "assets"
DATA_FILE = ASSETS_DIR / "research-data.json"

SECTION_ORDER = ["Attack", "Defense", "Benchmark & Measurement", "Other"]
SECTION_LABELS = {
    "Attack": "Attack",
    "Defense": "Defense",
    "Benchmark & Measurement": "Benchmark & Measurement",
    "Other": "Other",
}

LINK_RE = re.compile(r"\[([^\]]+)\]\(([^)]+)\)")
HEADING_RE = re.compile(r"^#\s+(.+?)\s*$")
SECTION_RE = re.compile(r"^##\s+(.+?)\s*$")


def split_table_row(line: str) -> list[str]:
    """Split a simple Markdown table row into cells."""
    line = line.strip()
    if line.startswith("|"):
        line = line[1:]
    if line.endswith("|"):
        line = line[:-1]
    return [cell.strip() for cell in line.split("|")]


def is_separator_row(cells: list[str]) -> bool:
    return bool(cells) and all(re.fullmatch(r":?-{3,}:?", cell.strip()) for cell in cells)


def parse_markdown_link(value: str) -> tuple[str, str | None]:
    match = LINK_RE.fullmatch(value.strip())
    if not match:
        return value.strip(), None
    return match.group(1).strip(), match.group(2).strip()


def slugify(value: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    return slug or "item"


def normalize_repo_url(value: str) -> str | None:
    value = value.strip()
    if not value:
        return None
    if value.startswith("git@github.com:"):
        value = "https://github.com/" + value.removeprefix("git@github.com:")
    if value.startswith("https://github.com/"):
        value = value.removesuffix(".git")
        return value
    return None


def infer_repo_url() -> str:
    github_repo = os.environ.get("GITHUB_REPOSITORY")
    if github_repo:
        return f"https://github.com/{github_repo}"

    try:
        result = subprocess.run(
            ["git", "remote", "get-url", "origin"],
            cwd=ROOT,
            check=False,
            capture_output=True,
            text=True,
        )
    except OSError:
        result = None

    if result and result.returncode == 0:
        repo_url = normalize_repo_url(result.stdout)
        if repo_url:
            return repo_url

    return "https://github.com/sfofgalaxy/awesome-audio-security-research"


def infer_pages_url(repo_url: str) -> str:
    path = repo_url.removeprefix("https://github.com/").strip("/")
    parts = path.split("/", 1)
    if len(parts) != 2:
        return "https://sfofgalaxy.github.io/awesome-audio-security-research/"
    owner, repo = parts
    return f"https://{owner}.github.io/{repo}/"


def parse_readme_categories(path: Path) -> dict[str, dict[str, str]]:
    metadata: dict[str, dict[str, str]] = {}
    for line in path.read_text(encoding="utf-8").splitlines():
        if not line.startswith("|"):
            continue
        cells = split_table_row(line)
        if len(cells) < 2 or cells[0].lower() in {"category", "分类"} or is_separator_row(cells):
            continue
        match = LINK_RE.search(cells[0])
        if not match:
            continue
        link_target = match.group(2).strip()
        if not link_target.startswith("categories/"):
            continue
        slug = Path(link_target).stem
        metadata[slug] = {
            "title": match.group(1).strip(),
            "description": cells[1].strip(),
        }
    return metadata


def parse_collection_date() -> str | None:
    path = DOCS_DIR / "top-venue-papers-2025-2026.md"
    if not path.exists():
        return None
    for line in path.read_text(encoding="utf-8").splitlines():
        if line.startswith("Collection date:"):
            return line.removeprefix("Collection date:").strip().rstrip(".")
    return None


def parse_category_file(path: Path) -> tuple[str, list[dict[str, object]]]:
    title = path.stem.replace("-", " ").title()
    section: str | None = None
    papers: list[dict[str, object]] = []
    section_counts: defaultdict[str, int] = defaultdict(int)

    for line in path.read_text(encoding="utf-8").splitlines():
        heading = HEADING_RE.match(line)
        if heading:
            title = heading.group(1).strip()
            continue

        section_heading = SECTION_RE.match(line)
        if section_heading:
            section = section_heading.group(1).strip()
            continue

        if not section or not line.strip().startswith("|"):
            continue

        cells = split_table_row(line)
        if len(cells) < 4 or cells[0].lower() == "year" or is_separator_row(cells):
            continue

        year_text, venue, paper_cell, tags_cell = cells[:4]
        try:
            year: int | str = int(year_text)
        except ValueError:
            year = year_text

        paper_title, paper_url = parse_markdown_link(paper_cell)
        tags = [tag.strip() for tag in tags_cell.split(",") if tag.strip()]
        section_counts[section] += 1
        paper_id = f"{path.stem}-{slugify(section)}-{section_counts[section]}-{slugify(paper_title)[:60]}"

        papers.append(
            {
                "id": paper_id,
                "year": year,
                "venue": venue.strip(),
                "title": paper_title,
                "url": paper_url,
                "section": section,
                "tags": tags,
            }
        )

    return title, papers


def category_sort_key(slug: str, order: list[str]) -> tuple[int, str]:
    if slug in order:
        return order.index(slug), slug
    return len(order), slug


def build_data() -> dict[str, object]:
    repo_url = infer_repo_url()
    readme_meta = parse_readme_categories(ROOT / "README.md")
    readme_zh_meta = parse_readme_categories(ROOT / "README.zh-CN.md")
    category_order = list(readme_meta)

    categories: list[dict[str, object]] = []
    all_papers: list[dict[str, object]] = []

    for path in sorted(CATEGORY_DIR.glob("*.md"), key=lambda item: category_sort_key(item.stem, category_order)):
        slug = path.stem
        title, papers = parse_category_file(path)
        english_meta = readme_meta.get(slug, {})
        chinese_meta = readme_zh_meta.get(slug, {})
        source_path = path.relative_to(ROOT).as_posix()
        source_url = f"{repo_url}/blob/main/{source_path}"

        section_counts = {section: 0 for section in SECTION_ORDER}
        for paper in papers:
            section = str(paper["section"])
            section_counts[section] = section_counts.get(section, 0) + 1
            paper["categorySlug"] = slug
            paper["category"] = title
            paper["categoryZh"] = chinese_meta.get("title", title)
            paper["sourcePath"] = source_path
            paper["sourceUrl"] = source_url
            all_papers.append(paper)

        categories.append(
            {
                "slug": slug,
                "title": title,
                "titleZh": chinese_meta.get("title", title),
                "description": english_meta.get("description", ""),
                "descriptionZh": chinese_meta.get("description", english_meta.get("description", "")),
                "sourcePath": source_path,
                "sourceUrl": source_url,
                "total": len(papers),
                "sectionCounts": section_counts,
            }
        )

    venue_counts = Counter(str(paper["venue"]) for paper in all_papers if paper["venue"])
    tag_counts = Counter(tag for paper in all_papers for tag in paper["tags"])
    year_counts = Counter(str(paper["year"]) for paper in all_papers if paper["year"])
    section_counts = Counter(str(paper["section"]) for paper in all_papers)
    years = sorted({int(paper["year"]) for paper in all_papers if isinstance(paper["year"], int)})

    return {
        "name": "Awesome Audio Security Research",
        "description": "A curated map of audio attacks, defenses, privacy, watermarking, and trustworthy audio AI.",
        "collectionDate": parse_collection_date(),
        "repo": {
            "url": repo_url,
            "pagesUrl": infer_pages_url(repo_url),
            "issuesUrl": f"{repo_url}/issues/new?template=paper.yml",
        },
        "sections": SECTION_LABELS,
        "categories": categories,
        "papers": all_papers,
        "stats": {
            "paperCount": len(all_papers),
            "linkedPaperCount": sum(1 for paper in all_papers if paper.get("url")),
            "categoryCount": len(categories),
            "yearMin": min(years) if years else None,
            "yearMax": max(years) if years else None,
            "venueCounts": dict(venue_counts.most_common()),
            "tagCounts": dict(tag_counts.most_common()),
            "yearCounts": dict(sorted(year_counts.items(), reverse=True)),
            "sectionCounts": dict(section_counts.most_common()),
        },
    }


def main() -> None:
    ASSETS_DIR.mkdir(parents=True, exist_ok=True)
    data = build_data()
    DATA_FILE.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {DATA_FILE.relative_to(ROOT)} with {data['stats']['paperCount']} papers.")


if __name__ == "__main__":
    main()
