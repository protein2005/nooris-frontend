FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --save-dev ajv@8
RUN npm install --legacy-peer-deps

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]
