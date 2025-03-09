import Employee from "./Employee";

export default class FullTimeEmployee extends Employee {
    empType: string
    constructor(id: number, name: string, gender: string, city: string, designation: string, empType: string) {
        super(id, name, gender, city, designation)
        this.empType = empType
    }

    override print() {
        super.print()
        // this.designation = "Senior" //error private
        console.log(`Employee Type: ${this.empType}`)
    }
}