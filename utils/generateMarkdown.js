
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title} ![badge](https://img.shields.io/badge/license-${answers.license}-yellow.svg)

  ${answers.description}


  <br>

  ## Table of Contents:
  * [Installation](#install)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  * [Contributing](#contributing)
  * [Questions](#questions)

<br>

## Install
To install required dependencies, open terminal and run:
<br>

${answers.installation}

### Usage
<br>

${answers.usage}

### License
[Link](https://opensource.org/licenses/${answers.license})

### Tests
To run tests, open terminal and run: 
<br>

${answers.tests}

### Contributing
${answers.contributing}

## Questions
Any questions for me? Message me on [GitHub](https://github.com/${answers.username}) or by email @ ${answers.email}


`;
}

module.exports = generateMarkdown;
