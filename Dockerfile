# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node AS build-stage

ENV NODE_ENV=production
WORKDIR /app

COPY package*.json /app/
COPY yarn*.lock /app/

RUN yarn config set registry https://registry.npm.taobao.org
RUN yarn install

COPY ./ /app/

RUN yarn build
# check build
RUN cat ./build/index.html

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15

COPY --from=build-stage /app/build/ /usr/share/nginx/html

# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
