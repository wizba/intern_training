# # Create image based on the official Node 10 image from dockerhub
# # our application directory to "/app", so our application is bundled into "/app" in our docker image file-system
# FROM node:10 AS builder
# #We will COPY our "package.json" then run "npm install" before we copy the remaining project files because that will prevent unnecessary installs anytime we re-build our image and make use of cached installs
# COPY ./package.json ./
# #We will run "npm run build" to generate production files at "dist/main" directory which is required by our "run" command in production context i.e (npm run start:prod)
# RUN npm install
# COPY . .
# RUN npm run build

# #set our application directory to "/app", so our application is bundled into "/app" in our docker image file-system
# FROM node:10-alpine
# WORKDIR /app
# #We will copy the file-system of the previous step.
# COPY --from=builder /app ./

# EXPOSE 3000
# #We will set command for running our application
# CMD ["npm", "run", "start:prod"]

 FROM node:10-alpine
 COPY ./package.json ./
 RUN npm install

COPY . .
RUN npm run build
CMD ["npm", "run", "start:prod"]