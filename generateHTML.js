const fs = require("fs");
const path = require("path");
const templatesDir = path.resolve(__dirname,"./Templates");

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

    template = replaceTemplates(template, "this.name", manager.getName());
    template = replaceTemplates(template, "this.id", manager.getId());
    template = replaceTemplates(template, "this.role", manager.getRole());
    template = replaceTemplates(template, "this.email", manager.getEmail());
    template = replaceTemplates(template, "this.officeNumber", manager.getOfficeNumber());
    console.log(template)
    return template;
};

const renderEngineer = (engineer) =>{
    let template = fs.readFileSync(
        path.resolve(templatesDir, "engineer.html"),
        "utf8"
    );

    template = replaceTemplates(template, "this.name", engineer.getName());
    template = replaceTemplates(template, "this.id", engineer.getId());
    template = replaceTemplates(template, "this.role", engineer.getRole());
    template = replaceTemplates(template, "this.email", engineer.getEmail());
    template = replaceTemplates(template, "this.github", engineer.getGitHub());

    return template;
};

const renderIntern = (intern) =>{
    let template = fs.readFileSync(
        path.resolve(templatesDir, "intern.html"),
        "utf8"
    );
    console.log("template \n \n", template)

    template = replaceTemplates(template, "this.name", intern.getName());
    template = replaceTemplates(template, "this.id", intern.getId());
    template = replaceTemplates(template, "this.role", intern.getRole());
    template = replaceTemplates(template, "this.email", intern.getEmail());
    template = replaceTemplates(template, "this.school", intern.getSchool());

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
    // const pattern = new RegExp(`{{${placeholder}}}`, "gm");
    let result = template.replace(placeholder, value);
    console.log(result)
    // console.log(result)
    return result;
};

module.exports = generateHTML;