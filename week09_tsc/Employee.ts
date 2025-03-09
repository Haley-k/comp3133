import IPerson from "./IPerson"

export default class Employee implements IPerson {
    // id: number
    // name: string
    // gender: string
    // city: string
    // designation: string

    constructor(public id: number,
        public name: string,
        public gender: string,
        readonly city: string,
        private designation: string) {}

    print() {
        console.log(`Employee ID: ${this.id}`)
        console.log(`Employee Name: ${this.name}`)
        console.log(`Employee Designation: ${this.designation}`)
    }
}