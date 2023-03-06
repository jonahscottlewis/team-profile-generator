const Employee = require('./Employee');

class Intern extends Employee {
    constructor({name, id, email, school}) {

        super({name, id, email})

        this.school = school;

        this.role = "Intern";
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }

    // createProfile() {
    //     return`<div>
    //     <h5>Name:${this.name}</h5>
    //     <h5>ID:${this.id}</h5>
    //     <h5>E-mail:<a href="mailto:${this.email}">${this.email}</a></h5>
    //     <h5>School:${this.school}</h5>
    //     <h5>Role:${this.role}</h5>
    //     </div>`
    // }
}

module.exports = Intern;