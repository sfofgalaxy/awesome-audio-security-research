# Top-Venue Papers 2025-2026

Collection date: 2026-05-31.

This page collects audio security and privacy papers from top security, AI, NLP, and speech venues. For ICASSP and Interspeech, the inclusion rule is conservative: a paper must clearly mention audio/speech/voice/music plus security, privacy, spoofing, deepfake, watermarking, adversarial robustness, authentication, anonymization, or related trustworthy-audio terms. Generic speaker verification performance papers are not listed unless the title or session makes the security/privacy connection explicit.

## Coverage Status

| Group | Venue | 2025 | 2026 |
| --- | --- | --- | --- |
| Security | IEEE S&P | Collected | Collected |
| Security | USENIX Security | Collected | Cycle 1 collected; later cycles pending if not public |
| Security | ACM CCS | Collected | Pending: accepted list not public as of 2026-05-31 |
| Security | NDSS | Collected | Collected |
| AI | ICLR | Collected | Collected |
| AI | ICML | Collected | Collected |
| AI | NeurIPS | Collected | Pending: accepted list not public as of 2026-05-31 |
| NLP | ACL | Collected | Pending: accepted papers page says coming soon |
| NLP | EMNLP | Collected | Pending: no public accepted list found |
| Speech | ICASSP | Collected from official program API | Collected |
| Speech | Interspeech | Collected | Pending: ISCA archive not public yet |

## Official Sources

| Venue | Source |
| --- | --- |
| IEEE S&P 2025 | <https://sp2025.ieee-security.org/accepted-papers.html> |
| IEEE S&P 2026 | <https://sp2026.ieee-security.org/accepted-papers.html> |
| USENIX Security 2025 | <https://www.usenix.org/conference/usenixsecurity25/technical-sessions> |
| USENIX Security 2026 Cycle 1 | <https://www.usenix.org/conference/usenixsecurity26/cycle1-accepted-papers> |
| ACM CCS 2025 | <https://www.sigsac.org/ccs/CCS2025/program/accepted-papers.html> |
| ACM CCS 2026 | <https://www.sigsac.org/ccs/CCS2026/> |
| NDSS 2025 | <https://www.ndss-symposium.org/ndss2025/accepted-papers/> |
| NDSS 2026 | <https://www.ndss-symposium.org/ndss2026/accepted-papers/> |
| ICLR 2025 | <https://openreview.net/group?id=ICLR.cc/2025/Conference> |
| ICLR 2026 | <https://openreview.net/group?id=ICLR.cc/2026/Conference> |
| ICML 2025 | <https://icml.cc/virtual/2025/papers.html?filter=titles> |
| ICML 2026 | <https://icml.cc/Downloads/2026> |
| NeurIPS 2025 | <https://neurips.cc/virtual/2025/papers.html?filter=titles> |
| ACL 2025 | <https://aclanthology.org/events/acl-2025/> |
| ACL 2026 | <https://2026.aclweb.org/program/accepted_papers/> |
| EMNLP 2025 | <https://aclanthology.org/events/emnlp-2025/> |
| EMNLP 2026 | <https://2026.emnlp.org/program/accepted_papers/> |
| ICASSP 2025 | <https://2025.ieeeicassp.org/program-schedule/> and <https://icassp25.conflux.events/program> |
| ICASSP 2026 | <https://cmsworkshops.com/ICASSP2026/papers/accepted_papers.php> |
| Interspeech 2025 | <https://www.isca-archive.org/interspeech_2025/index.html> |
| Interspeech 2026 | <https://www.isca-archive.org/interspeech_2026/index.html> |

## Security Four

### IEEE S&P 2025

| Paper | Category | Tags |
| --- | --- | --- |
| HARMONYCLOAK: Making Music Unlearnable for Generative AI | Music and Singing Voice Security | defense, copyright, music |
| Lombard-VLD: Voice Liveness Detection based on Human Auditory Feedback | Voice Authentication and Biometrics | liveness, defense |
| From One Stolen Utterance: Assessing the Risks of Voice Cloning in the AIGC Era | Audio Deepfake, Voice Cloning, and Spoofing | attack, benchmark, voice-cloning |
| EveGuard: Defeating Vibration-based Side-Channel Eavesdropping with Audio Adversarial Perturbations | Side Channels and Physical Eavesdropping | defense, side-channel |
| Sniffing Location Privacy of Video Conference Users Using Free Audio Channels | Side Channels and Physical Eavesdropping | attack, privacy |
| Spoofing Eavesdroppers with Audio Misinformation | Side Channels and Physical Eavesdropping | defense, misinformation |
| EvilHarmony: Stealthy Adversarial Attacks against Black-box Speech Recognition Systems | ASR and Speech Translation Security | attack, asr, black-box |

### IEEE S&P 2026

| Paper | Category | Tags |
| --- | --- | --- |
| Banshee: Target Switch Attacks on Gimbal-Stabilized Visual Tracking Systems via Acoustic Injection | Side Channels and Physical Eavesdropping | attack, acoustic-injection |
| The Person Behind the Sound: Demystifying Audio Private Attribute Profiling via Multimodal Large Language Models | Voice Privacy, Anonymization, and Speaker Protection | privacy, multimodal |
| Hijacking Large Audio-Language Models via Context-Agnostic and Imperceptible Auditory Prompt Injection | Audio-Language Model Safety | attack, prompt-injection, alm |

### USENIX Security 2025

