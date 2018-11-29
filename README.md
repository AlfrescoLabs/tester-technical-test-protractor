   <p align="left"> <img title="Alfresco" src="alfresco.png" alt="Alfresco - make business flow"></p>
   
# Example Technical Test using Protractor
Protractor is a Node.js program. To run, you will need to have Node.js installed. You will download Protractor package using npm, which comes with Node.js. Check the version of Node.js you have by running node --version. Then, check the compatibility notes in the Protractor README to make sure your version of Node.js is compatible with Protractor. (For more information, Ref: https://www.protractortest.org/#/)

## Introduction

The Alfresco Technical Test Project

### Pre-requisites

* nodejs is installed on the machine
* Protractor is globally installed: If not, run command: npm install -g protractor
* jasmine-spec-reporter is installed: If not, run command: npm install -g jasmine-spec-reporter
* The Content Application running and the correct baseURL is updated in conf.js

#### Run Tests
* Run npm install
* Update web-drive if necessary: Using command: webdriver-manager update
* Start websdriver: Using command: webdriver-manager start
* Run protractor conf.js
