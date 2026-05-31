# Taxonomy

This taxonomy separates the collection by threat surface first, then by research role.

## 1. Audio Deepfake and Voice Cloning

Threat surface:

- TTS and voice cloning
- Voice conversion
- Audio deepfake detection
- Voice liveness and speaker verification
- Human perception of synthetic speech

Research roles:

- Attack and risk assessment
- Detection and liveness
- Proactive defense before speech is shared
- Benchmarks and evaluation methodology
- Human factors and accessibility

Representative papers:

- From One Stolen Utterance
- VoiceWukong
- VoiceRadar
- SafeSpeech
- Lombard-VLD
- Characterizing the Impact of Audio Deepfakes in the Presence of Cochlear Implant

## 2. Music and Singing Voice Security

Threat surface:

- Singing voice conversion
- Illegal AI song covers
- Generative music model training
- Music ownership and artist protection

Research roles:

- Unlearnable music examples
- Pre-release vocal protection
- Copyright and model-training deterrence

Representative papers:

- SongBsAb
- Harmonycloak

## 3. ASR and Speech Translation Security

Threat surface:

- Commercial ASR
- LLM-powered ASR
- Black-box speech recognition
- Speech translation systems

Research roles:

- Adversarial audio attacks
- Real-time privacy against transcription
- Translation refusal or source-language retention attacks
- Transferability and robustness evaluation

Representative papers:

- EvilHarmony
- Whispering Under the Eaves
- When Translators Refuse to Translate

## 4. Watermarking, Provenance, and Dataset Rights

Threat surface:

- Speech dataset misuse
- Black-box model training verification
- TTS-cloned speech provenance
- Deepfake speech detection

Research roles:

- Dataset copyright watermarking
- Audio watermark embedding and extraction
- Provenance-aware deepfake detection

Representative papers:

- AUDIO WATERMARK
- AudioMarkNet

## 5. Speech Privacy and Audio Data Protection

Threat surface:

- Speaker identity leakage
- Speech content leakage
- Automated monitoring
- Recoverable privacy transformations

Research roles:

- Speech anonymization
- Human-understandable but machine-resistant audio
- Customizable and recoverable protection
- Joint protection against ASR and speaker verification

Representative papers:

- SpeechGuard
- For Human Ears Only

## 6. Side Channels and Physical Eavesdropping

Threat surface:

- VR sensors
- Vibration-based eavesdropping
- Conference audio channels
- Location privacy leakage

Research roles:

- Sensor-based speech extraction
- Side-channel privacy attacks
- Adversarial perturbation defenses
- Misinformation-based defenses

Representative papers:

- Speak Up, I'm Listening
- EveGuard
- Spoofing Eavesdroppers with Audio Misinformation
- Sniffing Location Privacy of Video Conference Users Using Free Audio Channels

## 7. Audio Language Model Safety

Threat surface:

- Audio-to-text understanding
- Audio-to-audio interaction
- Text-to-audio generation
- Text-to-music and video-to-music systems

Research roles:

- Harmful audio content understanding
- Refusal and safe transformation behavior
- Discriminatory or biased audio generation
- Accent, gender, and emotion bias in safety decisions
- Prompt stealing from generated audio or music

This category currently holds research ideas and should later be split into papers, benchmarks, datasets, and systems.

## Suggested Tag Schema

- Role tags: `attack`, `defense`, `benchmark`, `survey`, `dataset`, `tool`
- Domain tags: `speech`, `music`, `singing-voice`, `asr`, `speech-translation`, `tts`, `voice-conversion`
- Security tags: `privacy`, `watermark`, `provenance`, `copyright`, `side-channel`, `liveness`, `deepfake`
- Evaluation tags: `human-study`, `perception`, `black-box`, `physical-world`, `real-time`
