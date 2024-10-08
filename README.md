# Sample Nginx server

I followed this tutorial on YT: https://www.youtube.com/watch?v=9t9Mp0BGnyI&t=1s

There are a few directories but the most important one is /server. In this dir there is a Dockerfile and a docker-compose.yaml. The Dockerfile defines how the image should be built for 1 image and the docker-compose defines how a group of images should be included into a single container. In /server there is a docker.md that goes into detail about how to accomplish all of this.

also I included a nginx.conf which is the conf file on my local machine in /etc/nginx. This gives you an idea of how it should be set up when using it.

everything else are just static files that were for the routing part of the tutorial
