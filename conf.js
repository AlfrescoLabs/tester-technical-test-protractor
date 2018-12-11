// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const path = require('path');
const {
  SpecReporter
} = require('jasmine-spec-reporter');
const jasmineReporters = require('jasmine-reporters');  

const projectRoot = path.resolve(__dirname);

const width = 1366;
const height = 768;

var fs = require('fs');

function rmDir(dirPath) {
  try {
    var files = fs.readdirSync(dirPath);
  } catch (e) {
    return;
  }
  if (files.length > 0)
    for (var i = 0; i < files.length; i++) {
      var filePath = dirPath + '/' + files[i];
      if (fs.statSync(filePath).isFile()) fs.unlinkSync(filePath);
      else rmDir(filePath);
    }
  fs.rmdirSync(dirPath);
}

exports.config = {
  allScriptsTimeout: 50000,

  params: {
  },

  specs: [
    './e2e/suites/authentication/*.test.ts'
  ],

  SELENIUM_PROMISE_MANAGER: true,
capabilities: {
   browserName: 'firefox',
   firefox_profile: 'support/firefox_profile'
 },

  directConnect: true,

  // baseUrl: 'https://beta-app.alfresco.com/#/login',
  baseUrl: 'http://localhost:8080/login',
  getPageTimeout: 50000,

  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 60000,
    print: function () {}
  },

  plugins: [{
    package: 'jasmine2-protractor-utils',
    disableHTMLReport: false,
    disableScreenshot: false,
    screenshotOnExpectFailure: true,
    screenshotOnSpecFailure: false,
    clearFoldersBeforeTest: true,
    htmlReportDir: `${projectRoot}/e2e-output/html-report/`,
    screenshotPath: `${projectRoot}/e2e-output/screenshots/`
  }],

  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });

    browser
      .manage()
      .window()
      .setSize(width, height);

    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: {
          displayStacktrace: true
        }
      })
    );

    jasmine.getEnv().addReporter(
      new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: `${projectRoot}/e2e-output/junit-report`,
        filePrefix: 'results.xml',
        useDotNotation: false,
        useFullTestName: false,
        reportFailedUrl: true
      })
    );
  }
};
