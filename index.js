const inquirer = require('inquirer')
const fs = require('fs')
const generateHTML = require("./generateHTML");

// Importing all classes
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

// Declare employees as an empty array to be filled with user input
const employees = [];

let isTeamComplete = false;

const validateInput = (userInput) => {
    if (userInput === "") {
        return "please give an anser to proceed";
    } else {
        return true;
    }
};

const init = async () => {
    await createManager();

    while (!isTeamComplete) {
        const employeeQuestion = [
            {
                type: "list",
                message: "Please select employee type",
                name: "employeeType",
                choices: [
                    { name: "Engineer", value: "engineer", short: "Engineer" },
                    { name: "Intern", value: "Intern", short: "None" },
                    { name: "None", value: "None", short: "None" },
                ],

            }
        ]

        const { employeeType } = await inquirer.createPromptModule(employeeQuestion);

        if (employeeType === "none") {
            isTeamComplete = true;


        } else {
            if (employeeType === "engineer") {
                await createEngineer();
            }
            if (employeeType === "intern") {
                await createIntern();
            }
        }
    }


// The employees array is passed into the generate html function and then this markdown is used to create a new team-profile.html
    const HTML = generateHTML(employees);
    fswriteFileSync("team-profile.html",HTML, (err) => {
        // Errors are caught
        if(err){
            console.log(err);

        // If writing to file was succesful, then the HTML file created message is logged in the console
        }else{
            console.log("HTML file created");
        }
    });

};

const createManager = async () =>{

    const managerQuestions = [
        {
            type: "input",
            message: "Enter manager name",
            name: "name",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter employee ID number",
            name: "ID",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter manager office number",
            name: "officeNumber",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter e-mail",
            name: "email",
            validate: validateInput,
        },

    ];


    const managerAnswers = await inquirer.createPromptModule(managerQuestions);

    const manager = new Manager(managerAnswers);

    employees.push(manager);

};

const createEngineer = async () => {

    const engineerQuestions = [
        {
            type: "input",
            message: "Enter engineer name",
            name: "name",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter engineer ID number",
            name:"ID",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter email",
            name: "email",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter engineer GitHub URL",
            name: "github",
            validate: validateInput,
        }
    ];

    const engineerAnswers = await inquirer.prompt(engineerQuestions);

    const engineer = new Engineer(engineerAnswers);

    employees.push(engineer);

};

const createIntern = async () => {

    const internQuestions = [
        {
            type: "input",
            message: "Enter intern name",
            name: "name",
            valiadate: validateInput,
        },
        {
            type: "input",
            message: "enter intern ID number",
            name: "ID",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter intern e-mail",
            name: "email",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter intern school",
            name: "scohool",
            vallidate: validateInput,
        },
    ];

    const internAnswers = await inquirer.prompt(internQuestions);

    const intern = new Intern(internAnswers);

    employees.push(intern);
};

init();
