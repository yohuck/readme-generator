// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    }, 
    {
        type: 'input',
        name: 'motivation',
        message: "Description: What is your motivation to build this project?"
    }];
    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, `${data}`, (err) => {
        err? console.error(err) : console.log('Success!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            // console.log(data)
            writeToFile(`${data.title.toUpperCase()}-README`, generateMarkdown.generateMarkdown(data))
        })
}

// Function call to initialize app
init();


// generateMarkdown.renderLicenseLink('oh no')

// writeToFile('test', '# This is a test')