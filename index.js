// Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:',
    },
    {
        type: 'list',
        name: 'contributing',
        message: 'What are the contribution guidelines? Use the example or type your own:',
        choices: ["Pull requests are welcome. For changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate." ,'type your own'],
    },
    {
        type: 'input',
        name: 'customcontributing',
        message: 'Please specify your contribution guidelines.',
        when: (answers) => answers.contributing === 'type your own',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project have?',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', "BSL-1.0", "MPL-2.0", "BSD-2-Clause", "BSD-3-Clause", 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// A function to write README file
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => {
            err ? console.log(err) : console.log('Successfully created README.md!');
    });
};

// A function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const readmeContent = generateMarkdown(answers);
            writeToFile('README.md', readmeContent);
        });
}
// Function call to initialize app
init();
