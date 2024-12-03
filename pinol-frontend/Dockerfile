FROM denoland/deno:2.1.2 AS builder

WORKDIR /app

COPY . .

RUN deno install 

CMD ["task", "build"]

FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/ .

EXPOSE 3000

CMD [".next/standalone/server.js"]
