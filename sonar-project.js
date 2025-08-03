const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://13.127.63.7:9000/',
  options: {
    'sonar.projectDescription': 'This is a Node JS application',
    'sonar.projectName': 'Node JS Application - Sample',
    'sonar.projectKey': 'NodeJsMSS',
    'sonar.login': 'sqa_3d201a3f6837428cc5d6802175726bc572a4695b',
    'sonar.projectVersion': '1.0',
    'sonar.language': 'js',
    'sonar.sourceEncoding': 'UTF-8',
    'sonar.sources': 'src',  // Changed from '.' to 'src'
    // 'sonar.tests': 'specs',
    // 'sonar.inclusions': 'src/**'  // More precise inclusion pattern
  }
}, () => {});
