pipeline {
    agent any

    stages {
        stage ("Pull Github"){
            steps{
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/rajaranjan/atlas']])
            }
        }
        stage ('Build Docker Image'){
            steps{
                script{
                    bat 'docker build -t rajaranjans/atlas .'
                }
            }
        }
        stage ('push image to Hub') {
            steps {
                script{
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', passwordVariable: 'pass', usernameVariable: 'user')]) {
                        // bat 'docker login -u ${user} -p ${pass}'
                        // some block
                        bat 'docker push rajaranjans/atlas'
                    }
                }
            }
        }
    }
}