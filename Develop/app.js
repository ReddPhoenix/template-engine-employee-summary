const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const teamComplete = [];


// function to initialize team creation
function teamCreate() {
    // user selects the team position to create
    inquirer.prompt([
        {
            type: "list",
            name: "teamPosition",
            message: "Select a position to create: ",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Team is complete!"
            ]
        }
    ]).then(roleSelection => {
        // user is prompted with questions specific to position
        switch (roleSelection.teamPosition) {
            case "Manager":
                managerCreate();
                break;
            case "Engineer":
                engineerCreate();
                break;
            case "Intern":
                internCreate();
                break;
            case "Team is complete!":
                createFinal();
                break;
            }
    })
};




// function call to initialize program
teamCreate();

// function to write path
function createFinal() {
    if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);
    fs.writeFileSync(outputPath, render(teamComplete), err => {
        if (err) console.log(err);
    });
}


// function to run inquirer for Manager team position
function managerCreate() {
    inquirer.prompt([
        // Manager questions
        {
            type: "input",
            name: "managerName",
            message: "Enter the manager's name: "
        },
        {
            type: "input",
            name: "managerId",
            message: "Enter the manager's employee ID: "
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Enter the manager's email: "
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the manager's office number: "
        }
    ]).then(roleSelection => {
        console.log(roleSelection);

        // set variable to hold Manager objects
        var managerPosition = new Manager(roleSelection.managerName, roleSelection.managerId, roleSelection.managerEmail, roleSelection.officeNumber);

        // push manager objects into array
        teamComplete.push(managerPosition);
        
        // function called again to add positions
        teamCreate();
    })
};

// function to run inquirer for Engineer team position
function engineerCreate() {
    inquirer.prompt([
        // Engineer questions
        {
            type: "input",
            name: "engineerName",
            message: "Enter the engineer's name: "
        },
        {
            type: "input",
            name: "engineerId",
            message: "Enter the engineer's employee ID: "
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Enter the engineer's email: "
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "Enter the engineer's GitHub username: "
        }
    ]).then(roleSelection => {
        // display answers to engineer questions
        console.log(roleSelection);

        // set variable to hold Engineer objects
        var engineerPosition = new Engineer(roleSelection.engineerName, roleSelection.engineerId, roleSelection.engineerEmail, roleSelection.egineerGithub);

        // push engineer objects into array
        teamComplete.push(engineerPosition);
        
        // function called again to add positions
        teamCreate();
    })
};

// function to run inquirer for Intern team position
function internCreate() {
    inquirer.prompt([
        // Intern questions
        {
            type: "input",
            name: "internName",
            message: "Enter the intern's name: "
        },
        {
            type: "input",
            name: "internId",
            message: "Enter the intern's employee ID: "
        },
        {
            type: "input",
            name: "internEmail",
            message: "Enter the intern's email: "
        },
        {
            type: "input",
            name: "internSchool",
            message: "Enter the intern's school: "
        }
    ]).then(roleSelection => {
        // display answers to intern questions
        console.log(roleSelection);
        
        // set variable to hold Intern objects
        var internPosition = new Intern(roleSelection.internName, roleSelection.internId, roleSelection.internEmail, roleSelection.internSchool); 
        
        // push intern objects into array
        teamComplete.push(internPosition);

        // function called again to add positions
        teamCreate();
    })
};

module.exports = teamComplete;


