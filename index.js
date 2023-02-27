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

