const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://13.233.231.77:9000/',
  options: {
    'sonar.projectDescription': 'This is a Node JS application',
    'sonar.projectName': 'Node JS Application - Sample',
    'sonar.projectKey': 'NodeJsMSS',
    'sonar.login': 'sqa_1e048b794e5b6dc896e7e9c3c7585517b202b51d',
    'sonar.projectVersion': '1.0',
    'sonar.language': 'js',
    'sonar.sourceEncoding': 'UTF-8',
    'sonar.sources': 'src',  // Changed from '.' to 'src'
    // 'sonar.tests': 'specs',
    // 'sonar.inclusions': 'src/**'  // More precise inclusion pattern
  }
}, () => {});
