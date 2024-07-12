FROM node:20.2.0-alpine3.17

RUN npm install -g nodemon

WORKDIR /app

COPY . /app/

COPY package*.json . 

RUN npm install

EXPOSE 4000

CMD [ "npm", "run", "start" ]