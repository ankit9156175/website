FROM alpine:latest
RUN apk add --no-cache nodejs npm

WORKDIR /app
COPY ./package.json /app
COPY ./package-lock.json /app
RUN npm install
COPY . /app

EXPOSE 3000 80


CMD ["npm", "start"]

