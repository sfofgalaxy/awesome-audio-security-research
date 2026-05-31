# 主题分类总结

这批内容建议按“攻击面 / 保护对象”组织。每篇论文保留一个 primary category、一个 section（`Attack`、`Defense`、`Benchmark & Measurement` 或 `Other`），再用 tags 标出 `privacy`、`watermark`、`side-channel`、`jailbreak` 等细粒度属性。

## 1. Audio Deepfake、Voice Cloning 与 Spoofing

核心对象是合成语音滥用、TTS/VC、spoofing、deepfake 检测、局部 deepfake 定位、来源追踪、主动语音保护。

代表工作：

- From One Stolen Utterance
- VoiceWukong
- VoiceRadar
- SafeSpeech
- Alethia
- FoeGlass
- SpeechFake
- SpoofCeleb

建议子类：

- Risk and Benchmark
- Detection and Localization
- Source Tracing and Attribution
- Proactive Voice Protection
- Human Perception and Accessibility

## 2. Voice Privacy、Anonymization 与 Speaker Protection

关注说话人身份、内容、情感、口音、membership 等敏感信息泄露，以及匿名化和可恢复隐私保护。

代表工作：

- SpeechGuard
- For Human Ears Only
- VoxPrivacy
- VoxGuard
- TVTSyn
- VoicePrivacy Attacker Challenge 系列

建议子类：

- Speech Anonymization
- Privacy-Preserving Speaker Verification
- Human-Understandable Machine-Resistant Audio
- Speech Unlearning
- Privacy Evaluation

## 3. Watermarking、Provenance 与 Data Rights

关注音频水印、数据集版权、训练数据使用验证、生成音频真实性、deepfake provenance。

代表工作：

- AUDIO WATERMARK
- AudioMarkNet
- XAttnMark
- Robust Distortion-Free Watermark for Autoregressive Audio Generation Models
- A Watermark for Auto-Regressive Speech Generation Models
- WMCodec

建议子类：

- Dataset Copyright Verification
- Generated Audio Authenticity
- Audio Watermark Embedding and Detection
- Watermark-Aware Codec
- Provenance-Aware Deepfake Detection

## 4. ASR 与 Speech Translation Security

关注自动语音识别、商业 ASR、LLM-powered ASR、语音翻译和 speech foundation model 的攻击与防御。

代表工作：

- EvilHarmony
- Whispering Under the Eaves
- When Translators Refuse to Translate
- Speech Robust Bench
- Detecting and Defending Against Adversarial Attacks on Automatic Speech Recognition via Diffusion Models

建议子类：

- ASR Adversarial Attack
- ASR Privacy Defense
- Speech Translation Attack
- Robustness Benchmark
- Adversarial Training

## 5. Audio-Language Model Safety

关注 Audio-Language Model、Speech LLM 和 Audio-Visual LLM 的 jailbreak、prompt injection、guardrail、安全评估、hallucination、bias 和隐私问题。

代表工作：

- AdvWave
- JALMBench
- Jailbreak-AudioBench
- SARSteer
- SPIRIT
- TrojanWave
- AudioTrust
- VoxPrivacy

建议子类：

- Audio Jailbreak
- Auditory Prompt Injection
- Safety Benchmark
- Guardrail and Refusal Steering
- Hallucination and Bias Evaluation

## 6. Side Channel 与 Physical Eavesdropping

关注 VR 传感器、振动、会议音频、mmWave、骨传导耳机、光纤、声学注入等物理或传感器侧信道。

代表工作：

- Speak Up, I'm Listening
- EveGuard
- Spoofing Eavesdroppers with Audio Misinformation
- Sniffing Location Privacy of Video Conference Users Using Free Audio Channels
- EchoLLM
- Hiding an Ear in Plain Sight
- Banshee

建议子类：

- Sensor-Based Speech Extraction
- Vibration Side-Channel Defense
- Audio Misinformation Defense
- Acoustic Eavesdropping
- Acoustic Injection

## 7. Music 与 Singing Voice Security

关注 AI 翻唱、singing voice conversion、歌声 deepfake、生成音乐检测、音乐不可学习样本和艺术家版权保护。

代表工作：

- SongBsAb
- Harmonycloak
- MusicDET
- Hanui
- From Voices to Beats

建议子类：

- Singing Voice Conversion Defense
- Music Unlearnable Examples
- Singing Voice Deepfake Detection
- Generated Music Detection
- Artist and Copyright Protection

## 8. Voice Authentication 与 Biometrics

关注 voice liveness、speaker verification、speaker anti-spoofing、spoof-aware speaker verification、设备声学认证。

代表工作：

- Lombard-VLD
- Bayesian Learning for Domain-Invariant Speaker Verification and Anti-Spoofing
- J-SPAW
- LINGUARD
- BeepBeep
- Towards Secure User Authentication for Headphones via In-Ear or In-Earcup Microphones

建议子类：

- Voice Liveness Detection
- Speaker Verification Security
- Spoof-Aware Speaker Verification
- Speech Recording Authentication
- Acoustic Device Authentication
