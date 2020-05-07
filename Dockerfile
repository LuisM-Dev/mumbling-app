# base image
FROM node:10.16.3-jessie as builder

RUN apt-get update && \
  apt-get install -y \
    libgtk2.0-0 \
    libnotify-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 \
    xvfb

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install

# add app
COPY . /usr/src/app

#Run linter
RUN npm run linter

# Run tests
RUN npm run test:ci -- --coverage --watchAll=false
RUN npm run test:ci:e2e

# Build for production.
RUN npm run build

# Install `serve` to run the application.
RUN npm install -g serve

# Tell Docker about the port we'll run on.
EXPOSE 5000

# Set the command to start the node server.
CMD serve -p $PORT -s build