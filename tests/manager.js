const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("Initialization", () => {
      it("should initiate an object", () => {
        const obj = new Manager();
        expect(typeof(obj)).toEqual("object");
      });
    });
    describe("Name", () => {
      it("should create new name", () => {
        const obj = new Manager("Joel");
        expect(obj.name).toEqual("Joel");
      });
    });
    describe("Id", () => {
      it("should create new id", () => {
        const obj = new Manager("Joel",12);
        expect(obj.id).toEqual(12);
      });
    });
    describe("Email", () => {
      it("should create new Email", () => {
        const obj = new Manager("Joel",12, "Joel.email@email");
        expect(obj.email).toEqual("Joel.email@email");
      });
    });
    describe("getName", () => {
      it("can return name by getName method", () => {
        const obj = new Manager("Joel");
        expect(obj.getName()).toEqual("Joel");
      });
    });
    describe("getId", () => {
      it("can return id by getId method", () => {
        const obj = new Manager("Joel", 12);
        expect(obj.getId()).toEqual(12);
      });
    });
    describe("getEmail", () => {
      it("can return email by getEmail method", () => {
        const obj = new Manager("Joel", 12, "Joel.email@email");
        expect(obj.getEmail()).toEqual("Joel.email@email");
      });
    });
    describe("getRole", () => {
      it("can return role by getRole method", () => {
        const role = "Manager";
        const obj = new Manager("Joel", 12, "Joel.email@email");
        expect(obj.getRole()).toEqual(role);
      });
    });
});