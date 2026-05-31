# Research Ideas

This file keeps early-stage ideas separate from the curated paper list.

## Deepfake and Voice Protection

### Benchmark for Proactive Deepfake Defenses

Build a benchmark for proactive voice protection methods, including unlearnable examples and adversarial examples against TTS and voice conversion systems.

Evaluation dimensions:

- Effectiveness: whether protected audio reduces cloning quality or attack success
- Imperceptibility: whether human listeners notice the perturbation
- Robustness: whether protection survives compression, noise, enhancement, re-recording, and model changes
- Coverage: languages, speakers, data volume, TTS systems, and voice conversion systems
- Human study: listener preference, similarity, naturalness, intelligibility, and annoyance

### Voice Cloning Vulnerability Index

Study whether famous speakers are easier to clone than ordinary speakers because they are overrepresented in pretraining data.

Possible questions:

- How does pretraining data coverage correlate with one-shot cloning quality?
- Can we define a per-person deepfake vulnerability score?
- Can protection amplify the natural advantage of underrepresented voices?
- How should audio deepfake fairness be measured?

### Detector Specialization by Fake Quality

Hypothesis: humans may be better at detecting low-quality fakes, while models may be better at detecting high-quality fakes.

Possible system design:

- One detector specialized for low-quality artifacts
- One detector specialized for high-quality or artifact-reduced deepfakes
- A routing or ensemble mechanism that estimates fake quality before final classification

### Speech Enhancement as an Attack on Detectors

Study whether applying speech enhancement before detection reduces detector performance by removing artifacts that detectors rely on.

## Audio Language Model Safety

### Bias and Discrimination in Audio Language Models

Research questions:

- Understanding: can ALMs identify explicit and implicit discriminatory content in audio?
- Refusal: do ALMs refuse unsafe requests involving discriminatory speech, translation, rewriting, dubbing, or parody?
- Generation: can ALMs be induced to produce discriminatory audio, jokes, slogans, explanations, or songs?
- Fairness: do accent, gender, emotion, or prosody change safety judgments for the same semantic content?

Modalities:

- Audio to text: transcription, explanation, summarization, safety classification
- Audio to audio: spoken answers, explanations, dubbing, voice style transfer
- Text to audio: reading, parody, slogan generation, lyric or music generation
- Multi-turn interaction

### Prompt Stealing for Text-to-Music and Text-to-Audio

Potential scenarios:

- Text-to-music prompt stealing: infer the hidden prompt from generated music
- Video-to-music prompt stealing: reconstruct a soundtrack prompt from video plus generated audio
- Cross-modal transfer from image prompt stealing to music or audio prompt stealing

Potential risk:

- Prompt recipes may have commercial value for musicians, advertisers, filmmakers, or prompt marketplaces.

## Audio Data Protection

- Move perturbations from raw waveform space into latent or audio-token space, then reconstruct protected audio.
- Poison personal audio so voice timbre, pitch, or style becomes hard to learn.
- Explore privacy-preserving speech processing over encrypted or otherwise protected representations.
- Preserve emotional expression while hiding speaker identity, or remove emotional information for stronger privacy.
- Use psychoacoustic masking to hide perturbation energy in time-frequency regions that humans are less sensitive to.
