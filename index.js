// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile)
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project_title',
        message: "What is the name of your project?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
    },
    {
        type: 'input',
        name: 'username',
        message: "What is your GitHub Username?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Please provide a short description of your project:"
    },
    {
        type: 'input',
        name: 'installations',
        message: "What command should be used to install dependencies?"
    },
    {
        type: 'list',
        name: 'licenses',
        message: "Which license would you like to use for your project?",
        choices: ['MIT','BSD 3','APACHE 2.0', 'GPL 3.0', 'None at all']
    },
    {
        type: 'input',
        name: 'tests',
        message: "What command should be used to run tests?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please provide any additional information regarding the use of this repo:"
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Please provide information regarding contributing to this repo:"
    },
    


];

// TODO: Create a function to write README file
fs.writeFile('README.md', ); { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();





// Title
// Description
// Table of Contents - When you click on the titles in the Table of contents, taken to section 
// Installation
// Usage
// License
// Contributing
// Tests
// Questions - Github Username and GitHub Profile Link / Email Address and Instructions on Contact