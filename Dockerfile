FROM node:alpine3.18
ENV PORT=3000
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
CMD ["node", "./dist/portfolio.node.bundle"]
EXPOSE $PORT