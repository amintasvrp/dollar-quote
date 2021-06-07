## Download node image
FROM node:14

## Defines the location where the app will stay on the container's disk
WORKDIR /usr/app

## Copy everything that starts with package and ends with .json into the /usr/app folder
COPY package*.json ./

## Run npm install to add dependencies and create node_modules folder
RUN npm install

## Copy everything in the directory where the Dockerfile file is
## into the container's /usr/app folder
COPY .

## Container will listen for accesses on port 3333 (must be the same port that is in API_PORT of .env)
EXPOSE 4000

## Run the npm start command to start the script that is in package.json
CMD npm start 