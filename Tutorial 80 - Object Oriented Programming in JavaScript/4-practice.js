/* 
   Q.1) You are creating a website for your college. Create a class User with 2
   properties name & email. It also has a method called viewData( ) that allows user to view website data.
   Q.2) Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.
*/

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data")
    }
}

let student1 = new User("ali", "ali@mail.com");
let student2 = new User("ahmed", "ahmed@mail.com");

let teacher1 = new User("dean", "dean@mail.com");


class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        console.log("editted data");
    }
}
let admin1 = new Admin("admin", "admin@mail.com");