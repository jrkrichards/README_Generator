// requirements
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// array of questions for user
// NEED TO HAVE THESE POPULATE INTO A TOC
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
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
      const answers = await promptUser();
  
      const markdownAnswers = generateMarkdown(answers);
  
      await writeFileAsync('README.md', markdown);
  
      console.log('Successfully wrote to README.md');
    } catch (err) {
      console.log(err);
    }
  };

// function call to initialize program
init();
