// Function to return the license badge
function renderLicenseBadge(license) {
  if(license === '' || license === null || license === 'None'){
    return '';
  }else{
    let trimLicense = license.replace(" ", "%20")
    return `## Badges
[![License: ${license}](https://img.shields.io/badge/License-${trimLicense}-yellow.svg)]`
  }
}

// Function to create link to license in table of contents
function renderLicenseLink(license) {
  if(license === '' || license === null || license === 'None'){
    return '';
  }else{
    return `- [License](#license)`
  }
}

// Function to create actual license section of readme
function renderLicenseSection(license) {
  if(license === '' || license === null || license === 'None'){
    return '';
  }else{
    return `## License
    
This project is licensed under: ${license}`
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(data.license)}\n
## Installation

${data.installInstruction}


## Usage

${data.usageInformation}\n


## Credits

${data.credits}\n
${renderLicenseSection(data.license)}\n


## How to Contribute

${data.contributing}


## Tests

${data.testInstructions}


## Questions

For additional information, you can reach the author at: 
https://www.github.com/${data.github}\n
${data.email}


`;
}

module.exports = generateMarkdown;
