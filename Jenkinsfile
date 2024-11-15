pipeline {
    agent {
        node {  
            label 'agent1'
            customWorkspace '/node-demo'
        }
    }

    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }

        stage('Deploy') { 
            steps {
                sh 'node server.js'
            }
        }
    }
}