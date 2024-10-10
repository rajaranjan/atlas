# Fetching the latest node image on alpine linux
FROM node AS builder

# Declaring env
ENV NODE_ENV production

# Setting up the work directory
WORKDIR /

# Installing dependencies
COPY ./package*.json /

RUN npm install

# Copying all the files in our project
COPY . .

# Building our application
RUN npm run build

#exposing port 3000
EXPOSE 3000

# Starting our application
CMD ["npm","start"]