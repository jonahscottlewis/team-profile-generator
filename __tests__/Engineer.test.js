const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    const exampleEngineer = {
        name: "Kyle",
        id: 2,
        email: "kyle@mail.com",
        github: "github.com/kyle",
        role: "Engineer",
    };
    describe("constructor tests", () => {
        test("should construct a new instance of engineer class", () => {
            const engineer = new Engineer(exampleEngineer);
            expect(engineer).toBeInstanceOf(Engineer);
        });
        test("should create new instance of engineer class", () => {
            const engineer = new Engineer(exampleEngineer);
            expect(engineer).toEqual({
                name: "Kyle",
                id: 2,
                email: "kyle@mail.com",
                github: "github.com/kyle",
                role: "Engineer",
            });
        });
    });
    describe("method tests", () => {
        test("name should be returned when getName method is called", () => {
            const engineer = new Engineer(exampleEngineer);
            expect(engineer.getName()).toEqual("Kyle");
        });
        test("id should be returned when getId method is called", () => {
            const engineer = new Engineer(exampleEngineer);
            expect(engineer.getId()).toEqual(2);
        });
        test("email should be returned when getEmail method is called", () => {
            const engineer = new Engineer(exampleEngineer);
            expect(engineer.getEmail()).toEqual("kyle@mail.com");
        });
        test("GitHub URL should be returned when getGitHub method is called", () => {
            const engineer = new Engineer(exampleEngineer);
            expect(engineer.getGitHub()).toEqual("github.com/kyle")
        });
        test("engineer role should be returned when getRole method is called", () => {
            const engineer = new Engineer(exampleEngineer);
            expect(engineer.getRole()).toEqual("Engineer")
        });
    });
});