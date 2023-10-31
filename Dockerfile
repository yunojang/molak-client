FROM node:18-alpine AS build

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn

# folder
COPY scripts ./scripts
COPY public ./public
COPY config ./config

COPY tsconfig.json .
COPY .eslintrc.js .
COPY .prettierrc.js .
COPY babel.config.js .
COPY postcss.config.js .
COPY tailwind.config.js .
COPY .env .

COPY src ./src
RUN yarn build

# nginx
FROM nginx:stable-alpine

ARG NGINX_PATH=/config/nginx.conf

COPY --from=build /app/dist /usr/share/nginx/html
COPY $NGINX_PATH /etc/nginx/conf.d/default.conf
EXPOSE 80

# EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]