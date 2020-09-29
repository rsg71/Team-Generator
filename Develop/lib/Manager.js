// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.


function Manager (name, role, id, email, office) {
    this.name = name;
    this.role = role;
    this.id = id;
    this.email = email;
    this.office = office;
}

Manager.prototype.getRole = function () {
    this.role;
}
Manager.prototype.getOffice = function () {
    this.office;
}


module.exports = Manager;