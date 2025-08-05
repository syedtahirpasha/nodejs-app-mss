const sonarqubeScanner = require('sonarqube-scanner');
const serverUrl = process.env.SONAR_HOST_URL || 'http://13.233.231.77:9000/';
const token = process.env.SONAR_TOKEN || 'sqa_5cbaeef3c359febf23be336c49424fffce37d09f';

sonarqubeScanner({
  serverUrl: serverUrl,
  options: {
    'sonar.projectDescription': 'This is a Node JS application',
    'sonar.projectName': 'Node JS Application - Sample',
    'sonar.projectKey': 'NodeJsMSS',
    'sonar.login': token,
    'sonar.projectVersion': '1.0',
    'sonar.language': 'js',
    'sonar.sourceEncoding': 'UTF-8',
    'sonar.sources': '.',  // Corrected to root directory
    'sonar.exclusions': 'node_modules/**'
  }
}, () => {});
