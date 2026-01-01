FROM node:22.21.0-alpine AS build 

ARG VITE_BASE_URL

WORKDIR /app

COPY package*.json ./

RUN npm i 

COPY . .

RUN echo "VITE_BASE_URL=$VITE_BASE_URL" > .env

RUN npm run build

FROM nginx:1.29.0

COPY --from=build /app/dist /usr/share/nginx/html