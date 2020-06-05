// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

// let myVar = new Engineer( ... );

class Engineer extends Employee {
    constructor(name, id, email, GithubUser) {
        super(name, id, email);
        this.github = GithubUser;
    }

    getRole() {
        return "Engineer";
    }
   getGithub(){
       return this.github;
    }
}

module.exports = Engineer;