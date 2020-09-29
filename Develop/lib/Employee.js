// TODO: Write code to define and export the Employee class

// Employee class requires name, id, email
// Employee class requires getName(), getId(), getEmail(), getRole()

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;