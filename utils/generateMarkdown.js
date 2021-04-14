// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  // let badge = "";
  if(answers.license == "MIT"){
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
}else if (answers.license == "APACHE 2.0"){
    badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"
}else if (answers.license == "GPL 3.0"){
    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
}else if (answers.license == "BSD 3"){
    badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]"
}

}



// [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
//  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // let link = "";
  if(answers.license == "MIT"){
    link = "[Link](https://opensource.org/licenses/MIT)"
}else if (answers.license == "APACHE 2.0"){
    link = "[Link](https://opensource.org/licenses/Apache-2.0)"
}else if (answers.license == "GPL 3.0"){
    link = "[Link](https://www.gnu.org/licenses/gpl-3.0)"
}else if (answers.license == "BSD 3"){
    link = "[Link](https://opensource.org/licenses/BSD-3-Clause)"
}

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title} ![badge](https://img.shields.io/badge/license-${answers.license})

  ${answers.description}

  ## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  * [Contributing](#contributing)
  * [Questions](#questions)

## Install
To install required dependencies, open terminal and run: ${answers.installation}

### Usage
${answers.usage}

### License
${answers.license}

### Tests
To run tests, open terminal and run: ${answers.tests}

### Contributing
${answers.contributing}

## Questions
Any questions for me? Message me on [GitHub](https://github.com/${answers.username}) or by email @ ${answers.email}


`;
}

module.exports = generateMarkdown;
