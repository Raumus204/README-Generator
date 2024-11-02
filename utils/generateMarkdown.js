// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[License](https://opensource.org/licenses/${license})`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `
## License
This project is licensed under the ${license} license.`;
}

return "";
}

// TODO: Create a function to generate markdown for README
// Function to generate markdown content from user input
function generateMarkdown(readmeContent) {
  return `
# ${readmeContent.title}
by ${readmeContent.name}
${renderLicenseBadge(readmeContent.license)}

## Description
${readmeContent.description}

## Installation
${readmeContent.installation}

## Usage
${readmeContent.usage}

## Contributing
${readmeContent.contributing}

## Tests
${readmeContent.tests}

${renderLicenseSection(readmeContent.license)}
${renderLicenseLink(readmeContent.license)}

## Questions
If you have any questions, please reach out to me on GitHub: [${readmeContent.github}](https://github.com/${readmeContent.github}) or via email: ${readmeContent.email}.
Also have a video guide: [Video](https://drive.google.com/file/d/1aYY4kgUUEF542BzA-VetdCVGyNQAyqrc/view) or readme generator.mp4 in the files

  `;
}

export default generateMarkdown;
