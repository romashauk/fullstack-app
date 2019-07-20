# base image
FROM node:10-alpine

# set working directory
WORKDIR /app/assets/


# install and cache app dependencies
COPY package.json /app/assets/package.json
RUN npm install --silent

# start app
CMD ["npm", "start"]