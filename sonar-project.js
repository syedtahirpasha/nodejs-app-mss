const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://13.233.231.77:9000/',
  options: {
    'sonar.projectDescription': 'This is a Node JS application',
    'sonar.projectName': 'Node JS Application - Sample',
    'sonar.projectKey': 'NodeJsMSS',
    'sonar.login': 'sqa_5cbaeef3c359febf23be336c49424fffce37d09f',
    'sonar.projectVersion': '1.0',
    'sonar.language': 'js',
    'sonar.sourceEncoding': 'UTF-8',
    'sonar.sources': 'src',  // Changed from '.' to 'src'
    // 'sonar.tests': 'specs',
    // 'sonar.inclusions': 'src/**'  // More precise inclusion pattern
  }
}, () => {});
