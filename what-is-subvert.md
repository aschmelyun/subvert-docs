---
outline: deep
---

# What is Subvert?

Subvert is a self-contained, open-source application to generate and translate **subtitles, chapters, and summaries from videos** using OpenAI's Whisper and ChatGPT APIs.

::: info Ready to try it out?
You can skip this and head over to the [Getting Started](/getting-started) page. Or run:
```sh
docker run -it -p 80:8080 -e OPENAI_API_KEY=sk-abc123 aschmelyun/subvert
```
:::

The concept isn't new, and there exists a lot of open source options for using these same APIs to transcribe audio or video files. Most of these require extensive setup or specific domain knowledge or terminal familiarity, and so a more user-friendly alternative was created.

Subvert is built with [Laravel](https://laravel.com), [Vue](https://vuejs.org), and [TailwindCSS](https://tailwindcss.com).

## Why use this?

This was originally built to streamline improving the accessibility of online video courses. Whisper's API costs pennies to get a well-formatted transcript file for an hour-long video. Additionally, **Whisper is able to recognize and include programming languages, framework names, and other technical terminology** that a lot of other automated solutions out there miss.

Everything is packaged up in an easy-to-use interface and available as a [single Docker container](https://hub.docker.com/r/aschmelyun/subvert) for ease of deployment.

## How it works

- **Extraction**

  First, a user chooses a video to upload and picks what they want to have generated. The video's audio is extracted via FFMpeg and saved for processing.

- **Transcription**

  Audio is sent to OpenAI's Whisper API to be transcribed into a VTT format. Each line includes a transcription and relevant timestamp for that part of the video.

- **Translation**

  If you choose to change the language from the video's default, the transcription file is sent over to OpenAI's ChatGPT API for translation into the desired language.

- **Chapters**

  If chapters were selected to be generated, the transcription file is sent over to OpenAI's ChatGPT API with the prompt to create a list of X chapters along with a starting timestamp.

- **Summary**

  If a summary was selected to be generated, the transcription file is again sent over to OpenAI's ChatGPT API with the prompt to create a concise summary of the video.

- **Results**

  Assuming a successful run, the user is taken to a page where they can view and download the video transcription, chapters, and summary from their submitted video.