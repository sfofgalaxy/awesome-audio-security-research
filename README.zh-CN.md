# Awesome Audio Security Research

[English README](README.md)

这是一个面向 Audio Security / Audio Privacy / Trustworthy Audio AI 的公开论文与资源清单，风格类似 Awesome Research。仓库重点收集语音、音乐、歌声、ASR、Speech Translation、Audio-Language Model、音频水印、匿名化、声学侧信道、语音认证等方向里的攻击与防御研究。

## 当前重点

本轮已经按顶会来源收集并重新分类 2025 年以及公开可核验的 2026 年论文：

- 安全四大：IEEE S&P、USENIX Security、ACM CCS、NDSS
- AI 三大：ICLR、ICML、NeurIPS
- NLP 顶会：ACL、EMNLP
- Speech 顶会：ICASSP、Interspeech

完整列表见：[Top-Venue Papers 2025-2026](docs/top-venue-papers-2025-2026.md)。

截至 2026-05-31，部分 2026 年列表还没有公开可核验版本，包括 CCS 2026、NeurIPS 2026、ACL 2026、EMNLP 2026、Interspeech 2026；这些会先标为 pending。

## 分类

### Audio Deepfake、Voice Cloning 与 Spoofing

语音 deepfake、TTS/VC 滥用、spoofing、来源追踪、检测器鲁棒性、局部 deepfake 定位，以及主动语音保护。

### Voice Privacy、Anonymization 与 Speaker Protection

说话人匿名化、身份泄露、membership inference、speech unlearning、隐私保护型 speaker verification，以及防止未授权语音克隆。

### Watermarking、Provenance 与 Data Rights

音频水印、语音数据集版权、训练数据使用验证、生成音频真实性验证，以及 provenance-aware deepfake detection。

### ASR 与 Speech Translation Security

ASR 对抗样本、自动转写隐私保护、语音翻译攻击、Speech Foundation Model 鲁棒性。

### Audio-Language Model Safety

Audio-language model / Speech LLM 的 jailbreak、prompt injection、guardrail、安全评估、hallucination、bias 和隐私问题。

### Side Channels 与 Physical Eavesdropping

声学、振动、VR 传感器、光纤、mmWave、会议音频、麦克风或设备认证相关的物理侧信道攻击与防御。

### Music 与 Singing Voice Security

AI 翻唱、singing voice conversion、歌声 deepfake、音乐不可学习样本、生成音乐检测。

### Voice Authentication 与 Biometrics

声纹认证、voice liveness、speaker anti-spoofing、spoof-aware speaker verification、设备到设备声学认证。

## 维护方式

建议每篇论文保留一个 primary category，并补充 tags，例如：

`attack` `defense` `benchmark` `dataset` `privacy` `watermark` `provenance` `side-channel` `deepfake` `voice-cloning` `asr` `alm`

新增论文时请优先提供官方会议页、ACL Anthology、OpenReview、USENIX、IEEE/ACM/NDSS 页面，方便后续核验。

## 相关文档

- [Top-Venue Papers 2025-2026](docs/top-venue-papers-2025-2026.md)
- [Taxonomy](docs/taxonomy.md)
- [中文分类总结](docs/taxonomy.zh-CN.md)
- [Resources](docs/resources.md)
