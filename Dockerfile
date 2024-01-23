FROM node:alpine3.18
WORKDIR /app
COPY . .
RUN npm ci
CMD ["node", "src/index.js"]
EXPOSE 3000