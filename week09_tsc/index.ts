import IPerson, {COUNTRY} from "./IPerson"
import Employee from "./Employee"
import FullTimeEmployee from "./FullTimeEmployee"

console.log("Welcome to Typescript programming")
var a = 100 //number
console.log(a)
// a = "Hello" //error 
var b: string = "Hello World" 
var c: boolean = false
var d: number
d = 200

var e: any
e = "hi"
e = 200

var f: unknown
f = "hi"
f = 200
//any unknown null union intesect

var z: string | number
z = "hello"
z = 100

// z = true //error

var person1: IPerson = {
    id: 1,
    name: "Haley",
    gender: "Female",
    city: "Toronto"
}

console.log(person1)

var e1: Employee = new Employee(1, 
    "Haley",
    "FEMALE",
    "TOR",
    "Student"
)

// e1.city = "TOR" //error read-only
// e1.designation = "Senior"  //error private

e1.print()

type Address = {
    streetNo: number
    streetName: string
    city: string
    country: string
}

type Geo = {
    lat: number
    lng: number
    alt: number
}

//Intersect
type HomeAddress = Address & Geo

var home: HomeAddress = {
    streetNo: 123,
    streetName: "York St",
    city: "TOR",
    country: "CA",
    lat: 122.56,
    lng: 345.70,
    alt: 300
}

console.log(home)

var fe1 = new FullTimeEmployee(1, 
    "Arthur",
    "MALE",
    "NYC",
    "Teacher",
    "Full Time Emp"
)

fe1.print()

//enum

enum Status{
    PR = 100,
    CITIZEN = "Citizen",
    WORK_PERMIT = 200,
    STUDENT
}

var ee1: Status = Status.CITIZEN

//unknown
var x: unknown
x = 100
x = "Hello"
x = true

if (typeof x === "string"){
    console.log(x.toUpperCase())
}
//console.log(x.toUpperCase()) //error type unknown