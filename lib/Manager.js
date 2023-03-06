const Employee = require('./Employee');

class Manager extends Employee {
    constructor({name, id, email, officeNumber}) {

        super({name, id, email});

        this.officeNumber = officeNumber;

        this.role = "Manager";
    }

    getRole() {
        return this.role;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    // createProfile() {
    //     return`<div>
    //     <h5>Name:${this.name}</h5>
    //     <h5>ID:${this.id}</h5>
    //     <h5>E-mail:<a href="mailto:${this.email}">${this.email}</a></h5>
    //     <h5>Office Number:${this.officeNumber}</h5>
    //     <h5>Role:${this.role}</h5>
    //     </div>`
    // }
}


module.exports = Manager;