const licenses = ['Apache', 'GNU GPL v3.00','MIT','Boost','BSD 2-clause','BSD 3-clause','None']
const licenseImgs = [
  "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
  "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  "No license"
]


// If there is no license, return an empty string
function renderLicenseBadge(license) {
  for (var i = 0; i < licenses.length; i++){
    if (licenses[i] == license)
    {
      return licenseImgs[i];
    }
  }
}


// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None')
  {
    return 'No license was used on this project.'
  }
  else
  {
    return `The ${license} was used on this project.`
  }
}

function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.desc}
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  
  ## Installation
  
  Before running the program, navigate to its directory in the terminal and run the following command:
      ${data.install}
  
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contribute}
  ## Tests
  ${data.testing}
  ## Questions
  If you have any questions, you can contact me here:
  * ${data.email}
  
  More of my work can be viewed here:
  * https://github.com/${data.github}
  

`;
}

module.exports = generateMarkdown;
