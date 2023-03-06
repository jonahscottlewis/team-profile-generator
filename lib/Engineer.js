const Employee = require('./Employee');

class Engineer extends Employee {
    constructor({name,id,email,github}) {

        super({name, id, email})

        this.github = github;

        this.role = "Engineer";
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return this.role;
    }

    // createProfile() {
    //     return`<div>
    //     <h5>Name:${this.name}</h5>
    //     <h5>ID:${this.id}</h5>
    //     <h5>E-mail:<a href="mailto:${this.email}">${this.email}</a></h5>
    //     <h5>GitHub:<a target="_blank" href="https://githuub.com/${this.github}<a/></h5>
    //     <h5>Role:${this.role}</h5>
    //     </div>`
    // }
}


module.exports = Engineer;