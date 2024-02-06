FROM node:alpine3.18
WORKDIR /app
COPY . .
RUN npm ci
CMD ["npm", "run startBuild"]
EXPOSE 3000