// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.


function Intern (name, role, id, email, school) {
    this.name = name;
    this.role = role;
    this.id = id;
    this.email = email;
    this.school = school;
}

Intern.prototype.getRole = function () {
    this.role;
}
Intern.prototype.getSchool = function () {
    this.school;
}

module.exports = Intern;