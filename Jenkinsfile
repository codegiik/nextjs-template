pipeline {
  agent {
    docker {
      image 'node:current-slim'
      args '-p 3000:3000'
    }
  }
  stages {
    stage('Installing dependencies') {
      steps {
        sh 'npm install'
        sh 'npm install @next/swc-linux-x64-gnu'
        sh 'apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb'
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
