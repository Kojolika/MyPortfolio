FROM node:21.6.2-alpine3.18
ENV PORT=3000
ENV NODE_ENV=development
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
CMD ["node", "./dist/portfolio.node.bundle"]
EXPOSE $PORT