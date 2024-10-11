# Atlas Frontend service

This project is frontend service made in react. This frontend microservice is running in 3000 port. There is no dev and prod separation in docker. It is kept simple as there is no production environment available for deployment of this microservice.

## Github code link

https://github.com/rajaranjan/atlas

## Accessign UI

- Link : http://localhost:3000/dashboard

## Basic configuration file Structure

1. Dockerfile
2. .dockerignore
3. .gitignore
4. jest.config.js ( For jest testing configuration )
5. Jenkinsfile
6. README.md

## Unit testing

All the unit testing is available under **tests** folder. It will run using "npm test" command. For the simplicity only 2 unit test is written. But in a practical scenario brief no of required unit tests can be put

## Running the App using docker

- Build --- docker build -t rajaranjans/atlas .
- Run --- docker run -p 3000:3000 rajaranjans/atlas

## Pulling from docker hub and running ( Deliberately made it public )

- LINK - docker pull rajaranjans/atlas:latest

## CI/CD pipeline

Jenkins file is added. When we run jenkins job it pulls the code from github main branch, builds a docker image and push to docker hub.To keep it simple not added complete CI/CD thing like dev and prod environment. It can be setup.
