const Manager = require('../lib/Manager');

describe('Manager', () => {
    const exampleManager = {
        name: "Bob",
        id: 4,
        email: "bob@mail.com",
        officeNumber: 1,
    };
    describe("constructor tests", () => {
        test("should construct a new instance of manager class", () => {
            const manager = new Manager(exampleManager);
            expect(manager).toBeInstanceOf(Manager);
        });
        test("should create new instance of manager class", () => {
            const manager = new Manager(exampleManager);
            expect(manager).toEqual({
                name: "Bob",
                id: 4,
                email: "bob@mail.com",
                officeNumber: 1,
                role: "Manager",
            });
        });
    });
    describe("method tests", () => {
        test("name should be returned when getName method is called", () => {
            const manager = new Manager(exampleManager);
            expect(manager.getName()).toEqual("Bob");
        });
        test("id should be returned when getId method is called", () => {
            const manager = new Manager(exampleManager);
            expect(manager.getId()).toEqual(4);
        });
        test("email should be returned when getEmail method is called", () => {
            const manager = new Manager(exampleManager);
            expect(manager.getEmail()).toEqual("bob@mail.com");
        });
        test("office number should be returend when getOfficeNumber method is called", () => {
            const manager = new Manager(exampleManager);
            expect(manager.getOfficeNumber()).toEqual(1);
        });
        test("intern role should be returned when getRole method is called", () => {
            const manager = new Manager(exampleManager);
            expect(manager.getRole()).toEqual("Manager");
        });
    });
});