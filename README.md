# Awesome Audio Security Research

[中文 README](README.zh-CN.md)

A curated reading list for audio-related attacks, defenses, privacy, watermarking, provenance, and trustworthy audio AI.

This repository tracks work around speech, music, singing voice conversion, audio deepfakes, ASR, speech translation, voice authentication, watermarking, audio data protection, audio-language models, and acoustic side channels.

## Scope

- Audio deepfake, spoofing, voice cloning, TTS, voice conversion, and singing voice conversion security
- Proactive voice and music protection against unauthorized synthesis or model training
- Audio deepfake detection, liveness detection, source tracing, benchmarks, and human perception
- ASR and speech translation attacks, privacy, and robustness
- Audio watermarking, dataset copyright protection, authenticity, and provenance
- Speech privacy, anonymization, unlearning, and recoverable data protection
- Acoustic, vibration, VR, fiber, conference-audio, and sensor side channels
- Audio-language model safety, jailbreaks, prompt injection, bias, hallucination, and privacy

## Top-Venue Collection

The current expansion focuses on 2025 and public 2026 papers from security, AI, NLP, and speech venues.

- [Top-Venue Papers 2025-2026](docs/top-venue-papers-2025-2026.md)
- [Taxonomy](docs/taxonomy.md)
- [Resources](docs/resources.md)

Coverage status is recorded in the top-venue document. As of 2026-05-31, several 2026 lists are not public yet, including CCS 2026, NeurIPS 2026, ACL 2026, EMNLP 2026, and Interspeech 2026.

## Categories

### Audio Deepfake, Voice Cloning, and Spoofing

Synthetic speech misuse, spoofing, source tracing, detector robustness, localization, and proactive voice protection.

Representative venues in the list: IEEE S&P, USENIX Security, NDSS, ICLR, ICML, NeurIPS, ACL, EMNLP, ICASSP, and Interspeech.

### Voice Privacy, Anonymization, and Speaker Protection

Speaker anonymization, privacy leakage, membership inference, unlearning, privacy-preserving speaker verification, and protection against unauthorized voice cloning.

Representative topics: VoicePrivacy attacker challenge, speaker anonymization evaluation, speech unlearning, private speech representations, and privacy-aware ASR.

### Watermarking, Provenance, and Data Rights

Audio watermarking, speech dataset copyright, model-training verification, generated-audio authenticity, and provenance-aware detection.

Representative topics: dataset watermarking, speech generation watermarking, watermark-aware codecs, and synthetic audio provenance.

### ASR and Speech Translation Security

Adversarial audio, ASR robustness, speech translation attacks, and defenses against automated transcription or speech-to-text systems.

Representative topics: black-box ASR attacks, ASR privacy defenses, speech translation refusal attacks, and adversarial training for speech models.

### Audio-Language Model Safety

Jailbreaks, prompt injection, guardrails, safety evaluation, hallucination, bias, privacy, and robustness for audio-language and audio-visual language models.

Representative topics: audio-text jailbreaks, auditory prompt injection, spoken-dialogue safety benchmarks, multimodal hallucination benchmarks, and guardrail tuning.

### Side Channels and Physical Eavesdropping

Physical and sensor-based attacks or defenses involving audio, vibration, acoustic injection, VR sensors, mmWave, fiber optic cables, microphones, and real-time communication channels.

Representative topics: acoustic eavesdropping, vibration defenses, telecom fiber acoustic leakage, video-conference privacy, and acoustic injection.

### Music and Singing Voice Security

Singing voice conversion, unauthorized AI covers, generated music detection, unlearnable music, and singing voice deepfake attribution.

Representative topics: illegal AI song cover prevention, music unlearnable examples, singing voice deepfake detection, and generated music detection.

### Voice Authentication and Biometrics

Voice liveness, speaker verification security, spoof-aware speaker verification, biometric authentication, and acoustic/device authentication.

Representative topics: voice liveness detection, speaker anti-spoofing, secure headphone authentication, and speech-recording authentication.

## Tags

`attack` `defense` `benchmark` `dataset` `privacy` `watermark` `provenance` `side-channel` `deepfake` `voice-cloning` `tts` `voice-conversion` `music` `singing-voice` `asr` `speech-translation` `liveness` `alm` `speaker-verification`

## How to Contribute

Pull requests are welcome. Please include:

- Title, authors, venue, and year
- Official paper link, arXiv link, code, dataset, or project page when available
- One primary category and any secondary tags
- A short neutral summary focused on the security or privacy contribution

See [Contributing](CONTRIBUTING.md) for the preferred format.

## Related Documents

- [Top-Venue Papers 2025-2026](docs/top-venue-papers-2025-2026.md)
- [Taxonomy](docs/taxonomy.md)
- [Chinese Taxonomy Summary](docs/taxonomy.zh-CN.md)
- [Resources](docs/resources.md)
