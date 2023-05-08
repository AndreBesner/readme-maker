// Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project:',
      },
      {
        type: 'input',
        name: 'installInstruction',
        message: 'Please describe any additional installation steps for your project:',
      },
      {
        type: 'input',
        name: 'usageInformation',
        message: 'Please enter any additional usage information for your project:',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please enter any additional ways to contribute to this project:',
      },
       {
        type: 'input',
        name: 'credits',
        message: 'Please enter any additional shout outs for this project:',
      },
      {
        type: 'input',
        name: 'testInstructions',
        message: 'Please enter any additional testing instructions:',
      },
      {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email:',
      },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if(err){
      console.log("Something went wrong! " + err);
    }else{
      console.log("Your file has been generated!");
    }
  })
};

// This function calls on inquirer to ask questions, then generated the readme file
function init() {
  inquirer.prompt(questions)
  .then(data => {
    const newFile = generateMarkdown(data);
    writeToFile("README.md", newFile);
  })
}

// Function call to initialize app
init();
