// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(license + ' another bit')
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license)
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
- [License](#license)
- [How to Contribute](#contributing)
- [Testing](#tests)
- [Questions](#questions)

## Installation
      ${data.installation}

## Usage
      ${data.usage}
      ![${data.title} screenshot](assets/images/screenshot.png)

## Credits
      ${data.credits}

## License
      ${data.license}   

## Contributing
      ${data.contribution}

## Tests
      ${data.testing}



## Questions
      With any questions, you can reach me on GitHub at ${data.github} or by Email at ${data.email}
  `;
}

module.exports.renderLicenseBadge = renderLicenseBadge
module.exports.renderLicenseLink = renderLicenseLink
module.exports.renderLicenseSection = renderLicenseSection
module.exports.generateMarkdown = generateMarkdown
