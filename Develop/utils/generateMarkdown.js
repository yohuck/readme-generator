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

`;
}

module.exports.renderLicenseBadge = renderLicenseBadge
module.exports.renderLicenseLink = renderLicenseLink
module.exports.renderLicenseSection = renderLicenseSection
module.exports.generateMarkdown = generateMarkdown
