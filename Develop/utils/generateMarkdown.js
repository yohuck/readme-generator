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
## Installation
      ${data.installation}
## Usage
      ${data.usage}
## Contribution
      ${data.contribution}
## Testing
      ${data.testing}
## License
      ${data.license}
## Questions
      With any questions, you can reach me on GitHub at ${data.github} or by Email at ${data.email}
  `;
}

module.exports.renderLicenseBadge = renderLicenseBadge
module.exports.renderLicenseLink = renderLicenseLink
module.exports.renderLicenseSection = renderLicenseSection
module.exports.generateMarkdown = generateMarkdown