| Paper | Category | Tags |
| --- | --- | --- |
| [Sound of Interference: Electromagnetic Eavesdropping Attack on Digital Microphones Using Pulse Density Modulation](https://www.usenix.org/conference/usenixsecurity25/presentation/onishi) | Side Channels and Physical Eavesdropping | attack, microphone, side-channel |
| [TimeTravel: Real-time Timing Drift Attack on System Time Using Acoustic Waves](https://www.usenix.org/conference/usenixsecurity25/presentation/liu-jianshuo) | Side Channels and Physical Eavesdropping | attack, acoustic |
| [VoiceWukong: Benchmarking Deepfake Voice Detection](https://www.usenix.org/conference/usenixsecurity25/presentation/yan-ziwei) | Audio Deepfake, Voice Cloning, and Spoofing | benchmark, detection |
| [SafeSpeech: Robust and Universal Voice Protection Against Malicious Speech Synthesis](https://www.usenix.org/conference/usenixsecurity25/presentation/zhang-zhisheng) | Audio Deepfake, Voice Cloning, and Spoofing | defense, voice-cloning |
| [AUDIO WATERMARK: Dynamic and Harmless Watermark for Black-box Voice Dataset Copyright Protection](https://www.usenix.org/conference/usenixsecurity25/presentation/guo-hanqing) | Watermarking, Provenance, and Data Rights | watermark, copyright |
| [Whispering Under the Eaves: Protecting User Privacy Against Commercial and LLM-powered Automatic Speech Recognition Systems](https://www.usenix.org/conference/usenixsecurity25/presentation/jin-weifei) | ASR and Speech Translation Security | defense, privacy, asr |
| [AudioMarkNet: Audio Watermarking for Deepfake Speech Detection](https://www.usenix.org/conference/usenixsecurity25/presentation/zong) | Watermarking, Provenance, and Data Rights | watermark, detection |
| [When Translators Refuse to Translate: A Novel Attack to Speech Translation Systems](https://www.usenix.org/conference/usenixsecurity25/presentation/wu-haolin) | ASR and Speech Translation Security | attack, speech-translation |
| [For Human Ears Only: Preventing Automated Monitoring on Voice Data](https://www.usenix.org/conference/usenixsecurity25/presentation/shahid) | Voice Privacy, Anonymization, and Speaker Protection | privacy, defense |
| [SpeechGuard: Recoverable and Customizable Speech Privacy Protection](https://www.usenix.org/conference/usenixsecurity25/presentation/zhang-jingmiao) | Voice Privacy, Anonymization, and Speaker Protection | privacy, recoverable |
| [EchoLLM: LLM-Augmented Acoustic Eavesdropping Attack on Bone Conduction Headphones with mmWave Radar](https://www.usenix.org/conference/usenixsecurity25/presentation/yao-xin) | Side Channels and Physical Eavesdropping | attack, eavesdropping, mmwave |

### USENIX Security 2026

| Paper | Category | Tags |
| --- | --- | --- |
| [Sirens' Whisper: Inaudible Near-Ultrasonic Jailbreaks of Speech-Driven LLMs](https://www.usenix.org/conference/usenixsecurity26/presentation/ling) | Audio-Language Model Safety | attack, jailbreak, ultrasonic |
| [Analyzing the WebRTC Ecosystem and Breaking Authentication in DTLS-SRTP](https://www.usenix.org/conference/usenixsecurity26/presentation/bach) | Voice Authentication and Biometrics | communication-security, webrtc |

### ACM CCS 2025

| Paper | Category | Tags |
| --- | --- | --- |
| [Combating Falsification of Speech Videos with Live Optical Signatures](https://dl.acm.org/doi/10.1145/3719027.3765112) | Audio Deepfake, Voice Cloning, and Spoofing | detection, audio-visual |
| [Threat from Windshield: Vehicle Windows as Involuntary Attack Sources on Automotive Voice Assistants](https://dl.acm.org/doi/10.1145/3719027.3765171) | Side Channels and Physical Eavesdropping | attack, voice-assistant |
| [WhisperTest: A Cross-Platform Library for iOS UI Automation](https://dl.acm.org/doi/10.1145/3719027.3765183) | ASR and Speech Translation Security | tooling, voice-interface |

### NDSS 2025

| Paper | Category | Tags |
| --- | --- | --- |
| [Characterizing the Impact of Audio Deepfakes in the Presence of Cochlear Implant](https://www.ndss-symposium.org/ndss-paper/characterizing-the-impact-of-audio-deepfakes-in-the-presence-of-cochlear-implant/) | Audio Deepfake, Voice Cloning, and Spoofing | human-study, accessibility |
| [SongBsAb: A Dual Prevention Approach against Singing Voice Conversion based Illegal Song Covers](https://www.ndss-symposium.org/ndss-paper/songbsab-a-dual-prevention-approach-against-singing-voice-conversion-based-illegal-song-covers/) | Music and Singing Voice Security | defense, singing-voice |
| [Speak Up, I'm Listening: Extracting Speech from Zero-Permission VR Sensors](https://www.ndss-symposium.org/ndss-paper/speak-up-im-listening-extracting-speech-from-zero-permission-vr-sensors/) | Side Channels and Physical Eavesdropping | attack, vr, sensor |
| [VoiceRadar: Voice Deepfake Detection using Micro-Frequency and Compositional Analysis](https://www.ndss-symposium.org/ndss-paper/voiceradar-voice-deepfake-detection-using-micro-frequency-and-compositional-analysis/) | Audio Deepfake, Voice Cloning, and Spoofing | detection, deepfake |

### NDSS 2026

| Paper | Category | Tags |
| --- | --- | --- |
| [Hiding an Ear in Plain Sight: On the Practicality and Implications of Acoustic Eavesdropping with Telecom Fiber Optic Cables](https://www.ndss-symposium.org/ndss-paper/hiding-an-ear-in-plain-sight-on-the-practicality-and-implications-of-acoustic-eavesdropping-with-telecom-fiber-optic-cables/) | Side Channels and Physical Eavesdropping | attack, eavesdropping, fiber |
| [Rethinking Fake Speech Detection: A Generalized Framework Leveraging Spectrogram Magnitude](https://www.ndss-symposium.org/ndss-paper/rethinking-fake-speech-detection-a-generalized-framework-leveraging-spectrogram-magnitude/) | Audio Deepfake, Voice Cloning, and Spoofing | detection, fake-speech |

## AI Venues

### ICLR 2025

| Paper | Category | Tags |
| --- | --- | --- |
| [AdvWave: Stealthy Adversarial Jailbreak Attack against Large Audio-Language Models](https://openreview.net/forum?id=0BujOfTqab) | Audio-Language Model Safety | attack, jailbreak, alm |
| [I Can Hear You: Selective Robust Training for Deepfake Audio Detection](https://openreview.net/forum?id=2GcR9bO620) | Audio Deepfake, Voice Cloning, and Spoofing | detection, robustness |
| [Rethinking Audio-Visual Adversarial Vulnerability from Temporal and Modality Perspectives](https://openreview.net/forum?id=ePJrZLIqpV) | ASR and Speech Translation Security | adversarial, audio-visual |
| [Bridging the Data Provenance Gap Across Text, Speech, and Video](https://openreview.net/forum?id=G5DziesYxL) | Watermarking, Provenance, and Data Rights | provenance, multimodal |
| [ILLUSION: Unveiling Truth with a Comprehensive Multi-Modal, Multi-Lingual Deepfake Dataset](https://openreview.net/forum?id=qnlG3zPQUy) | Audio Deepfake, Voice Cloning, and Spoofing | dataset, multimodal |
| [AVHBench: A Cross-Modal Hallucination Benchmark for Audio-Visual Large Language Models](https://openreview.net/forum?id=jTEKTdI3K9) | Audio-Language Model Safety | benchmark, hallucination |
| [Speech Robust Bench: A Robustness Benchmark For Speech Recognition](https://openreview.net/forum?id=D0LuQNZfEl) | ASR and Speech Translation Security | benchmark, robustness, asr |

### ICLR 2026

| Paper | Category | Tags |
| --- | --- | --- |
| [TVTSyn: Content-Synchronous Time-Varying Timbre for Streaming Voice Conversion and Anonymization](https://openreview.net/forum?id=Tf4Lfw85lS) | Voice Privacy, Anonymization, and Speaker Protection | anonymization, voice-conversion |
| [Are Deep Speech Denoising Models Robust to Adversarial Noise?](https://openreview.net/forum?id=WtH2JxKJKf) | ASR and Speech Translation Security | robustness, adversarial |
| [VoxPrivacy: A Benchmark for Evaluating Interactional Privacy of Speech Language Models](https://openreview.net/forum?id=GNo1qMqgPD) | Voice Privacy, Anonymization, and Speaker Protection | benchmark, privacy, slm |
| [AudioTrust: Benchmarking The Multifaceted Trustworthiness of Audio Large Language Models](https://openreview.net/forum?id=E823AY0taq) | Audio-Language Model Safety | benchmark, trustworthiness |
| [JALMBench: Benchmarking Jailbreak Vulnerabilities in Audio Language Models](https://openreview.net/forum?id=DJkQ236C8B) | Audio-Language Model Safety | benchmark, jailbreak |
| [Generative Adversarial Post-Training Mitigates Reward Hacking in Live Human-AI Music Interaction](https://openreview.net/forum?id=FXm5U16vxD) | Music and Singing Voice Security | safety, music |

### ICML 2025

| Paper | Category | Tags |
| --- | --- | --- |
| [Do Not Mimic My Voice: Speaker Identity Unlearning for Zero-Shot Text-to-Speech](https://icml.cc/virtual/2025/poster/46647) | Voice Privacy, Anonymization, and Speaker Protection | unlearning, tts |
| [De-AntiFake: Rethinking the Protective Perturbations Against Voice Cloning Attacks](https://icml.cc/virtual/2025/poster/45768) | Audio Deepfake, Voice Cloning, and Spoofing | defense, voice-cloning |
| [XAttnMark: Learning Robust Audio Watermarking with Cross-Attention](https://icml.cc/virtual/2025/poster/43452) | Watermarking, Provenance, and Data Rights | watermark, robustness |

### ICML 2026

| Paper | Category | Tags |
| --- | --- | --- |
| [Acoustic Interference: A New Paradigm Weaponizing Acoustic Latent Semantic for Universal Jailbreak against Large Audio Language Models](https://icml.cc/virtual/2026/poster/65189) | Audio-Language Model Safety | attack, jailbreak |
| [Alethia: a Foundational Encoder for Voice Deepfakes](https://icml.cc/virtual/2026/poster/61173) | Audio Deepfake, Voice Cloning, and Spoofing | detection, encoder |
| [FoeGlass: When Simple In-Context Learning Is Enough for Red Teaming Audio Deepfake Detectors](https://icml.cc/virtual/2026/poster/64852) | Audio Deepfake, Voice Cloning, and Spoofing | red-team, detection |
| [From Talking to Singing: A New Challenge for Audio-Visual Deepfake Detection](https://icml.cc/virtual/2026/poster/62663) | Music and Singing Voice Security | detection, singing-voice |
| [Hearing Without Noticing? Attention-Aware Stealthy Black-box Adversarial Audio Attacks](https://icml.cc/virtual/2026/poster/63275) | ASR and Speech Translation Security | attack, black-box |
| [Hidden in Plain Tokens: Simply Robust, Gradient-Free Watermark for Synthetic Audio](https://icml.cc/virtual/2026/poster/62388) | Watermarking, Provenance, and Data Rights | watermark, synthetic-audio |
| [HyperPotter: Spell the Charm of High-Order Interactions in Audio Deepfake Detection](https://icml.cc/virtual/2026/poster/60926) | Audio Deepfake, Voice Cloning, and Spoofing | detection |
| [LALM-as-a-Judge: Benchmarking Large Audio-Language Models for Safety Evaluation in Multi-Turn Spoken Dialogues](https://icml.cc/virtual/2026/poster/66557) | Audio-Language Model Safety | benchmark, safety |
| [Learning Tight Rejection Boundaries without Negatives for Strict One-Class Audio Deepfake Detection](https://icml.cc/virtual/2026/poster/63118) | Audio Deepfake, Voice Cloning, and Spoofing | detection, one-class |
| [MusicDET: Zero-Shot AI-Generated Music Detection](https://icml.cc/virtual/2026/poster/65106) | Music and Singing Voice Security | detection, music |
| [Position: Towards Responsible Evaluation for Text-to-Speech](https://icml.cc/virtual/2026/poster/67095) | Audio Deepfake, Voice Cloning, and Spoofing | position, tts |
| [SARSteer: Safeguarding Large Audio Language Models via Safe-Ablated Refusal Steering](https://icml.cc/virtual/2026/poster/66551) | Audio-Language Model Safety | defense, guardrail |
| [Scaling Laws in Model Fine-tuning for Audio DeepFake Detection](https://icml.cc/virtual/2026/poster/60632) | Audio Deepfake, Voice Cloning, and Spoofing | detection, scaling |
| [SONAR: Spectral-Contrastive Audio Residuals for Generalizable Deepfake Detection](https://icml.cc/virtual/2026/poster/64783) | Audio Deepfake, Voice Cloning, and Spoofing | detection, generalization |
| [Sparse Tokens Suffice: Jailbreaking Audio Language Models via Token-Aware Gradient Optimization](https://icml.cc/virtual/2026/poster/65673) | Audio-Language Model Safety | attack, jailbreak |
| [Speech-Audio Compositional Attacks on Multimodal LLMs and Their Defense with SALMONN-Guard](https://icml.cc/virtual/2026/poster/64737) | Audio-Language Model Safety | attack, defense, multimodal |
| [Do Audio LLMs Listen or Read? Analyzing and Mitigating Paralinguistic Failures with VoxParadox](https://icml.cc/virtual/2026/poster/60946) | Audio-Language Model Safety | benchmark, trustworthiness |

### NeurIPS 2025

| Paper | Category | Tags |
| --- | --- | --- |
| [Enabling Differentially Private Federated Learning for Speech Recognition: Benchmarks, Adaptive Optimizers, and Gradient Clipping](https://neurips.cc/virtual/2025/poster/119958) | Voice Privacy, Anonymization, and Speaker Protection | differential-privacy, asr |
| [Robust Distortion-Free Watermark for Autoregressive Audio Generation Models](https://neurips.cc/virtual/2025/poster/117426) | Watermarking, Provenance, and Data Rights | watermark, generated-audio |
| [E2E-VGuard: Adversarial Prevention for Production LLM-based End-To-End Speech Synthesis](https://neurips.cc/virtual/2025/poster/119295) | Audio Deepfake, Voice Cloning, and Spoofing | defense, tts |
| [Jailbreak-AudioBench: In-Depth Evaluation and Analysis of Jailbreak Threats for Large Audio Language Models](https://neurips.cc/virtual/2025/poster/121592) | Audio-Language Model Safety | benchmark, jailbreak |
| [ALMGuard: Safety Shortcuts and Where to Find Them as Guardrails for Audio-Language Models](https://neurips.cc/virtual/2025/poster/115978) | Audio-Language Model Safety | defense, guardrail |
| [AHa-Bench: Benchmarking Audio Hallucinations in Large Audio-Language Models](https://neurips.cc/virtual/2025/poster/121405) | Audio-Language Model Safety | benchmark, hallucination |
| [AVCD: Mitigating Hallucinations in Audio-Visual Large Language Models through Contrastive Decoding](https://neurips.cc/virtual/2025/poster/119986) | Audio-Language Model Safety | defense, hallucination |
| [AVROBUSTBENCH: Benchmarking the Robustness of Audio-Visual Recognition Models at Test-Time](https://neurips.cc/virtual/2025/poster/121746) | Audio-Language Model Safety | benchmark, robustness |
| [The Curse of Multi-Modalities: Evaluating Hallucinations of Large Multimodal Models across Language, Visual, and Audio](https://neurips.cc/virtual/2025/poster/121756) | Audio-Language Model Safety | benchmark, hallucination |

## NLP Venues

### ACL 2025

| Paper | Category | Tags |
| --- | --- | --- |
| [SpeechFake: A Large-Scale Multilingual Speech Deepfake Dataset Incorporating Cutting-Edge Generation Methods](https://aclanthology.org/2025.acl-long.493/) | Audio Deepfake, Voice Cloning, and Spoofing | dataset, multilingual |
| [Different Speech Translation Models Encode and Translate Speaker Gender Differently](https://aclanthology.org/2025.acl-short.78/) | Voice Privacy, Anonymization, and Speaker Protection | fairness, speech-translation |
| [Mind the Gap: Static and Interactive Evaluations of Large Audio Models](https://aclanthology.org/2025.acl-long.428/) | Audio-Language Model Safety | evaluation, trustworthiness |
| [Benchmarking Open-ended Audio Dialogue Understanding for Large Audio-Language Models](https://aclanthology.org/2025.acl-long.237/) | Audio-Language Model Safety | benchmark, dialogue |
| [Con Instruction: Universal Jailbreaking of Multimodal Large Language Models via Non-Textual Modalities](https://aclanthology.org/2025.acl-long.146/) | Audio-Language Model Safety | jailbreak, multimodal |

### EMNLP 2025

| Paper | Category | Tags |
| --- | --- | --- |
| [When Audio and Text Disagree: Revealing Text Bias in Large Audio-Language Models](https://aclanthology.org/2025.emnlp-main.246/) | Audio-Language Model Safety | bias, alm |
| [Reshaping Representation Space to Balance the Safety and Over-rejection in Large Audio Language Models](https://aclanthology.org/2025.emnlp-main.510/) | Audio-Language Model Safety | safety, over-refusal |
| [Towards Holistic Evaluation of Large Audio-Language Models: A Comprehensive Survey](https://aclanthology.org/2025.emnlp-main.514/) | Audio-Language Model Safety | survey, evaluation |
| [SPIRIT: Patching Speech Language Models against Jailbreak Attacks](https://aclanthology.org/2025.emnlp-main.734/) | Audio-Language Model Safety | defense, jailbreak |
| [What You Read Isn't What You Hear: Linguistic Sensitivity in Deepfake Speech Detection](https://aclanthology.org/2025.emnlp-main.794/) | Audio Deepfake, Voice Cloning, and Spoofing | detection, linguistic |
| [TrojanWave: Exploiting Prompt Learning for Stealthy Backdoor Attacks on Large Audio-Language Models](https://aclanthology.org/2025.emnlp-main.940/) | Audio-Language Model Safety | attack, backdoor |
| [Audio-Reasoner: Improving Reasoning Capability in Large Audio Language Models](https://aclanthology.org/2025.emnlp-main.1216/) | Audio-Language Model Safety | evaluation, reasoning |
| [Evaluating Robustness of Large Audio Language Models to Audio Injection: An Empirical Study](https://aclanthology.org/2025.emnlp-main.1303/) | Audio-Language Model Safety | attack, audio-injection |
| [VoiceBBQ: Investigating Effect of Content and Acoustics in Social Bias of Spoken Language Model](https://aclanthology.org/2025.emnlp-main.1461/) | Audio-Language Model Safety | bias, spoken-language |
| [BRSpeech-DF: A Deep Fake Synthetic Speech Dataset for Portuguese Zero-Shot TTS](https://aclanthology.org/2025.emnlp-main.1780/) | Audio Deepfake, Voice Cloning, and Spoofing | dataset, multilingual |

## Speech Venues

### ICASSP 2025

Source: official ICASSP 2025 Program Schedule links to the Conflux program. Program IDs below come from the public Conflux timeblocks API.

| Paper | Category | Tags |
| --- | --- | --- |
| Quantum-Trained Convolutional Neural Network for Deepfake Audio Detection | Audio Deepfake, Voice Cloning, and Spoofing | detection, workshop, id-54367 |
| An imperceptible adversarial watermarking to prevent voice cloning | Watermarking, Provenance, and Data Rights | watermark, voice-cloning, id-54306 |
| Latent Watermarking of Audio generative Models | Watermarking, Provenance, and Data Rights | watermark, generated-audio, id-47172 |
| AUDIO-VISUAL DEEPFAKE DETECTION WITH LOCAL TEMPORAL INCONSISTENCIES | Audio Deepfake, Voice Cloning, and Spoofing | detection, audio-visual, id-50204 |
| SpecViT: A Custom Vision-Transformer based Approach for Audio Deepfake Detection | Audio Deepfake, Voice Cloning, and Spoofing | detection, id-50619 |
| Poisoning The Diffusion: A Simple and Robust Watermarking Method for Audio Generation | Watermarking, Provenance, and Data Rights | watermark, generated-audio, id-50998 |
| Why disentanglement-based speaker anonymization systems fail at preserving emotions? | Voice Privacy, Anonymization, and Speaker Protection | anonymization, privacy, id-47700 |
| Emotion-Preserving Prosody Anonymization Network for Voice Privacy Protection | Voice Privacy, Anonymization, and Speaker Protection | anonymization, privacy, id-48990 |
| The First VoicePrivacy Attacker Challenge | Voice Privacy, Anonymization, and Speaker Protection | challenge, privacy, id-54053 |
| SpecWav-Attack: Leveraging Spectrogram Resizing and Wav2Vec 2.0 for Attacking Anonymized Speech | Voice Privacy, Anonymization, and Speaker Protection | attack, anonymization, id-54049 |
| Attacking Voice Anonymization Systems with Augmented Feature and Speaker Identity Difference | Voice Privacy, Anonymization, and Speaker Protection | attack, anonymization, id-54052 |
| Explaining Speaker and Spoof Embeddings via Probing | Voice Authentication and Biometrics | anti-spoofing, interpretability, id-50930 |
| Investigating voiced and unvoiced regions of speech for audio deepfake detection | Audio Deepfake, Voice Cloning, and Spoofing | detection, id-51982 |
| LlamaPartialSpoof: An LLM-Driven Fake Speech Dataset Simulating Disinformation Generation | Audio Deepfake, Voice Cloning, and Spoofing | dataset, fake-speech, id-49996 |
| DiffAttack: Diffusion-based Timbre-reserved Adversarial Attack in Speaker Identification | Voice Authentication and Biometrics | attack, speaker-identification, id-47238 |
| PET: High-Frequency Temporal Self-Consistency Learning for Partially Deepfake Audio Localization | Audio Deepfake, Voice Cloning, and Spoofing | localization, partial-deepfake, id-48215 |
| Parameter-Efficient Federal-Tuning Enhances Privacy Preserving for Speech Emotion Recognition | Voice Privacy, Anonymization, and Speaker Protection | privacy, federated-learning, id-48625 |
| Freeze and Learn: Continual Learning with Selective Freezing for Speech Deepfake Detection | Audio Deepfake, Voice Cloning, and Spoofing | detection, continual-learning, id-52119 |
| Audio Features Investigation for Singing Voice Deepfake Detection | Music and Singing Voice Security | detection, singing-voice, id-51583 |
| Fooling the Forgers: A Multi-Stage Framework for Audio Deepfake Detection | Audio Deepfake, Voice Cloning, and Spoofing | detection, id-47040 |
| From Voices to Beats: Enhancing Music Deepfake Detection by Identifying Forgeries in Background | Music and Singing Voice Security | detection, music, id-49176 |
| Generating Targeted Universal Adversarial Perturbation against Automatic Speech Recognition via Phoneme Tailoring | ASR and Speech Translation Security | attack, asr, id-51522 |
| What Does an Audio Deepfake Detector Focus on? A Study in the Time Domain | Audio Deepfake, Voice Cloning, and Spoofing | detection, interpretability, id-52221 |
| Easy, Interpretable, Effective: openSMILE for voice deepfake detection | Audio Deepfake, Voice Cloning, and Spoofing | detection, interpretable, id-46711 |
| Optimized Dynamic Watermarking for Audio DNNs with Adaptive Embedding and Boundary Sampling | Watermarking, Provenance, and Data Rights | watermark, audio-dnn, id-48130 |
| WMCodec: End-to-End Neural Speech Codec with Deep Watermarking for Authenticity Verification | Watermarking, Provenance, and Data Rights | watermark, authenticity, id-50883 |
| Continual Unsupervised Domain Adaptation for Audio Deepfake Detection | Audio Deepfake, Voice Cloning, and Spoofing | detection, domain-adaptation, id-51385 |
| Recursive Feature Learning from Pre-Trained Models for Spoofing Speech Detection | Audio Deepfake, Voice Cloning, and Spoofing | spoofing, detection, id-46541 |
| GNCL: A Graph Neural Network with Consistency Loss for Segment-Level Spoofed Speech Detection | Audio Deepfake, Voice Cloning, and Spoofing | spoofing, detection, id-51096 |
| An Explainable Probabilistic Attribute Embedding Approach for Spoofed Speech Characterization | Audio Deepfake, Voice Cloning, and Spoofing | spoofing, explainable, id-51295 |
| Integrating Spectro-Temporal Cross Aggregation and Multi Scale Dynamic Learning for Audio Deepfake Detection | Audio Deepfake, Voice Cloning, and Spoofing | detection, id-52933 |
| Large-Scale Recurrent Neural Networks with Fully Homomorphic Encryption for Privacy-Enhanced Speaker Identification | Voice Privacy, Anonymization, and Speaker Protection | privacy, speaker-identification, id-51213 |
| Detecting and Defending Against Adversarial Attacks on Automatic Speech Recognition via Diffusion Models | ASR and Speech Translation Security | defense, asr, id-46951 |
| Wave-Spectrogram Cross-Modal Aggregation for Audio Deepfake Detection | Audio Deepfake, Voice Cloning, and Spoofing | detection, id-49658 |
| ANALYSIS OF SPEECH TEMPORAL DYNAMICS IN THE CONTEXT OF SPEAKER VERIFICATION AND VOICE ANONYMIZATION | Voice Privacy, Anonymization, and Speaker Protection | anonymization, speaker-verification, id-52064 |
| ROBUST AUDIO DEEPFAKE DETECTION USING ENSEMBLE CONFIDENCE CALIBRATION | Audio Deepfake, Voice Cloning, and Spoofing | detection, robustness, id-47942 |
| Deepfake Detection of Singing Voices With Whisper Encodings | Music and Singing Voice Security | detection, singing-voice, id-51004 |
| Generalize Audio Deepfake Algorithm Recognition via Attribution Enhancement | Audio Deepfake, Voice Cloning, and Spoofing | attribution, detection, id-48802 |
| Black-Box Adversarial Defense Against Voice Conversion Using Latent Space Perturbation | Audio Deepfake, Voice Cloning, and Spoofing | defense, voice-conversion, id-48887 |
| Adversarial Training and Gradient Optimization for Partially Deepfake Audio Localization | Audio Deepfake, Voice Cloning, and Spoofing | localization, adversarial-training, id-50829 |
| FreqSense: Universal and Low-Latency Adversarial Example Detection for Speaker Recognition with Interpretability in Frequency Domain | Voice Authentication and Biometrics | adversarial, speaker-recognition, id-48236 |
| Generalizable Audio Deepfake Detection via Latent Space Refinement and Augmentation | Audio Deepfake, Voice Cloning, and Spoofing | detection, generalization, id-50556 |
| SpoofCeleb: Speech Deepfake Detection and SASV In The Wild | Audio Deepfake, Voice Cloning, and Spoofing | dataset, sasv, id-53823 |
| Audio Codec Augmentation for Robust Collaborative Watermarking of Speech Synthesis | Watermarking, Provenance, and Data Rights | watermark, speech-synthesis, id-49182 |

### ICASSP 2026

| Paper | Category | Tags |
| --- | --- | --- |
| A PARAMETER-EFFICIENT MULTI-SCALE CONVOLUTIONAL ADAPTER FOR SYNTHETIC SPEECH DETECTION | Audio Deepfake, Voice Cloning, and Spoofing | detection, paper-14171 |
| A SUPERB-Style Benchmark of Self-Supervised Speech Models for Audio Deepfake Detection | Audio Deepfake, Voice Cloning, and Spoofing | benchmark, detection, paper-15434 |
| ADDRESSING GRADIENT MISALIGNMENT IN DATA-AUGMENTED TRAINING FOR ROBUST SPEECH DEEPFAKE DETECTION | Audio Deepfake, Voice Cloning, and Spoofing | detection, robustness, paper-12179 |
| ASSESSING THE IMPACT OF SPEAKER IDENTITY IN SPEECH SPOOFING DETECTION | Audio Deepfake, Voice Cloning, and Spoofing | spoofing, detection, paper-7641 |
| AUDIO DEEPFAKE DETECTION AT THE FIRST GREETING: "HI!" | Audio Deepfake, Voice Cloning, and Spoofing | detection, paper-13821 |
| AUDIO-VISUAL DEEPFAKE GENERATION AND DETECTION: AN EXPLORATORY SURVEY | Audio Deepfake, Voice Cloning, and Spoofing | survey, audio-visual, paper-13509 |
| AUDIO-TEXT JAILBREAK ATTACK ON LARGE AUDIO-LANGUAGE MODELS: TOWARDS GENERALITY AND STEALTHINESS | Audio-Language Model Safety | attack, jailbreak, paper-12298 |
| AURA: A STEGAFORMER-BASED SCALABLE DEEP AUDIO WATERMARK WITH EXTREME ROBUSTNESS | Watermarking, Provenance, and Data Rights | watermark, paper-17380 |
| AUXILIARY MULTI-LABEL TRAINING FOR IMPROVING THE ROBUSTNESS OF AUDIO DEEPFAKE DETECTION ON AI-PROCESSED DATA | Audio Deepfake, Voice Cloning, and Spoofing | detection, robustness, paper-10465 |
| AVATAR: AUDIO-VISUAL ADAPTIVE FUSION VIA TRAINED AGENT REINFORCEMENT FOR MULTIMODAL DEEPFAKE DETECTION | Audio Deepfake, Voice Cloning, and Spoofing | detection, audio-visual, paper-15583 |
| BeepBeep: Leveraging Structural Attenuation for Robust Device-to-Device Authentication | Voice Authentication and Biometrics | authentication, device, paper-11368 |
| COMBINING SSL SPEECH FEATURES, CONTEXTUAL TRANSFORMERS AND MAMBA MODELS FOR REALISTIC AUDIO SPOOFING DETECTION | Audio Deepfake, Voice Cloning, and Spoofing | spoofing, detection, paper-14215 |
| CompSpoof: A Dataset and Joint Learning Framework for Component-Level Audio Anti-spoofing Countermeasures | Audio Deepfake, Voice Cloning, and Spoofing | dataset, anti-spoofing, paper-13956 |
| CONTENT ANONYMIZATION FOR PRIVACY IN LONG-FORM AUDIO | Voice Privacy, Anonymization, and Speaker Protection | anonymization, privacy, paper-16132 |
| CONTENT LEAKAGE IN LIBRISPEECH AND ITS IMPACT ON THE PRIVACY EVALUATION OF SPEAKER ANONYMIZATION | Voice Privacy, Anonymization, and Speaker Protection | privacy, anonymization, paper-11020 |
| DETECTING AND ATTRIBUTING SYNTHETIC SPANISH SPEECH: THE HISPASPOOF DATASET | Audio Deepfake, Voice Cloning, and Spoofing | dataset, attribution, paper-6231 |
| DISCRETE-CONTINUOUS FUSION WITH ADAPTIVE HIERARCHICAL FEATURES FOR AUDIO DEEPFAKE DETECTION | Audio Deepfake, Voice Cloning, and Spoofing | detection, paper-1143 |
| Disentangled Authenticity Representation for Partially Deepfake Audio Localization | Audio Deepfake, Voice Cloning, and Spoofing | localization, partial-deepfake, paper-15561 |
| DYNAMIC NOISE-AWARE MULTI LORA FRAMEWORK TOWARDS REAL-WORLD AUDIO DEEPFAKE DETECTION | Audio Deepfake, Voice Cloning, and Spoofing | detection, real-world, paper-11567 |
| DYNAMIC SPECTROGRAM ANALYSIS WITH LOCAL-AWARE GRAPH NETWORKS FOR AUDIO ANTI-SPOOFING | Audio Deepfake, Voice Cloning, and Spoofing | anti-spoofing, paper-10444 |
| ECHOFAKE: A REPLAY-AWARE DATASET FOR PRACTICAL SPEECH DEEPFAKE DETECTION | Audio Deepfake, Voice Cloning, and Spoofing | dataset, replay, paper-8921 |
| EMOTION AND ACOUSTICS SHOULD AGREE: CROSS-LEVEL INCONSISTENCY ANALYSIS FOR AUDIO DEEPFAKE DETECTION | Audio Deepfake, Voice Cloning, and Spoofing | detection, emotion, paper-6751 |
| Environmental Sound Deepfake Detection Challenge: An Overview | Audio Deepfake, Voice Cloning, and Spoofing | challenge, environmental-sound, paper-19019 |
| EVOLVING AASIST: TOWARDS SCALABLE AND GENERALIZABLE ANTI-SPOOFING MODELS | Audio Deepfake, Voice Cloning, and Spoofing | anti-spoofing, paper-13609 |
| FAKE SPEECH WILD: DETECTING DEEPFAKE SPEECH ON SOCIAL MEDIA PLATFORM | Audio Deepfake, Voice Cloning, and Spoofing | detection, in-the-wild, paper-2021 |
| FEW-SHOT RECOGNITION OF AUDIO DEEPFAKE GENERATORS USING GRAPH-BASED PROTOTYPE ADAPTATION | Audio Deepfake, Voice Cloning, and Spoofing | attribution, few-shot, paper-3869 |
| GENERALIZABLE DETECTION OF AUDIO DEEPFAKES | Audio Deepfake, Voice Cloning, and Spoofing | detection, generalization, paper-1050 |
| GENERALIZABLE SPEECH DEEPFAKE DETECTION VIA INFORMATION BOTTLENECK ENHANCED ADVERSARIAL ALIGNMENT | Audio Deepfake, Voice Cloning, and Spoofing | detection, generalization, paper-12240 |
| GENERALIZABLE SPEECH DEEPFAKE DETECTION VIA META-LEARNED LORA | Audio Deepfake, Voice Cloning, and Spoofing | detection, generalization, paper-12375 |
| Hanui: Harnessing Distributional Discrepancies for Singing Voice Deepfake Detection | Music and Singing Voice Security | detection, singing-voice, paper-15400 |
| HOW TO LABEL RESYNTHESIZED AUDIO: THE DUAL ROLE OF NEURAL AUDIO CODECS IN AUDIO DEEPFAKE DETECTION | Audio Deepfake, Voice Cloning, and Spoofing | detection, codec, paper-14694 |
| HYBRID PRUNING: IN-SITU COMPRESSION OF SELF-SUPERVISED SPEECH MODELS FOR SPEAKER VERIFICATION AND ANTI-SPOOFING | Voice Authentication and Biometrics | anti-spoofing, speaker-verification, paper-1139 |
| IDENTITY LEAKAGE THROUGH ACCENT CUES IN VOICE ANONYMISATION | Voice Privacy, Anonymization, and Speaker Protection | privacy, anonymization, paper-16493 |
| IMPROVING THE SPEAKER ANONYMIZATION EVALUATION'S ROBUSTNESS TO TARGET SPEAKERS WITH ADVERSARIAL LEARNING | Voice Privacy, Anonymization, and Speaker Protection | anonymization, robustness, paper-1281 |
| Impact of Phonetics on Speaker Identity in Adversarial Voice Attack | Voice Authentication and Biometrics | attack, speaker-identity, paper-10422 |
| LENSLESSMIC: AUDIO ENCRYPTION AND AUTHENTICATION VIA LENSLESS COMPUTATIONAL IMAGING | Voice Authentication and Biometrics | authentication, encryption, paper-14650 |
| LINGUARD: AUTHENTICATING SPEECH RECORDINGS USING SPEECH RECOGNITION AND WATERMARK | Watermarking, Provenance, and Data Rights | authentication, watermark, paper-13170 |
| LISTEN, BUT DON'T LEAK: SENSITIVE DATA PROTECTION FOR PRIVACY AWARE AUTOMATIC SPEECH RECOGNITION WITH ACOUSTIC TRIGGERS | Voice Privacy, Anonymization, and Speaker Protection | privacy, asr, paper-11912 |
| LOCALIZING SPEECH DEEPFAKES BEYOND TRANSITIONS VIA SEGMENT-AWARE LEARNING | Audio Deepfake, Voice Cloning, and Spoofing | localization, paper-12246 |
| MULTI-TASK TRANSFORMER FOR EXPLAINABLE SPEECH DEEPFAKE DETECTION VIA FORMANT MODELING | Audio Deepfake, Voice Cloning, and Spoofing | detection, explainable, paper-11888 |
| ON DEEPFAKE VOICE DETECTION - IT'S ALL IN THE PRESENTATION | Audio Deepfake, Voice Cloning, and Spoofing | detection, paper-9247 |
| PRSA: PREVENTING MALICIOUS SPEAKER RECOGNITION AND SPEECH SYNTHESIS SIMULTANEOUSLY WITH ADVERSARIAL EXAMPLES | Voice Privacy, Anonymization, and Speaker Protection | defense, adversarial, paper-6030 |
| Privacy Disclosure of Similarity Rank in Speech and Language Processing | Voice Privacy, Anonymization, and Speaker Protection | privacy, paper-19051 |
| ROBUST DEEPFAKE AUDIO DETECTION VIA MULTI-LEVEL INTERMEDIATE FEATURE FUSION | Audio Deepfake, Voice Cloning, and Spoofing | detection, robustness, paper-12497 |
| RoCo: Robust Code for Fast and Effective Proactive Defense against Voice Cloning Attack | Audio Deepfake, Voice Cloning, and Spoofing | defense, voice-cloning, paper-10739 |
| Speaker Anonymisation for Speech-based Suicide Risk Detection | Voice Privacy, Anonymization, and Speaker Protection | anonymization, privacy, paper-15972 |
| STREAMMARK: A DEEP LEARNING-BASED SEMI-FRAGILE AUDIO WATERMARKING FOR PROACTIVE DEEPFAKE DETECTION | Watermarking, Provenance, and Data Rights | watermark, detection, paper-9970 |
| STREAM-VOICE-ANON: ENHANCING UTILITY OF REAL-TIME SPEAKER ANONYMIZATION VIA NEURAL AUDIO CODEC AND LANGUAGE MODELS | Voice Privacy, Anonymization, and Speaker Protection | anonymization, real-time, paper-14185 |
| Target speaker anonymization in multi-speaker recordings | Voice Privacy, Anonymization, and Speaker Protection | anonymization, multi-speaker, paper-17739 |
| Task-Oriented Sound Privacy Preservation for Sound Event Detection via End-to-End Adversarial Multi-task Learning | Voice Privacy, Anonymization, and Speaker Protection | privacy, sound-event, paper-16678 |
| THE IMPACT OF AUDIO WATERMARKING ON AUDIO ANTI-SPOOFING COUNTERMEASURES | Watermarking, Provenance, and Data Rights | watermark, anti-spoofing, paper-15778 |
| TRI-ATTENTION FUSION: JOINT TEMPORAL-SPECTRAL AND BIDIRECTIONAL MODELING FOR SPEECH SPOOFING DETECTION | Audio Deepfake, Voice Cloning, and Spoofing | spoofing, detection, paper-14667 |
| UNDERSTANDING THE STRENGTHS AND WEAKNESSES OF SSL MODELS FOR AUDIO DEEPFAKE MODEL ATTRIBUTION | Audio Deepfake, Voice Cloning, and Spoofing | attribution, ssl, paper-2830 |
| VoxGuard: Evaluating user and attribute privacy in speech via Membership Inference Attacks | Voice Privacy, Anonymization, and Speaker Protection | privacy, membership-inference, paper-15507 |
| WaveSP-Net: Learnable Wavelet-Domain Sparse Prompt Tuning for Speech Deepfake Detection | Audio Deepfake, Voice Cloning, and Spoofing | detection, paper-1714 |
| WildSpoof: Advancing In-the-wild Data in Text-to-speech Generation and Spoofing-aware Automatic Speaker Verification | Audio Deepfake, Voice Cloning, and Spoofing | dataset, sasv, paper-19130 |
| XLSR-MAMBA: A DUAL-COLUMN BIDIRECTIONAL STATE SPACE MODEL FOR SPOOFING ATTACK DETECTION | Audio Deepfake, Voice Cloning, and Spoofing | spoofing, detection, paper-18903 |
| ZK-VSA: ZERO-KNOWLEDGE VERIFIABLE SPEAKER ANONYMIZATION LEVERAGING PHASE VOCODER WITH TIME-SCALE MODIFICATION | Voice Privacy, Anonymization, and Speaker Protection | anonymization, zero-knowledge, paper-10062 |

### Interspeech 2025

| Paper | Category | Tags |
| --- | --- | --- |
| [Bayesian Learning for Domain-Invariant Speaker Verification and Anti-Spoofing](https://www.isca-archive.org/interspeech_2025/li25h_interspeech.html) | Voice Authentication and Biometrics | anti-spoofing, speaker-verification |
| [Privacy-Preserving Speaker Verification via End-to-End Secure Representation Learning](https://www.isca-archive.org/interspeech_2025/hu25j_interspeech.html) | Voice Privacy, Anonymization, and Speaker Protection | privacy, speaker-verification |
| [Novel Loss-Enhanced Universal Adversarial Patches for Sustainable Speaker Privacy](https://www.isca-archive.org/interspeech_2025/karimov25_interspeech.html) | Voice Privacy, Anonymization, and Speaker Protection | privacy, adversarial |
| [Audio Deepfake Source Tracing using Multi-Attribute Open-Set Identification and Verification](https://www.isca-archive.org/interspeech_2025/falez25_interspeech.html) | Audio Deepfake, Voice Cloning, and Spoofing | source-tracing |
| [Unveiling Audio Deepfake Origins: A Deep Metric learning And Conformer Network Approach With Ensemble Fusion](https://www.isca-archive.org/interspeech_2025/kulkarni25_interspeech.html) | Audio Deepfake, Voice Cloning, and Spoofing | source-tracing |
| [Codec-Based Deepfake Source Tracing via Neural Audio Codec Taxonomy](https://www.isca-archive.org/interspeech_2025/chen25j_interspeech.html) | Audio Deepfake, Voice Cloning, and Spoofing | source-tracing, codec |
| [TADA: Training-free Attribution and Out-of-Domain Detection of Audio Deepfakes](https://www.isca-archive.org/interspeech_2025/stan25_interspeech.html) | Audio Deepfake, Voice Cloning, and Spoofing | attribution, ood |
| [Source Verification for Speech Deepfakes](https://www.isca-archive.org/interspeech_2025/negroni25_interspeech.html) | Audio Deepfake, Voice Cloning, and Spoofing | source-verification |
| [STOPA: A Dataset of Systematic VariaTion Of DeePfake Audio for Open-Set Source Tracing and Attribution](https://www.isca-archive.org/interspeech_2025/firc25_interspeech.html) | Audio Deepfake, Voice Cloning, and Spoofing | dataset, source-tracing |
| [Synthetic Speech Source Tracing using Metric Learning](https://www.isca-archive.org/interspeech_2025/koutsianos25_interspeech.html) | Audio Deepfake, Voice Cloning, and Spoofing | source-tracing |
| [Listen, Analyze, and Adapt to Learn New Attacks: An Exemplar-Free Class Incremental Learning Method for Audio Deepfake Source Tracing](https://www.isca-archive.org/interspeech_2025/xiao25c_interspeech.html) | Audio Deepfake, Voice Cloning, and Spoofing | source-tracing, continual-learning |
| [VIB-based Real Pre-emphasis Audio Deepfake Source Tracing](https://www.isca-archive.org/interspeech_2025/doan25_interspeech.html) | Audio Deepfake, Voice Cloning, and Spoofing | source-tracing |
| [Defending Unauthorized Voice Cloning with Watermark-Aware Codecs](https://www.isca-archive.org/interspeech_2025/zhao25k_interspeech.html) | Watermarking, Provenance, and Data Rights | watermark, voice-cloning |
| [Open-Set Source Tracing of Audio Deepfake Systems](https://www.isca-archive.org/interspeech_2025/klein25_interspeech.html) | Audio Deepfake, Voice Cloning, and Spoofing | source-tracing, open-set |
| [Towards Secure User Authentication for Headphones via In-Ear or In-Earcup Microphones](https://www.isca-archive.org/interspeech_2025/shashaank25_interspeech.html) | Voice Authentication and Biometrics | authentication, headphone |
| [Mimic Blocker: Self-Supervised Adversarial Training for Voice Conversion Defense with Pretrained Feature Extractors](https://www.isca-archive.org/interspeech_2025/yu25c_interspeech.html) | Audio Deepfake, Voice Cloning, and Spoofing | defense, voice-conversion |
| [Towards Source Attribution of Singing Voice Deepfake with Multimodal Foundation Models](https://www.isca-archive.org/interspeech_2025/phukan25_interspeech.html) | Music and Singing Voice Security | attribution, singing-voice |
| [Defending Speech-enabled LLMs Against Adversarial Jailbreak Threats](https://www.isca-archive.org/interspeech_2025/alexos25_interspeech.html) | Audio-Language Model Safety | defense, jailbreak |
| [Who Gets the Mic? Investigating Gender Bias in the Speaker Assignment of a Speech-LLM](https://www.isca-archive.org/interspeech_2025/puhach25_interspeech.html) | Audio-Language Model Safety | bias, speech-llm |
| [Turing's Echo: Investigating Linguistic Sensitivity of Deepfake Voice Detection via Gamification](https://www.isca-archive.org/interspeech_2025/nguyen25e_interspeech.html) | Audio Deepfake, Voice Cloning, and Spoofing | detection, human-study |
| [Bona fide Cross Testing Reveals Weak Spot in Audio Deepfake Detection Systems](https://www.isca-archive.org/interspeech_2025/kwok25_interspeech.html) | Audio Deepfake, Voice Cloning, and Spoofing | detection, robustness |
| [BiCrossMamba-ST: Speech Deepfake Detection with Bidirectional Mamba Spectro-Temporal Cross-Attention](https://www.isca-archive.org/interspeech_2025/elkheir25_interspeech.html) | Audio Deepfake, Voice Cloning, and Spoofing | detection |
| [Few-Shot Speech Deepfake Detection Adaptation with Gaussian Processes](https://www.isca-archive.org/interspeech_2025/glazer25_interspeech.html) | Audio Deepfake, Voice Cloning, and Spoofing | detection, few-shot |
| [Replay Attacks Against Audio Deepfake Detection](https://www.isca-archive.org/interspeech_2025/muller25_interspeech.html) | Audio Deepfake, Voice Cloning, and Spoofing | attack, replay |
| [Enhancing Audio Deepfake Detection by Improving Representation Similarity of Bonafide Speech](https://www.isca-archive.org/interspeech_2025/kim25g_interspeech.html) | Audio Deepfake, Voice Cloning, and Spoofing | detection |
| [Generalizable Audio Deepfake Detection via Hierarchical Structure Learning and Feature Whitening in Poincare sphere](https://www.isca-archive.org/interspeech_2025/yang25l_interspeech.html) | Audio Deepfake, Voice Cloning, and Spoofing | detection, generalization |
| [SonarGuard2: Ultrasonic Face Liveness Detection Based on Adaptive Doppler Effect Feature Extraction](https://www.isca-archive.org/interspeech_2025/zhang25f_interspeech.html) | Voice Authentication and Biometrics | liveness, ultrasonic |
| [Children's Voice Privacy: First Steps and Emerging Challenges](https://www.isca-archive.org/interspeech_2025/kulkarni25b_interspeech.html) | Voice Privacy, Anonymization, and Speaker Protection | privacy, children |
| [Regularized Federated Learning for Privacy-Preserving Dysarthric and Elderly Speech Recognition](https://www.isca-archive.org/interspeech_2025/zhong25_interspeech.html) | Voice Privacy, Anonymization, and Speaker Protection | privacy, federated-learning |
| [Speech Unlearning](https://www.isca-archive.org/interspeech_2025/cheng25d_interspeech.html) | Voice Privacy, Anonymization, and Speaker Protection | unlearning |
| [Unlearning LLM-Based Speech Recognition Models](https://www.isca-archive.org/interspeech_2025/liu25b_interspeech.html) | Voice Privacy, Anonymization, and Speaker Protection | unlearning, asr |
| [EASY: Emotion-aware Speaker Anonymization via Factorized Distillation](https://www.isca-archive.org/interspeech_2025/yao25_interspeech.html) | Voice Privacy, Anonymization, and Speaker Protection | anonymization |
| [Private kNN-VC: Interpretable Anonymization of Converted Speech](https://www.isca-archive.org/interspeech_2025/franzreb25_interspeech.html) | Voice Privacy, Anonymization, and Speaker Protection | anonymization, voice-conversion |
| [Legally validated evaluation framework for voice anonymization](https://www.isca-archive.org/interspeech_2025/vauquier25_interspeech.html) | Voice Privacy, Anonymization, and Speaker Protection | anonymization, evaluation |
| [A Watermark for Auto-Regressive Speech Generation Models](https://www.isca-archive.org/interspeech_2025/wu25k_interspeech.html) | Watermarking, Provenance, and Data Rights | watermark, speech-generation |
| [VCapAV: A Video-Caption Based Audio-Visual Deepfake Detection Dataset](https://www.isca-archive.org/interspeech_2025/wang25q_interspeech.html) | Audio Deepfake, Voice Cloning, and Spoofing | dataset, audio-visual |
| [J-SPAW: Japanese speaker verification and spoofing attacks recorded in-the-wild dataset](https://www.isca-archive.org/interspeech_2025/shiota25_interspeech.html) | Voice Authentication and Biometrics | dataset, anti-spoofing |
| [Collecting, Curating, and Annotating Good Quality Speech deepfake dataset for Famous Figures: Process and Challenges](https://www.isca-archive.org/interspeech_2025/ali25_interspeech.html) | Audio Deepfake, Voice Cloning, and Spoofing | dataset, famous-figures |
| [Can Quantized Audio Language Models Perform Zero-Shot Spoofing Detection?](https://www.isca-archive.org/interspeech_2025/dutta25b_interspeech.html) | Audio Deepfake, Voice Cloning, and Spoofing | detection, alm |
