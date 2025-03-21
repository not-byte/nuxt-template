# Build a production distribution

FROM cgr.dev/chainguard/node:latest AS builder

WORKDIR /app

COPY --chown=node:node package*.json .

RUN npm install --clean

COPY --chown=node:node . .

RUN npm run build

# Run output in a clean environment

FROM alpine AS runner

WORKDIR /app

LABEL authors="botprzemek"

RUN apk add --update nodejs

COPY --from=builder --chown=node:node /app/.output ./.output

ENV NODE_ENV="production"

CMD ["node", ".output/server/index.mjs"]

EXPOSE 3000