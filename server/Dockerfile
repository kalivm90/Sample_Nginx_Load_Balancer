FROM node:16 

WORKDIR /usr/src/app 

# Install app dependencies 
# A wildcard is used to ensure both package.json and package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./ 

RUN npm install 
# If you are building your code for production 
# RUN npm ci --only=production 

# Bundle app source
COPY . . 

EXPOSE 7777 
CMD ["npm", "run", "start"]