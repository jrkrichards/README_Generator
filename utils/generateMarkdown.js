// Variables
const licenseBadges = []

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

## Installation

${answers.installation}

## Usage 

${answers.usage}

## License

The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)

## Contributing

${answers.contribution}

## Tests

${answers.test}

## Questions

Github: https://github.com/${answers.github}  
If you have any questions email them to ${answers.email}`;

module.exports = generateMarkdown;