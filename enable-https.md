---
outline: deep
---

# Enabling HTTPS

> Note: This should be used in non-local deployments only

If you'd like to enable https on your Subvert install, there's a [`docker-compose.yml`](https://github.com/aschmelyun/subvert/blob/main/docker-compose.yml) file included with the repo that you can use to deploy the application. This acts as an alternative to the single Docker container option.

### Setup

You'll have to make some small changes to the `docker-compose.yml` file before deployment. Open it up and:

1. Change out the `OPENAI_API_KEY` with your actual key
2. Change the `SERVERNAME` value to the production domain name you're using
3. Change `EXTRANAMES` to any additional domain names you're using, or remove it

### Usage

After saving the changes to your `docker-compose.yml` file, run:

```sh
docker compose up -d
```

After a few moments, your https-enabled Subvert installation should be available at the domain you set.
