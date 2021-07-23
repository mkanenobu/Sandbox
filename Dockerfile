FROM node:14-slim

WORKDIR /my-server

RUN apt-get update -y && apt-get libssl-dev install mysql-client -y
RUN npm install

CMD ["npm", "run", "dev"]
