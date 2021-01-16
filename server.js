var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Borgesis11!",
  database: "employees_DB"
});

connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View Departments",
        "View Roles",
        "View Employees",
        "Add Departments",
        "Add Roles",
        "Add Employees",
        "Update Employee Roles"
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View Departments":
          viewDep();
          break;

        case "View Roles":
          viewRol();
          break;

        case "View Employees":
          viewEmp();
          break;

        case "Add Departments":
          addDep();
          break;

        case "Add Roles":
          addRol();
          break;

        case "Add Employees":
          addEmp();
          break;

        case "Update Employee Roles":
          updateRole();
          break;
      }
    });
}

function viewDep() {
  var query = "SELECT * FROM department";
  connection.query(query, function(err, res) {
    if (err) {
      console.log(err);
      return;
    }
    else {
      console.table(res)
    }
    runSearch();
  });
}

function viewEmp() {
  var query = "SELECT * FROM employee";
  connection.query(query, function(err, res) {
    if (err) {
      console.log(err);
      return;
    }
    else {
      console.table(res)
    }
    runSearch();
  });
}

function viewRol() {
  var query = "SELECT * FROM roles";
  connection.query(query, function(err, res) {
    if (err) {
      console.log(err);
      return;
    }
    else {
      console.table(res)
    }
    runSearch();
  });
}