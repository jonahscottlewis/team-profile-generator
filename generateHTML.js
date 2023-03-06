const fs = require("fs");
const path = require("path");
const templatesDir = path.resolve(__dirname,"../Templates");

const generateHTML = (employees) => {
    const HTML = [];

    HTML.push(
        employees
        .filter((employee) =>employee.getRole()==="Manager")
        .map((manager) => renderManager(manager))
    );
    HTML.push(
        employees
        .filter((employee) => employee.getRole()=== "Engineer")
        .map((engineer) => renderEngineer(engineer))
    );
    HTML.push(
        employees
        .filter((employee) => employee.getRole()==="Intern")
        .map((intern) =>renderIntern(intern))
    );

    return renderFullMarkdown(HTML.join(""));
};

const renderManager = (manager) =>{
    let template = fs.readFileSync(
        path.resolve(templatesDir, "manager.html"),
        "utf8"
    );

    template = replaceTemplates(template, "name", manager.getName());
    template = replaceTemplate(template, "id", manager.getId());
    template = replaceTemplate(template, "role", manager.getRole());
    template = replaceTemplate(template, "email", manager.getEmail());
    template = replaceTemplate(template, "officeNumber", manager.getOfficeNumber());

    return template;
};

const renderEngineer = (engineer) =>{
    let template = fs.readFileSync(
        path.resolve(templatesDir, "engineer.html"),
        "utf8"
    );

    template = replaceTemplates(template, "name", engineer.getName());
    template = replaceTemplate(template, "id", engineer.getId());
    template = replaceTemplate(template, "role", engineer.getRole());
    template = replaceTemplate(template, "email", engineer.getEmail());
    template = replaceTemplate(template, "github", engineer.getGitHub());

    return template;
};

const renderIntern = (intern) =>{
    let template = fs.readFileSync(
        path.resolve(templatesDir, "intern.html"),
        "utf8"
    );

    template = replaceTemplates(template, "name", intern.getName());
    template = replaceTemplate(template, "id", intern.getId());
    template = replaceTemplate(template, "role", intern.getRole());
    template = replaceTemplate(template, "email", intern.getEmail());
    template = replaceTemplate(template, "school", intern.getSchool());

    return template;
};

const renderFullMarkdown = (HTML) => {

    let template = fs.readFileSync(
        path.resolve(templatesDir, "full-markdown.html"),
        "utf8"
    );

    return replaceTemplates(template, "team", HTML);
};

const replaceTemplates = (template, placeholder, value) => {
    const pattern = new RegExp(`{{${placeholder}}}`, "gm");

    return template.replace(pattern, value);
};

module.exports = generateHTML;