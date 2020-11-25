// function to generate markdown for README
const generateMarkdown = (answers) =>

`# ${answers.title}

## Description 

${answers.description}

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation

${answers.installation}

## Usage 

${answers.usage}

## License

[![License](https://img.shields.io/static/v1?label=License&message=${answers.license}&color=yellow)](https://choosealicense.com/licenses/${answers.license.toString().toLowerCase()}/)

## Contributing

${answers.contribution}

## Tests

${answers.test}

## Questions

Github: https://github.com/${answers.github}  
If you have any questions email them to ${answers.email}`;


module.exports = generateMarkdown;