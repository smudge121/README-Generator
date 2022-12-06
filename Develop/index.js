//DONE    TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown');

//DONE     TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project's Title?"
    },
    {
        type: 'input',
        name: 'desc',
        message: "Please give a brief description of your project."
    },
    {
        type: 'input',
        name: 'install',
        message: "What command needs to be run in the terminal to install requirements?",
        default: 'npm i -y'
    },
    {
        type: 'input',
        name: 'usage',
        message: "How does someone use your project?"
    },
    {
        type: 'input',
        name: 'contribute',
        message: "How can the user contribute to the repo?"
    },
    {
        type: 'input',
        name: 'testing',
        message: "How can a user test your project?"
    },
    {
        type: 'list',
        name: 'license',
        message: "Which license does your project use?",
        choices: ['Apache', 'GNU GPL v3.00','MIT','Boost','BSD 2-clause','BSD 3-clause','None']
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your github user name?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        fs.writeFile('README.md',generate(data))
    })
}

// Function call to initialize app
init();
