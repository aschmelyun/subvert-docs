---
outline: deep
---

# Getting Started

It only takes a few minutes to get Subvert up and running. Using [**Docker**](#docker) is the _preferred_ method, but you can also build and run the application from source if you'd like.

## Docker

### Prerequisites

- [Docker](https://www.docker.com/) installed on your host machine.
- An [OpenAI](https://platform.openai.com) account and API key.

### Running the container

Subvert is self-contained in a single Docker image and can be started with a one-line command:

```sh
docker run -it -p 80:80 -e OPENAI_API_KEY=sk-123abc aschmelyun/subvert
```

This will boot up a server running the application and make it available to your machine at [http://localhost](http://localhost).

> Want to have the application available at a different port? Change the first number after the `-p`. For example, `8088:80` will make the app available at localhost:8088

## Source

### Prerequisites

- PHP 8.1 or higher.
- Node.js version 16 or higher.
- [Composer](https://getcomposer.org) installed on the host machine.

### Building the application

After cloning [the repo](https://github.com/aschmelyun/subvert), run the following commands to get the application's dependencies installed and assets compiled:

```sh
composer install
npm install
npm run build
```

Then, copy over the `.env.example` file to `.env`. You'll need to open up that file in your editor of choice and add a line to the bottom of it with your OpenAI API key.

```env
OPENAI_API_KEY=sk-123abc
```

Run the following commands to get a fresh key generated for the application and scaffold out the Sqlite database:

```sh
php artisan key:generate
php artisan migrate:fresh --force
```

After that finishes up, you're ready to actually run Subvert. There's three separate commands that power the frontend, backend, and queue worker, so it's recommended to use something like [supervisor](http://supervisord.org/) to manage these processes.

```sh
php artisan queue:work
php artisan serve --port=80
```

Now your application should be available at [http://localhost](http://localhost).