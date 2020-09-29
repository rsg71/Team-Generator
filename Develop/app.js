const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


// inquirer prompt #1
inquirer.prompt([
    
    // questions about the manager

    {
        type: "input",
        name: "manager-name",
        message: "What is your manager's name?"
    },
    {
        type: "input",
        name: "manager-id",
        message: "What is your manager's id?"
    },
    {
        type: "input",
        name: "manager-email",
        message: "What is your manager's email?"
    },
    {
        type: "input",
        name: "manager-office-#",
        message: "What is your manager's office number?"
    },
    {
        type: "list",
        name: "addTeamMember",
        message: "Which type of team member would you like to add?",
        choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more team members"
        ]
    },
    // engineer questions
    {
        type: "input",
        name: "engineer-name",
        message: "What is your engineer's name?"
    },
    {
        type: "input",
        name: "engineer-id",
        message: "What is your engineer's id?"
    },
    {
        type: "input",
        name: "engineer-email",
        message: "What is your engineer's email?"
    },
    {
        type: "input",
        name: "engineer-Github",
        message: "What is your engineer's Github username?"
    },
    //   intern questions

    {
        type: "input",
        name: "intern-name",
        message: "What is your intern's name?"
    },
    {
        type: "input",
        name: "intern-id",
        message: "What is your intern's id?"
    },
    {
        type: "input",
        name: "intern-email",
        message: "What is your intern's email?"
    },
    {
        type: "input",
        name: "intern-school",
        message: "What is your intern's school?"
    }

])
    .then(function (managerAnswers) {
        const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.office);
        employees.push(manager);

        //recursion 
        makeEmployees();

        function makeEmployees() {
    // inquirer prompt #2
    // which type of team member would you like to add?
    // -engineer
    // -intern
    // -no more team members
    .then(function (typeAnswers) {
            if (typeAnswers === "Engineer") {
                // Inquirer prompt #3
                // Engineer questions
                //     .then(function(engineerAnswers) {
                //         const engineer = new Engineer ()
                //         employees.push(engineer)
                //         makeEmployees();
                //     })
                // } else if (typeAnswers === "Intern") {
                //     // inquirer prompt #4
                //         makeEmployees();

                // } else {
                //     // Exit the inquirer
                //     const html = render(employees);
                // }
            })
        }






        // After the user has input all employees desired, call the `render` function (required
        // above) and pass in an array containing all employee objects; the `render` function will
        // generate and return a block of HTML including templated divs for each employee!

        // After you have your html, you're now ready to create an HTML file using the HTML
        // returned from the `render` function. Now write it to a file named `team.html` in the
        // `output` folder. You can use the variable `outputPath` above target this location.
        // Hint: you may need to check if the `output` folder exists and create it if it
        // does not.

        // HINT: each employee type (manager, engineer, or intern) has slightly different
        // information; write your code to ask different questions via inquirer depending on
        // employee type.

        // HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
        // and Intern classes should all extend from a class named Employee; see the directions
        // for further information. Be sure to test out each class and verify it generates an
        // object with the correct structure and methods. This structure will be crucial in order
        // for the provided `render` function to work! ```



        fs.writeFile(outputPath, html, function (error) {
            if (error) {
                throw err;
            }
            console.log("Success");
        });