const Employee = require('./Employee');

class Manager extends Employee {
    constructor({name, email,  id, officeNumber}) {

        super({name, email, id});

        this.officeNumber = officeNumber;

        this.role = "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return this.role;
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