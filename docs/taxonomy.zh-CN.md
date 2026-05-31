# 主题分类总结

这批内容可以组织成七个主线。为了后续公开维护，建议 README 按“攻击面”分类，而不是只按 attack / defense 二分；同一篇工作再用标签标出 `attack`、`defense`、`benchmark`、`privacy`、`watermark`、`side-channel` 等属性。

## 1. Audio Deepfake 与 Voice Cloning 安全

这一类是当前列表的核心，包括语音克隆风险、检测器 benchmark、检测方法、主动防御、人类感知和活体检测。

可放入这一类的文章：

- From One Stolen Utterance：一句被盗语音带来的语音克隆风险评估。
- VoiceWukong：deepfake voice detection benchmark，强调真实场景下检测器性能下降。
- VoiceRadar：利用微频率、组合特征和物理先验检测语音 deepfake。
- SafeSpeech：用户上传语音前加入不可感知扰动，防止被用于恶意语音合成。
- Lombard-VLD：利用 Lombard effect 做 voice liveness detection。
- Characterizing the Impact of Audio Deepfakes in the Presence of Cochlear Implant：研究人工耳蜗用户面对音频 deepfake 时的感知和检测问题。

建议子类：

- Risk and Benchmark
- Detection and Liveness
- Proactive Voice Protection
- Human Perception and Accessibility

## 2. Music 与 Singing Voice Protection

这一类关注音乐、歌声转换、AI 翻唱和生成式音乐训练保护。它和普通 speech deepfake 相近，但对象、威胁模型和版权语境不同，建议单独成类。

可放入这一类的文章：

- SongBsAb：面向 singing voice conversion illegal song covers 的双重预防。
- Harmonycloak：让音乐对生成式 AI 不可学习。

建议子类：

- Singing Voice Conversion Defense
- Music Unlearnable Examples
- Artist and Copyright Protection

## 3. ASR 与 Speech Translation Security

这一类关注自动语音识别和语音翻译系统：包括对抗样本攻击、隐私保护，以及翻译系统的特殊失败模式。

可放入这一类的文章：

- EvilHarmony：面向黑盒 ASR 的隐蔽对抗攻击。
- Whispering Under the Eaves：保护用户语音隐私，对抗商业和 LLM-powered ASR。
- When Translators Refuse to Translate：语音翻译系统“不翻译”攻击。

建议子类：

- ASR Adversarial Attack
- ASR Privacy Defense
- Speech Translation Attack

## 4. Watermarking、Provenance 与 Dataset Copyright

这一类关注音频水印、数据集版权保护、模型训练归因和 deepfake provenance。

可放入这一类的文章：

- AUDIO WATERMARK：验证黑盒说话人识别模型是否使用了受保护语音数据集。
- AudioMarkNet：通过音频水印检测 TTS 克隆语音。

建议子类：

- Dataset Copyright Verification
- Deepfake Provenance
- Audio Watermark Embedding and Detection

## 5. Speech Privacy 与 Audio Data Protection

这一类关注在保留人类可用性的同时保护语音内容、身份、情感或其他敏感属性。它比 ASR 隐私更宽，可以包括匿名化、可恢复保护和 human-only audio。

可放入这一类的文章：

- SpeechGuard：可恢复、可定制的语音隐私保护。
- For Human Ears Only：让人能听懂，但阻止自动化监听、ASR 和说话人验证。

建议子类：

- Speech Anonymization
- Human-Understandable Machine-Resistant Audio
- Recoverable Privacy Transformation

## 6. Side Channel 与 Physical Eavesdropping

这一类是音频安全里很重要但容易被 deepfake 分类淹没的方向，建议单独成类：传感器、振动、VR、会议音频、位置隐私等。

可放入这一类的文章：

- Speak Up, I'm Listening：从零权限 VR 传感器中提取语音。
- EveGuard：用音频对抗扰动防御振动侧信道窃听。
- Spoofing Eavesdroppers with Audio Misinformation：用错误信息欺骗窃听者。
- Sniffing Location Privacy of Video Conference Users Using Free Audio Channels：通过会议音频通道推断位置隐私。

建议子类：

- Sensor-Based Speech Extraction
- Vibration Side-Channel Defense
- Audio Misinformation Defense
- Location Privacy Leakage

## 7. Audio Language Model Safety

这一类目前主要是研究想法，还不是论文列表的主体，但很适合在仓库里提前留出板块。未来可以覆盖 ALM 的有害音频理解、拒绝、生成、偏见、口音/性别/情绪公平性，以及 text-to-music prompt stealing。

建议子类：

- Harmful Audio Understanding
- Refusal and Safe Transformation
- Discriminatory Audio Generation
- Accent, Gender, and Emotion Bias
- Audio / Music Prompt Stealing

## 推荐仓库结构

```text
awesome-audio-security-research/
  README.md
  CONTRIBUTING.md
  docs/
    taxonomy.md
    taxonomy.zh-CN.md
    research-ideas.md
    resources.md
  .github/
    ISSUE_TEMPLATE/
      paper.yml
```

## 维护建议

- 主分类按攻击面组织，避免后续论文太多时变成 attack/defense 两个大桶。
- 每篇论文保留一个 primary category，同时允许多个 tags。
- benchmark、dataset、tool、API 和 detector 不混进论文表，单独放到 Resources。
- idea backlog 单独放到 Research Ideas，避免公开 README 看起来像未发表项目泄露过多细节。
