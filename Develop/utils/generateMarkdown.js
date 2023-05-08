// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === '' || license === null || license === 'None'){
    return '';
  }else{
    let trimLicense = license.replace(" ", "%20")
    return `## Badges
[![License: ${license}](https://img.shields.io/badge/License-${trimLicense}-yellow.svg)]`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === '' || license === null || license === 'None'){
    return '';
  }else{
    return `- [License](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === '' || license === null || license === 'None'){
    return '';
  }else{
    return `## License
    
This project is licensed under: ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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

${data.usageInformation}


## Credits

${data.credits}
${renderLicenseSection(data.license)}

${renderLicenseBadge(data.license)}


## How to Contribute

${data.contributing}


## Tests

${data.testInstructions}


`;
}

module.exports = generateMarkdown;
