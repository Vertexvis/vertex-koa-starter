# Vertex Koa Starter

Use our starter application template using the Koa framework. We built this application following best practices for integrating the Vertex platform.

## Run locally in Docker

1. Copy `.env.template` to `.env` and edit values
1. Run `docker-compose --file ./docker-compose.yml up` to start the app locally
1. Browse to http://localhost:8080/files

If you pull down changes, you'll need to run `docker-compose --file ./docker-compose.yml build` to build them and then `docker-compose --file ./docker-compose.yml up` again.

## Local development

1. Copy `.env.template` to `.env` and edit values
1. Install dependencies, `yarn install`
1. Run `yarn dev` to start the local development server
1. Browse to http://localhost:8080/files

This starts a hot-reloading server, so code changes are immediately reflected.
