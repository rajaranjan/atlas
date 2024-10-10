# Atlas Frontend service

This project is frontend service made in react. This frontend microservice is running in 3000 port. There is no dev and prod separation in docker. It is kept simple as there is no production environment available for deployment of this microservice.

## Accessign UI

- Link : http://localhost:3000/dashboard

## Basic configuration file Structure

1. Dockerfile
2. .dockerignore
3. .gitignore
4. jest.config.js ( For jest testing configuration )

## Unit testing

All the unit testing is available under **test** folder. It will run using "npm test" command. For the simplicity only 2 unit test is written. But in a practical scenario brief no of required unit tests can be put

## Running the App using docker

- Build --- docker build -t atlas .
- Run --- docker run -p 3000:3000 atlas

## Pulling from docker hub and running

- LINK - docker pull rajaranjans/sapient:atlas
