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
        name: 'description',
        message: "Description: Enter a description of your project"
    },
    {
        type: 'input',
        name: 'installation',
        message: "Installation: Enter the steps to install your project"
    },
    {
        type: 'input',
        name: 'usage',
        message: "Usage: Enter the usage details for your project"
    },
    {
        type: 'input',
        name: 'contribution',
        message: "Contribution: Enter the contribution guidelines for your project"
    },
    {
        type: 'input',
        name: 'testing',
        message: "Testing: Enter the testing instructions for your project"
    },
    {
        type: 'list',
        message: 'What type of license does your project use?',
        name: 'license',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'HNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
];
    
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