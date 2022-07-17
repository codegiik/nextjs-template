pipeline {
  agent {
    docker {
      image 'cypress/base:latest'
      args '-p 3000:3000'
    }
  }
  stages {
    stage('Installing dependencies') {
      steps {
        sh 'npm install'
        sh 'npm install @next/swc-linux-x64-gnu'
        sh 'npx cypress install'
      }
    }
    stage('Linting') {
      steps {
        sh 'npm run lint'
      }
    }
    stage('Building') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Running Tests') {
      steps {
        sh 'npm run ci'
      }
    }
  }
}
