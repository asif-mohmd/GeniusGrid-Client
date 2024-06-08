FROM node:22.1.0-alpine3.18

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000

ENV VITE_APIURL = "https://geniusgrid.online/api"
ENV stripeKey = "pk_test_51L06jrSBZHWEgXwypDrrO0AxMUyUaOCrMsapB1sLnEtIo3rGwMbWz7KP3phCvQz0PyaKwsvJR5puR2a17FANOfn900XouYmHR2"

CMD [ "npm", "run", "preview" ]