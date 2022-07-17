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
        sh 'npm install @next/swc-linux-x64-gnu'
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
