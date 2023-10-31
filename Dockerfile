FROM node:18-alpine AS build

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY tsconfig.json .
COPY .env .
COPY .eslintrc.js .
COPY .prettierrc.js .
COPY babel.config.js .
COPY postcss.config.js .
COPY tailwind.config.js .

COPY src .
RUN yarn build

# nginx
FROM nginx:stable-alpine

ARG NGINX_PATH = /src/docker/nginx.conf

COPY --from=build /webapp/dist /usr/share/nginx/html
COPY $NGINX_PATH /etc/nginx/conf.d/default.conf

# EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]