FROM node:22-alpine3.19

WORKDIR /src/backend

COPY package*.json ./

RUN npm install


COPY . /src/backend/

EXPOSE 3000

CMD ["node", "src/server.js"]

