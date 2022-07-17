pipeline {
  agent {
    docker {
      image 'node:current-slim'
      args '-p 3000:3000'
    }
  }
  stages {
    stage('Installing modules') {
      steps {
        sh 'npm install'
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
