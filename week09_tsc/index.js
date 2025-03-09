"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var FullTimeEmployee_1 = require("./FullTimeEmployee");
console.log("Welcome to Typescript programming");
var a = 100; //number
console.log(a);
// a = "Hello" //error 
var b = "Hello World";
var c = false;
var d;
d = 200;
var e;
e = "hi";
e = 200;
var f;
f = "hi";
f = 200;
//any unknown null union intesect
var z;
z = "hello";
z = 100;
// z = true //error
var person1 = {
    id: 1,
    name: "Haley",
    gender: "Female",
    city: "Toronto"
};
console.log(person1);
var e1 = new Employee_1.default(1, "Haley", "FEMALE", "TOR", "Student");
// e1.city = "TOR" //error read-only
// e1.designation = "Senior"  //error private
e1.print();
var home = {
    streetNo: 123,
    streetName: "York St",
    city: "TOR",
    country: "CA",
    lat: 122.56,
    lng: 345.70,
    alt: 300
};
console.log(home);
var fe1 = new FullTimeEmployee_1.default(1, "Arthur", "MALE", "NYC", "Teacher", "Full Time Emp");
fe1.print();
//enum
var Status;
(function (Status) {
    Status[Status["PR"] = 100] = "PR";
    Status["CITIZEN"] = "Citizen";
    Status[Status["WORK_PERMIT"] = 200] = "WORK_PERMIT";
    Status[Status["STUDENT"] = 201] = "STUDENT";
})(Status || (Status = {}));
var ee1 = Status.CITIZEN;
//unknown
var x;
x = 100;
x = "Hello";
x = true;
if (typeof x === "string") {
    console.log(x.toUpperCase());
}
//console.log(x.toUpperCase()) //error type unknown
