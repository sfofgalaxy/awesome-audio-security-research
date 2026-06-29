# Taxonomy

This taxonomy separates the collection by threat surface first, then by broad research role. A paper should have one primary category, one section (`Attack`, `Defense`, `Benchmark & Measurement`, or `Other`), and may carry several secondary tags.

## 1. Audio Deepfake, Voice Cloning, and Spoofing

Threat surface:

- TTS and zero-shot voice cloning
- Voice conversion and singing voice conversion
- Full and partial audio deepfakes
- Spoofing attacks against speaker recognition or speaker verification
- Source tracing and model attribution

Research roles:

- Attack and risk assessment
- Detection and localization
- Proactive defense before speech is shared
- Source tracing and attribution
- Benchmarks, datasets, and evaluation methodology
- Human perception and accessibility

Representative papers:

- From One Stolen Utterance
- VoiceWukong
- VoiceRadar
- SafeSpeech
- Alethia
- FoeGlass
- SpeechFake
- SpoofCeleb

## 2. Voice Privacy, Anonymization, and Speaker Protection

Threat surface:

- Speaker identity leakage
- Sensitive content leakage
- Membership inference on speech data
- Speaker anonymization failures
- Automated monitoring of human speech

Research roles:

- Speech anonymization
- Privacy-preserving speaker verification
- Human-understandable but machine-resistant audio
- Unlearning and recoverable privacy transformation
- Privacy evaluation for speech-language systems

Representative papers:

- SpeechGuard
- For Human Ears Only
- VoxPrivacy
- VoxGuard
- TVTSyn
- VoicePrivacy Attacker Challenge papers

## 3. Watermarking, Provenance, and Data Rights

Threat surface:

- Speech dataset misuse
- Black-box model training verification
- Generated speech authenticity
- Deepfake speech provenance
- Audio and music copyright

Research roles:

- Dataset copyright watermarking
- Audio watermark embedding and extraction
- Watermark-aware codecs
- Authenticity verification
- Provenance-aware deepfake detection

Representative papers:

- AUDIO WATERMARK
- AudioMarkNet
- XAttnMark
- Robust Distortion-Free Watermark for Autoregressive Audio Generation Models
- A Watermark for Auto-Regressive Speech Generation Models
- WMCodec

## 4. ASR and Speech Translation Security

Threat surface:

- Commercial ASR
- LLM-powered ASR
- Black-box speech recognition
- Speech translation systems
- Speech foundation models under adversarial perturbation

Research roles:

- Adversarial audio attacks
- Real-time privacy against transcription
- Translation refusal or source-language retention attacks
- Robustness benchmarks and adversarial training
- Diffusion or enhancement based defenses

Representative papers:

- EvilHarmony
- Whispering Under the Eaves
- When Translators Refuse to Translate
- Speech Robust Bench
- Detecting and Defending Against Adversarial Attacks on Automatic Speech Recognition via Diffusion Models

## 5. Audio-Language Model Safety

Threat surface:

- Audio-to-text and audio-to-audio interaction
- Speech-driven LLMs
- Audio-visual language models
- Multi-turn spoken dialogue
- Audio prompt injection and jailbreaks
- Multilingual fairness, bias, and trustworthiness failures in speech-capable models

Research roles:

- Jailbreak attacks and prompt injection
- Guardrails and refusal steering
- Safety and trustworthiness benchmarks
- Hallucination evaluation and mitigation
- Bias, fairness, and privacy audits in spoken dialogue systems
- Multilingual risk analysis for speech and audio models

Representative papers:

- AdvWave
- JALMBench
- Jailbreak-AudioBench
- SARSteer
- SPIRIT
- TrojanWave
- AudioTrust
- VoxPrivacy
- RedVox

## 6. Side Channels and Physical Eavesdropping

Threat surface:

- VR sensors
- Vibration-based eavesdropping
- Video-conference audio channels
- mmWave and bone-conduction headphones
- Fiber optic cables
- Acoustic injection into physical systems

Research roles:

- Sensor-based speech extraction
- Side-channel privacy attacks
- Adversarial perturbation defenses
- Misinformation-based defenses
- Physical-world injection attacks

Representative papers:

- Speak Up, I'm Listening
- EveGuard
- Spoofing Eavesdroppers with Audio Misinformation
- Sniffing Location Privacy of Video Conference Users Using Free Audio Channels
- EchoLLM
- Hiding an Ear in Plain Sight
- Banshee

## 7. Music and Singing Voice Security

Threat surface:

- Singing voice conversion
- Illegal AI song covers
- Generative music model training
- Music and singing voice deepfake detection
- Artist and copyright protection

Research roles:

- Unlearnable music examples
- Pre-release vocal protection
- Singing voice deepfake detection and attribution
- Generated music detection

Representative papers:

- SongBsAb
- Harmonycloak
- MusicDET
- Hanui
- From Voices to Beats

## 8. Voice Authentication and Biometrics

Threat surface:

- Voice liveness
- Speaker verification
- Speaker anti-spoofing
- Spoof-aware speaker verification
- Audio/device authentication

Research roles:

- Liveness detection
- Secure authentication
- Spoof-aware speaker verification
- Privacy-preserving biometric inference
- Acoustic device-to-device authentication

Representative papers:

- Lombard-VLD
- Bayesian Learning for Domain-Invariant Speaker Verification and Anti-Spoofing
- J-SPAW
- LINGUARD
- BeepBeep
- Towards Secure User Authentication for Headphones via In-Ear or In-Earcup Microphones

## Suggested Tag Schema

- Role tags: `attack`, `defense`, `benchmark`, `survey`, `dataset`
- Domain tags: `speech`, `music`, `singing-voice`, `asr`, `speech-translation`, `tts`, `voice-conversion`, `speaker-verification`
- Security tags: `privacy`, `watermark`, `provenance`, `copyright`, `side-channel`, `liveness`, `deepfake`, `jailbreak`, `prompt-injection`
- Evaluation tags: `human-study`, `perception`, `black-box`, `physical-world`, `real-time`, `multilingual`, `cross-modal`, `fairness`, `bias`, `trustworthiness`
