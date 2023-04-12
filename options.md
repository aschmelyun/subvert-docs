---
outline: deep
---

# Options

When running Subvert, there's a few options that you can pass to the `docker run` command to modify behaviors or resources. Each additional variable can be passed in with another `-e` flag.

### Environment variables

Any option marked with a ❗ is **required**.

| Option                | Default | Description                                 |
| --------------------- | ------- | ------------------------------------------- |
| OPENAI_API_KEY❗      | (none)  | Key responsible for OpenAI's APIs.          |
| UPLOAD_MAX_FILESIZE   | 256M    | Change's PHP's UPLOAD_MAX_FILESIZE setting. |
| MEMORY_LIMIT          | 512M    | Changes PHP's MEMORY_LIMIT setting.         |
