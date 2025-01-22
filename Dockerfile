FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
COPY angular.json ./
COPY tsconfig*.json ./

RUN npm install
RUN npm install -g @angular/cli

COPY . .

RUN ng build --configuration production

FROM nginx:alpine

COPY --from=builder /app/dist/bases/browser/* /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]