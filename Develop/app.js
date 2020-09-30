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
inquirer.prompt(

    [{
        // questions about the manager
        type: "input",
        name: "name",
        message: "What is your manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your manager's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your manager's email?"
    },
    {
        type: "input",
        name: "office",
        message: "What is your manager's office number?"
    }]
).then(function (managerAnswers) {
    // console.log(managerAnswers);
    const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.office);
    employees.push(manager);


    makeEmployees(); //calling the function for the first time; it will recur later

    function makeEmployees() {
        // inquirer prompt #2
        inquirer.prompt([
            
            {
                type: "list",
                name: "addTeamMember",
                message: "Which type of team member would you like to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "I don't want to add any more team members"
                ]
            }
        ])
            .then(function (typeOfTeamMember) {
                    console.log(typeOfTeamMember.addTeamMember);

                if (typeOfTeamMember.addTeamMember === "Engineer") {
                    // Inquirer prompt #3
                    inquirer.prompt([
                        // engineer questions
                        {
                            type: "input",
                            name: "name",
                            message: "What is your engineer's name?"
                        },
                        {
                            type: "input",
                            name: "id",
                            message: "What is your engineer's id?"
                        },
                        {
                            type: "input",
                            name: "email",
                            message: "What is your engineer's email?"
                        },
                        {
                            type: "input",
                            name: "github",
                            message: "What is your engineer's Github username?"
                        }])

                        .then(function (engineerAnswers) {
                            const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github)
                            employees.push(engineer)


                            makeEmployees(); //recursion
                        })

                } else if (typeOfTeamMember.addTeamMember === "Intern") {
                    //     // inquirer prompt #4
                    inquirer.prompt([
                        //   intern questions
                        {
                            type: "input",
                            name: "name",
                            message: "What is your intern's name?"
                        },
                        {
                            type: "input",
                            name: "id",
                            message: "What is your intern's id?"
                        },
                        {
                            type: "input",
                            name: "email",
                            message: "What is your intern's email?"
                        },
                        {
                            type: "input",
                            name: "school",
                            message: "What is your intern's school?"
                        }
                    ])

                        .then(function (internAnswers) {
                            const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school)
                            employees.push(intern)

                            makeEmployees(); //recursion
                        })

                } else {

                    // After the user has input all employees desired, call the `render` function (required
                    // above) and pass in an array containing all employee objects; the `render` function will
                    // generate and return a block of HTML including templated divs for each employee!

                    // Exit the inquirer
                    const html = render(employees);

                    // After you have your html, you're now ready to create an HTML file using the HTML
                    // returned from the `render` function. Now write it to a file named `team.html` in the
                    // `output` folder. You can use the variable `outputPath` above to target this location.
                    // Hint: you may need to check if the `output` folder exists and create it if it
                    // does not.


                    fs.writeFile(outputPath, html, function (error) {
                        if (error) {

                            console.log("robert/       " + outputPath);
                            throw error;
                        }

                        console.log("Success");

                    });



                }
            })
    }


})