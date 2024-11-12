FROM node:18-alpine

WORKDIR /node-demo

COPY . /node-demo/

EXPOSE 3000

RUN npm install

CMD ["npm", "start"]