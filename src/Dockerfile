# Build a production distribution

FROM cgr.dev/chainguard/node:latest AS builder

WORKDIR /app

COPY --chown=node:node package*.json .

RUN npm install --clean

COPY --chown=node:node . .

RUN npm run build

# Create a clean environment

FROM alpine AS runner

ENV NODE_ENV="production"

LABEL authors="botprzemek"

RUN apk add --update nodejs

WORKDIR /app

COPY --from=builder --chown=node:node /app/.output ./.output

CMD ["node", ".output/server/index.mjs"]

EXPOSE 3000