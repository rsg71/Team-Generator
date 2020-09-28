// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.


function Manager (name, position, id, email, office) {
    this.name = name;
    this.position = position;
    this.id = id;
    this.email = email;
    this.office = office;
}


module.exports = Manager;