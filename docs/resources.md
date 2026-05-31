# Resources

Working notes for models, detectors, APIs, and benchmark metadata. Verify API availability and model versions before relying on this file.

## Deepfake Generation Models

- CosyVoice
- F5-TTS
- GPT-SoVITS
- IndexTTS
- MegaTTS

## Detectors

- AASIST2

## Audio Language Model and Speech APIs

Potential providers and model families to track:

- OpenAI audio, realtime, transcription, and TTS APIs
- Alibaba Cloud / DashScope / Qwen audio and omni models
- Zhipu AI / GLM voice models
- Baichuan omni and audio models
- StepFun audio, TTS, and transcription APIs
- Microsoft Azure AI audio-capable multimodal models
- Ultravox realtime voice APIs
- Moonshot / Kimi audio model releases

## Benchmark Metadata

For each benchmark, consider recording:

- Languages
- Speaker count and demographics
- Clean, noisy, compressed, and re-recorded audio
- TTS and voice conversion systems
- Black-box and white-box access
- Human study protocol
- Objective metrics: WER, speaker similarity, detection AUC, equal error rate, perturbation SNR
- Subjective metrics: MOS, naturalness, intelligibility, similarity, annoyance

## Useful Metadata Fields

Recommended columns for future structured data:

- `title`
- `authors`
- `year`
- `venue`
- `primary_category`
- `tags`
- `paper_url`
- `code_url`
- `dataset_url`
- `project_url`
- `summary`
- `threat_model`
- `evaluation_setting`
- `notes`
