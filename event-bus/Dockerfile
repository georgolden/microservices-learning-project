# Specify a base image
FROM node:lts-alpine

# Add directory inside an image to collect files from HD COPY ./ /usr/app
WORKDIR /usr/app

# Install some dependences
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default command
CMD ["npm", "start"]