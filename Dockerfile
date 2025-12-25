FROM node:22.21.0-alpine AS build 

WORKDIR /app

COPY package*.json ./

RUN npm i 

COPY . .

RUN npm run build

FROM nginx:1.29.0

COPY --from=build /app/dist /usr/share/nginx/html