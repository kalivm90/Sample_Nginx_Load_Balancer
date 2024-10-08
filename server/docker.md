## Build the image

docker build . -t myserver

## Run the containers base off the image

docker run -p 1111:7777 -d myserver

port 1111: is the port where the container is running (like on your local machine or on the cloud), to see the container go to localhost:1111

port 7777: the port inside the container where the app is listening. Inside the express app the port needs to be 7777

## To run more than one container run

docker run -p 2222:7777 -d myserver
docker run -p 3333:7777 -d myserver
docker run -p 4444:7777 -d myserver

now you will have 4 different instances of the server running at the same time on your localhost/cloud server

# IMPORTANT!!!!

When you make changes to the express server you have to rebuild the image and restart all the containers. doing the above would mean building each server 1 by 1. To prevent this put a docker-compose.yaml in the root dir where the Dockerfile is. Define all the containers there and use:

## rebuild and restart all

docker-compose up --build -d

## stop and remove containers

docker-compose down
