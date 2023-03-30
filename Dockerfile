FROM node:19

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 4000
CMD node src/server.js