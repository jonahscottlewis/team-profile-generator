const Intern = require('../lib/Intern');

describe('Intern', () => {
    const exampleIntern = {
    name: "Derek",
    id: 3,
    email: "derek@mail.com",
    school: "UC Davis",
    role: "Intern",

    };
    describe("constructor tests", () => {
        test("should construct a new instance of intern class", () => {
            const intern = new Intern(exampleIntern);
            expect(intern).toBeInstanceOf(Intern);
        });
        test("should create new instance of engineer class", () => {
            const intern = new Intern(exampleIntern);
            expect(intern).toEqual({
                name: "Derek",
                id: 3,
                email: "derek@mail.com",
                school: "UC Davis",
                role: "Intern",
            });
        });
    });
    describe("method tests", () => {
        test("name should be returned when getName method is called", () => {
            const intern = new Intern(exampleIntern);
            expect(intern.getName()).toEqual("Derek");
        });
        test("id should be returned when getId method is called", () => {
            const intern = new Intern(exampleIntern);
            expect(intern.getId()).toEqual(3);
        });
        test("email should be returned when getEmail method is called", () => {
            const intern = new Intern(exampleIntern);
            expect(intern.getEmail()).toEqual("derek@mail.com");
        });
        test("school should be returned when getSchool method is called", () => {
            const intern = new Intern(exampleIntern);
            expect(intern.getSchool()).toEqual("UC Davis")
        });
        test("intern role should be returned when getRole method is called", () => {
            const intern = new Intern(exampleIntern);
            expect(intern.getRole()).toEqual("Intern")
        });
    });
});