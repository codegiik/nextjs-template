pipeline {
  agent {
    dockerfile true
  }
  stages {
    stage('Installing modules') {
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
