// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

const generateREADme = ({
  title,
  name,
  description,
  dependencies,
  usage,
  contributing,
  tests,
  license,
  username,
  link,
  email,
}) => {
  return `  # Title
 My title is: ${title}

 By: ${name}

# Table of Contents: 
- [Description](#description)
- [Installation ](#installation )
- [Usage](#usage)
- [Contributing ](#contributing )
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

  # Badge 
  ${license}

  # Description
  ${description}
  
  # Installation 
  ${dependencies}

  # Usage 
  ${usage}

  # Contributing 
  ${contributing}

  # Tests
  ${tests}

  # License
 This app is covered under the ${license} 

  # Questions
  
  - GitHub Username: ${username}
  - GitHub Link: ${link}
   - Email Address: ${email}

  `;
};
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "name",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your GitHub link?",
      name: "link",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Give a short description of your project",
      name: "description",
    },
    {
      type: "checkbox",
      message: "What type of license should your project have?",
      choices: [
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
        "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
      ],
      name: "license",
    },
    {
      type: "input",
      message: "What command should be run to install dependencies?",
      name: "dependencies",
    },

    {
      type: "input",
      message: "What command should be run to run tests?",
      name: "tests",
    },
    {
      type: "input",
      message:
        "What does the user need to know about contributing to the repo?",
      name: "contributing",
    },
    {
      type: "input",
      message: "What does the user need to know about using the repo?",
      name: "usage",
    },
  ])

  .then((data) => {
    const READme = generateREADme(data);
    fs.writeFile("Readme.md", READme, (err) => {
      err ? console.err("failed") : console.log("successful!");
    });
  })
  .catch((err) => {
    console.log(err);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
