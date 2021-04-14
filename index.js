// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile)


// TODO: Create an array of questions for user input
function questionsUser (){
return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: "What is the name of your project?",
        validate: function (userInput) {
            return userInput.length < 1 ? console.log('Please enter a valid project title.') : true;
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
        validate: function (userInput) {
            return userInput.length < 1 ? console.log('Please enter a valid email address.') : true;
        } 
    },
    {
        type: 'input',
        name: 'username',
        message: "What is your GitHub username?",
        validate: function (userInput) {
            return userInput.length < 1 ? console.log('Please enter a valid GitHub username.') : true;
        } 
    },
    {
        type: 'input',
        name: 'description',
        message: "Please provide a short description of your project:",
        validate: function (userInput) {
            return userInput.length < 1 ? console.log('Please enter a short description.') : true;
        } 
    },
    {
        type: 'input',
        name: 'installation',
        message: "What command should be used to install dependencies?",
        validate: function (userInput) {
            return userInput.length < 1 ? console.log('Please enter a valid command.') : true;
        } 
    },
    {
        type: 'list',
        name: 'license',
        message: "Which license would you like to use for your project?",
        choices: ['MIT','BSD 3-Clause','APACHE 2.0', 'GPL 3.0', 'None at all']
    },
    {
        type: 'input',
        name: 'tests',
        message: "What command should be used to run tests?",
        validate: function (userInput) {
            return userInput.length < 1 ? console.log('Please enter a valid command.') : true;
        } 
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please provide any additional information regarding the use of this repo if needed:"
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Please provide information regarding contributing to this repo if needed:"
    },
])};




// // TODO: Create a function to write README file
async function init () {
    try {
        const answers = await questionsUser();
        const generateRead = generateMarkdown(answers);
        await writeFileAsync('README.md', generateRead);
        console.log('Completed!');
    }   catch(err) {
        console.log(err);
    }
  }
        
    
// // TODO: Create a function to initialize app


// // Function call to initialize app
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