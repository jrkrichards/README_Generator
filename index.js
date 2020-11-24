// requirements
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const otherUtils = require('./utils/generateMarkdown')

// array of questions for user
// NEED TO HAVE THESE POPULATE INTO A TOC
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
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
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
      console.log(markdownAnswers)
  
    //   await writeFileAsync('README.md', markdownAnswers);
  
      console.log('Successfully wrote to README.md');
    } catch (err) {
      console.log(err);
    }
  };

// function call to initialize program
init();
