const Employee = require('./Employee');

class Engineer extends Employee {
    constructor({name, email, id, github}) {

        super({name, email, id})

        this.github = github;

        this.role = "Engineer";
    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return this.role;
    }

}

module.exports = Engineer;