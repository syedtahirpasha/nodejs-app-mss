const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://3.109.47.119:9000/',
  options: {
    'sonar.projectDescription': 'This is a Node JS application',
    'sonar.projectName': 'Node JS Application - Sample',
    'sonar.projectKey': 'NodeJsMSS',
    'sonar.login': 'sqa_b130d7147f33bd68f581f8d042fe5f8aa1e724d3',
    'sonar.projectVersion': '1.0',
    'sonar.language': 'js',
    'sonar.sourceEncoding': 'UTF-8',
    'sonar.sources': 'src',  // Changed from '.' to 'src'
    // 'sonar.tests': 'specs',
    // 'sonar.inclusions': 'src/**'  // More precise inclusion pattern
  }
}, () => {});
