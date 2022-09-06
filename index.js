const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

const promptUser = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?"       
        },
        {
            type: 'input',
            name: 'managerID',
            message: "What is the manager's ID?"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the manager's email?"
        },
        {
          type: 'input',
          name: 'managerOffice',
          message: "What is the manager's office number?"
        }
    ]);
  };

  const promptEmployees = portfolioData => {

    // If there's no 'employees' array property, create one
    if (!portfolioData.employees) {
      portfolioData.employees = [];
    }
    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'teamMemberOptions',
          message: "Choose one option",
          choices: ['Add Engineer', 'Add Intern']
        },
        {
          type: 'input',
          name: 'engineerName',
          message: "What is the engineers name?",
          when: (answers) => answers.teamMemberOptions === 'Add Engineer'
        },
        {
          type: 'input',
          name: 'internName',
          message: "What is the interns name?",
          when: (answers) => answers.teamMemberOptions === 'Add Intern'
        },
        {
          type: 'input',
          name: 'employeeID',
          message: "What is their employee ID?"
        },
        {
          type: 'input',
          name: 'employeeEmail',
          message: "What is their email?"
        },
        {
          type: 'input',
          name: 'engineerGithub',
          message: "What is their github username?",
          when: (answers) => answers.teamMemberOptions === 'Add Engineer'
        },
        {
          type: 'input',
          name: 'internSchool',
          message: "What is their school?",
          when: (answers) => answers.teamMemberOptions === 'Add Intern'
        },
        {
          type: 'confirm',
          name: 'confirmAddMember',
          message: 'Would you like to enter another team member?',
          default: false
        }
      ])
      .then(teamData => {
        portfolioData.employees.push(teamData);
        if (teamData.confirmAddMember) {
          return promptEmployees(portfolioData);
        } else {
          return portfolioData;
        }
      });
  };

  promptUser()
    .then(promptEmployees)
    .then((portfolioData) => {
        let result = generateHTML(portfolioData);
        writeToFile('./dist/index.html', result)
      })
      .catch((error) => {
        console.log(error)
      })

function writeToFile(fileName, fileContent) {
  fs.writeFileSync(fileName, fileContent, err => {
    if (err) {
      rejects(err);
      return;
    }
    resolve({
      ok: true,
      message: 'File Created!'
    });
  });
};
