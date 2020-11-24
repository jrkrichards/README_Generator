// function to generate markdown for README
const generateMarkdown = (answers) =>
console.log(` ${answers.title}`)

`# ${answers.title}

## Description 

${answers.description}

## Table of Contents

* [Installation](#${answers.installation})
* [Usage](#${answers.usage})
* [License](#License)
* [Contributing](#${answers.contribution})
* [Tests](#${answers.test})

## Installation

${answers.installation}

## Usage 

${answers.usage}

## License

The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)

## Contributing

${answers.contribution}

## Tests

${answers.test}`;
