"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    // id: number
    // name: string
    // gender: string
    // city: string
    // designation: string
    function Employee(id, name, gender, city, designation) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.city = city;
        this.designation = designation;
    }
    Employee.prototype.print = function () {
        console.log("Employee ID: ".concat(this.id));
        console.log("Employee Name: ".concat(this.name));
        console.log("Employee Designation: ".concat(this.designation));
    };
    return Employee;
}());
exports.default = Employee;
