FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY src ./src

ENV NODE_ENV=production \
  PORT=8080 \
  SERVICE_NAME=platform-showcase-api

USER node

EXPOSE 8080

CMD ["node", "src/server.js"]
