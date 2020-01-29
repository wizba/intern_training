# FROM node:latest as node
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build --prod

# # stage 2 
# FROM nginx:alpine

# COPY --from=node /app/dist/mdb-angular-free /usr/share/nginx/html
# CMD ["npm","start"]
# FROM node:10
# RUN mkdir /usr/src/app
# WORKDIR /usr/src/app
# RUN npm install -g @angular/cli
# RUN npm install
# COPY . /usr/src/app
# CMD ng serve --host 0.0.0.0 --port 4200

FROM node:11.15.0-alpine as build-step
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.16.0-alpine as prod-stage
COPY --from=build-step /app/dist/mdb-angular-free /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]