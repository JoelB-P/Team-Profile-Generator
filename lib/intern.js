class Intern {
    constructor(name= null , id= null , email= null) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Intern";
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return this.role
    }

}

module.exports = Intern;
