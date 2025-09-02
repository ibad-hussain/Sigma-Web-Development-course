// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends Parent {}

// let obj = new Child();



// class Person {
//     constructor() {
//         this.species = "homo sapiens"
//     }
//     eat() {
//         console.log("eat");
//     }
//     sleep() {
//         console.log("sleep");
//     }
//     work() {
//         console.log("do nothing");
//     }
// }

// class Engineer extends Person{
//     work() {
//         console.log("build something");
//     }
// }
// let ahmed = new Engineer();

// class Doctor extends Person{
//     work() {
//         console.log("treat patients");
//     }
// }
// let ali = new Doctor();



class Person {
    constructor() {
        console.log("enter parent constructor")
        this.species = "homo sapiens"
    }

    eat() {
        console.log("eat");
    }
}

class Engineer extends Person{
    constructor(branch) {
        console.log("enter child constructor")
        super() // to invoke parent class constructor
        this.branch = branch;
        console.log("exit child constructor")
    }
    work() {
        console.log("build something");
    }
}
let ahmed = new Engineer("chem. engg.");



// class Person {
//     constructor(name) {
//         this.species = "homo sapiens"
//         this.name = name;
//     }

//     eat() {
//         console.log("eat");
//     }
// }

// class Engineer extends Person{
//     constructor(name) {
//         super(name);
//     }
//     work() {
//         super.eat();
//         console.log("build something");
//     }
// }
// let engObj = new Engineer("ibad");