// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = ['What is the name of your project?', "Description: What is your motivation to build this project?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

generateMarkdown.renderLicenseBadge('hello world')
generateMarkdown.renderLicenseLink('oh no')