# Awesome Audio Security Research

A curated reading list for audio-related attacks, defenses, privacy, watermarking, and trustworthy audio AI.

This repository tracks research around speech, music, singing voice conversion, audio deepfakes, ASR, speech translation, voice authentication, watermarking, audio data protection, and acoustic side channels.

## Scope

- Audio deepfake, voice cloning, TTS, voice conversion, and singing voice conversion
- Proactive voice and music protection against unauthorized synthesis or model training
- Audio deepfake detection, liveness detection, benchmarks, and human perception
- ASR and speech translation attacks, privacy, and robustness
- Audio watermarking, dataset copyright protection, and provenance
- Speech privacy, anonymization, and recoverable data protection
- Acoustic, vibration, VR, and conference-audio side channels
- Audio language model safety, bias, prompt leakage, and misuse risks

## Tags

`attack` `defense` `benchmark` `privacy` `watermark` `side-channel` `deepfake` `voice-cloning` `tts` `voice-conversion` `music` `singing-voice` `asr` `speech-translation` `liveness` `alm`

## Contents

- [Deepfake and Voice Cloning Security](#deepfake-and-voice-cloning-security)
- [Music and Singing Voice Protection](#music-and-singing-voice-protection)
- [ASR and Speech Translation Security](#asr-and-speech-translation-security)
- [Watermarking and Data Rights](#watermarking-and-data-rights)
- [Speech Privacy and Audio Data Protection](#speech-privacy-and-audio-data-protection)
- [Side Channels and Physical Eavesdropping](#side-channels-and-physical-eavesdropping)
- [Audio Language Model Safety](#audio-language-model-safety)
- [Datasets, Benchmarks, and Tools](#datasets-benchmarks-and-tools)
- [How to Contribute](#how-to-contribute)

## Deepfake and Voice Cloning Security

Research on synthetic speech misuse, voice cloning risk, detector reliability, liveness, and proactive voice protection.

| Year | Venue | Paper | Type | Notes |
| --- | --- | --- | --- | --- |
| 2025 | IEEE S&P | From One Stolen Utterance: Assessing the Risks of Voice Cloning in the AIGC Era | benchmark / attack | Evaluates voice cloning risk from very limited stolen speech. |
| 2025 | USENIX Security | VoiceWukong: Benchmarking Deepfake Voice Detection | benchmark / detection | Shows that deepfake voice detectors can degrade significantly in realistic settings. |
| 2025 | NDSS | VoiceRadar: Voice Deepfake Detection using Micro-Frequency and Compositional Analysis | detection | Uses physical and compositional cues for audio deepfake detection. |
| 2025 | NDSS | Characterizing the Impact of Audio Deepfakes in the Presence of Cochlear Implant | human factors | Studies how cochlear implant users perceive or detect audio deepfakes. |
| 2025 | USENIX Security | SafeSpeech: Robust and Universal Voice Protection Against Malicious Speech Synthesis | defense | Adds imperceptible perturbations before sharing speech to reduce malicious speech synthesis quality. |
| 2025 | IEEE S&P | Lombard-VLD: Voice Liveness Detection Based on Human Auditory Feedback | liveness / defense | Uses the Lombard effect to distinguish live speakers from replayed or synthesized speech. |

## Music and Singing Voice Protection

Research focused on songs, singing voice conversion, illegal covers, and generative music training protection.

| Year | Venue | Paper | Type | Notes |
| --- | --- | --- | --- | --- |
| 2025 | NDSS | SongBsAb: A Dual Prevention Approach against Singing Voice Conversion based Illegal Song Covers | defense | Protects released vocal tracks against unauthorized singing voice conversion. |
| 2025 | IEEE S&P | Harmonycloak: Making Music Unlearnable for Generative AI | defense | Injects imperceptible noise so generative models fail to learn useful musical patterns from protected music. |

## ASR and Speech Translation Security

Research on adversarial speech, privacy against speech recognition, and failures in speech translation systems.

| Year | Venue | Paper | Type | Notes |
| --- | --- | --- | --- | --- |
| 2025 | IEEE S&P | EvilHarmony: Stealthy Adversarial Attacks Against Black-Box Speech Recognition Systems | attack | Constructs stealthy adversarial audio against black-box ASR systems. |
| 2025 | USENIX Security | Whispering Under the Eaves: Protecting User Privacy Against Commercial and LLM-powered Automatic Speech Recognition Systems | defense / privacy | Provides real-time protection against commercial and LLM-powered ASR. |
| 2025 | USENIX Security | When Translators Refuse to Translate: A Novel Attack to Speech Translation Systems | attack | Exploits speech translation systems that keep or revert to source-language output. |

## Watermarking and Data Rights

Research on watermarking speech or audio datasets for copyright, provenance, and deepfake detection.

| Year | Venue | Paper | Type | Notes |
| --- | --- | --- | --- | --- |
| 2025 | USENIX Security | AUDIO WATERMARK: Dynamic and Harmless Watermark for Black-box Voice Dataset Copyright Protection | watermark / copyright | Verifies whether a protected voice dataset was used to train a black-box speaker recognition model. |
| 2025 | USENIX Security | AudioMarkNet: Audio Watermarking for Deepfake Speech Detection | watermark / detection | Embeds identifiable watermark bits for detecting speech generated by TTS cloning pipelines. |

## Speech Privacy and Audio Data Protection

Research that changes, anonymizes, or protects speech while preserving human usability or recoverability.

| Year | Venue | Paper | Type | Notes |
| --- | --- | --- | --- | --- |
| 2025 | USENIX Security | SpeechGuard: Recoverable and Customizable Speech Privacy Protection | privacy / defense | Uses configurable voice transformation for recoverable speech privacy protection. |
| 2025 | USENIX Security | For Human Ears Only: Preventing Automated Monitoring on Voice Data | privacy / defense | Modifies speech to remain understandable to humans while resisting ASR and speaker verification. |

## Side Channels and Physical Eavesdropping

Research on extracting speech, location, or sensitive information from audio-adjacent sensors and physical channels, plus defenses.

| Year | Venue | Paper | Type | Notes |
| --- | --- | --- | --- | --- |
| 2025 | NDSS | Speak Up, I'm Listening: Extracting Speech from Zero-Permission VR Sensors | side-channel / attack | Extracts speech from VR sensors that require no explicit microphone permission. |
| 2025 | IEEE S&P | EveGuard: Defeating Vibration-based Side-Channel Eavesdropping with Audio Adversarial Perturbations | side-channel / defense | Uses audio adversarial perturbations to defend against vibration-based eavesdropping. |
| 2025 | IEEE S&P | Spoofing Eavesdroppers with Audio Misinformation | side-channel / defense | Sends misleading audio information to eavesdroppers instead of only suppressing leakage. |
| 2025 | IEEE S&P | Sniffing Location Privacy of Video Conference Users Using Free Audio Channels | side-channel / attack | Infers video conference users' location privacy from free audio channels. |

## Audio Language Model Safety

Emerging topic area for audio-native foundation models and multimodal systems.

Initial research directions:

- Harmful, biased, or discriminatory audio understanding and generation
- Safety differences between text-only LLMs and audio language models
- Effects of accent, gender, emotion, and prosody on safety judgments
- Text-to-audio, text-to-music, and video-to-music prompt stealing
- Audio-to-text, audio-to-audio, and text-to-audio safety evaluation

See [Research Ideas](docs/research-ideas.md) for the current idea backlog.

## Datasets, Benchmarks, and Tools

See [Resources](docs/resources.md) for a working list of models, detectors, APIs, and benchmark ideas.

## How to Contribute

Pull requests are welcome. Please include:

- Title, authors, venue, and year
- Official paper link, arXiv link, code, dataset, or project page when available
- One primary category and any secondary tags
- A short neutral summary focused on the security or privacy contribution

See [Contributing](CONTRIBUTING.md) for the preferred format.

## Related Documents

- [Taxonomy](docs/taxonomy.md)
- [Chinese Taxonomy Summary](docs/taxonomy.zh-CN.md)
- [Research Ideas](docs/research-ideas.md)
- [Resources](docs/resources.md)
