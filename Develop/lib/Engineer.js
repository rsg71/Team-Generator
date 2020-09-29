// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.


function Engineer (name, role, id, email, github) {
    this.name = name;
    this.role = role;
    this.id = id;
    this.email = email;
    this.github = github;
}

Engineer.prototype.getGithub = function () {
    this.github;
}
Engineer.prototype.getRole = function () {
    this.role;
}


module.exports = Engineer;