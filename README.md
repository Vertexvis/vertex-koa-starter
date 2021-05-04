# Vertex Koa Starter

## Setup

### Running with Docker

```shell
docker-compose -f ./docker-compose.yml up -d
```

### Running with Node

```shell
# Clone repository
git clone git@github.com:Vertexvis/vertex-koa.git && cd vertex-koa

# Install dependencies
yarn

# Start server
yarn start:dev
```

This starts a hot-reloading server, so code changes are immediately reflected. Browse to http://localhost:8080/health for a simple health check and http://localhost:8080/pvs for an example of converting a PVS XML file to JSON and calling the Vertex API.
