FROM node:22.1.0-alpine3.18

WORKDIR /app

COPY package.json .

# Use --legacy-peer-deps to bypass peer dependency conflicts
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 5000

ARG stripeKey
ARG VITE_APIURL

ENV VITE_APIURL=${VITE_APIURL}
ENV stripeKey=${stripeKey}



CMD ["npm", "run", "preview"]
