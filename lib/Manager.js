const Employee = require('../lib/Employee');

function Manager(name, id, email, officeNumber, role) {
    this.name = name;
    this.id = id;
    this.email = email;

    this.officeNumber = officeNumber;
    this.role = 'Manager'
}

module.exports = Manager;