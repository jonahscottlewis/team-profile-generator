const Employee = require('../lib/Employee');

describe('Employee', () => {
    const exampleEmployee = {
        name: "Jonah",
        id: 1,
        email: "jonah@mail.com",
    };
    describe("constructor tests", () => {
        test("should construct new instance of employee class", () => {
            const employee = new Employee(exampleEmployee);
            expect(employee).toBeInstanceOf(Employee);
        });
        test("should create new employee class with name, id, email", () => {
            const employee = new Employee(exampleEmployee);
            expect(employee).toEqual({
                name: "Jonah",
                id: 1,
                email: "jonah@mail.com",
            });
        });
    });
    describe("method tests", () => {
        test("name should be returned when getName method is called", () => {
            const employee = new Employee(exampleEmployee);
            expect(employee.getName()).toEqual("Jonah");
        });
        test("id should be returned when getId method is called", () => {
            const employee = new Employee(exampleEmployee);
            expect(employee.getId()).toEqual(1);
        });
        test("id should be returned when getId method is called", () => {
            const employee = new Employee(exampleEmployee);
            expect(employee.getEmail()).toEqual("jonah@mail.com");
        });
    });
});