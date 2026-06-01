# Awesome Audio Security Research

[English README](README.md) · [网页](https://sfofgalaxy.github.io/awesome-audio-security-research/)

这是一个公开收集 Audio Security / Audio Privacy / Trustworthy Audio AI 论文与资源的仓库。

## 网页

这个仓库已经加入 GitHub Pages 页面，可以按分类、年份、venue、研究角色和 tag 浏览论文。

- 页面入口在 [`docs/index.html`](docs/index.html)。
- 数据由 `python3 scripts/build_site.py` 从 `categories/*.md` 自动生成。
- `.github/workflows/pages.yml` 会在 push 到 `main` 后重新构建并部署。
- 本地预览：先运行 `python3 scripts/build_site.py`，再运行 `python3 -m http.server 8000 --directory docs`。

## 分类

| 分类 | 简介 |
| --- | --- |
| [Audio Deepfake、Voice Cloning 与 Spoofing](categories/audio-deepfake-voice-cloning-and-spoofing.md) | 语音 deepfake、TTS/VC 滥用、spoofing、检测、溯源、保护。 |
| [Voice Privacy、Anonymization 与 Speaker Protection](categories/voice-privacy-anonymization-and-speaker-protection.md) | 说话人匿名化、身份泄露、unlearning、隐私语音表示。 |
| [Watermarking、Provenance 与 Data Rights](categories/watermarking-provenance-and-data-rights.md) | 音频水印、版权、provenance、生成音频真实性。 |
| [ASR 与 Speech Translation Security](categories/asr-and-speech-translation-security.md) | ASR / 语音翻译的攻击、防御、隐私与鲁棒性。 |
| [Audio-Language Model Safety](categories/audio-language-model-safety.md) | Jailbreak、prompt injection、guardrail、评测、幻觉、偏见。 |
| [Side Channels 与 Physical Eavesdropping](categories/side-channels-and-physical-eavesdropping.md) | 声学、振动、传感器、会议音频、光纤、设备侧信道。 |
| [Music 与 Singing Voice Security](categories/music-and-singing-voice-security.md) | AI 翻唱、歌声转换、生成音乐检测、音乐保护。 |
| [Voice Authentication 与 Biometrics](categories/voice-authentication-and-biometrics.md) | Voice liveness、声纹认证安全、anti-spoofing、音频认证。 |

## 收集范围

当前重点：2025 年以及公开可核验的 2026 年安全、AI、NLP、Speech 顶会论文。

每个分类文件按大类拆成 `Attack`、`Defense`、`Benchmark & Measurement`、`Other` 几个 section；表格按新到旧排序。

默认只收主会 full paper 和高质量 arXiv；short、Findings、workshop、纯工具、position 文章默认不收。

- [Top-Venue Coverage 2025-2026](docs/top-venue-papers-2025-2026.md)
- [Taxonomy](docs/taxonomy.md)
- [中文分类总结](docs/taxonomy.zh-CN.md)
- [Resources](docs/resources.md)

## 贡献

欢迎 PR。建议包含标题、作者、venue、年份、官方链接、primary category、section、tags，以及一句中立的安全/隐私贡献总结。

格式参考：[Contributing](CONTRIBUTING.md)。
