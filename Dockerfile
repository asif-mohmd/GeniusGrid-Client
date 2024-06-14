FROM node:22.1.0-alpine3.18

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

ARG VITE_APIURL
ARG stripeKey

ENV VITE_APIURL=${VITE_APIURL}
ENV stripeKey=${stripeKey}

RUN npm run build

EXPOSE 5000

CMD ["npm", "run", "preview"]
