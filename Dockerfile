FROM node:22.1.0-alpine3.18

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

COPY .env .env

RUN npm run build

EXPOSE 5000

CMD ["npm", "run", "preview"]
