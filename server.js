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
  connection.query(query, function (err, res) {
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
  connection.query(query, function (err, res) {
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
  connection.query(query, function (err, res) {
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

function addEmp() {

  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the employee's first name?"
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the employee's last name?"
      },
      {
        type: "list",
        name: "rolesID",
        message: "What is the employee's role?",
        choices: [
          1,
          2,
          3,
          4,
          5
        ]
      }
    ])
    .then(function (answer) {
      var query = `INSERT INTO employee SET ?`
      connection.query(query,
        {
          first_name: answer.first_name,
          last_name: answer.last_name,
          rolesID: answer.rolesId
        },
        function (err, res) {
          if (err) throw err;
          runSearch();
        });
    });
}

function addDep() {

  inquirer
    .prompt([
      {
        type: "input",
        name: "depName",
        message: "What is the new department's name?"
      }
    ])
    .then(function (answer) {
      var query = `INSERT INTO department SET ?`
      connection.query(query,
        {
          depName: answer.depName
        },
        function (err, res) {
          if (err) throw err;
          runSearch();
        });
    });
}

function addRol() {

  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the new title called?"
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary for this new position?"
      },
      {
        type: "list",
        name: "departmentID",
        message: "Which department does this position belong to?",
        choices: [
          1,
          2,
          3,
          4,
          5
        ]
      }
    ])
    .then(function (answer) {
      var query = `INSERT INTO roles SET ?`
      connection.query(query,
        {
          title: answer.title,
          salary: answer.salary,
          departmentID: answer.departmentID
        },
        function (err, res) {
          if (err) throw err;
          runSearch();
        });
    });
}

