// Variables 
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const otherUtils = require('./utils/generateMarkdown')
const licenseOptions = ["MIT", "GPL-3.0", "MPL-2.0", "Apache-2.0"] 

// array of questions for user
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Press <space> to select the license you want, then enter to submit.',
        choices: licenseOptions,
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
    ]);
  };

// function to write README file
const writeFileAsync = util.promisify(fs.writeFile);

// function to initialize program
const init = async () => {
    console.log('Starting input questions');
    try {
      const answers = await questions();
  
      const markdownAnswers = otherUtils(answers);
  
      await writeFileAsync('README.md', markdownAnswers);
  
      console.log('Successfully wrote to README.md');
    } catch (err) {
      console.log(err);
    }
  };

// function call to initialize program
init();
