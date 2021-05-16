FROM node:alpine

WORKDIR  /usr/app

COPY ./package.json ./
RUN npm install
COPY ./ ./

EXPOSE 80 8080
RUN npm run build
CMD ["npm","start"]