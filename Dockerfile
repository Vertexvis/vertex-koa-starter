FROM node:14-alpine

USER nobody

WORKDIR app

EXPOSE 8080 5858

CMD ["node", "dist/index.js"]
