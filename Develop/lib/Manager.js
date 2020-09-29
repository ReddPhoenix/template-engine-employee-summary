// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// Manager class requires name, id, email, officeNumber
// Manager class requires getOfficeNumber(), getRole()
// getRole() overwritten to return 'Manager'

const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;