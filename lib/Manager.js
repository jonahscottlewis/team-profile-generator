const Employee = require('./Employee');

class Manager extends Employee {
    constructor({name, email,  id, officeNumber}) {

        super({name, email, id});

        this.officeNumber = officeNumber;

        this.role = "Manager";
    }

    getRole() {
        return this.role;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
    
}

module.exports = Manager;