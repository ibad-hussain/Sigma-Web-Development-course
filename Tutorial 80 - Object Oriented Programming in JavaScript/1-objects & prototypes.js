// const student = {
//     name : "ibad hussain",
//     marks : 80,
//     printMarks : function() {
//         console.log("marks = ", this.marks) // student.marks
//     } 
// }



const employee = {
    calTax1() {
        console.log("tax rate is 10%");
    },
    // calTax2 : function() {
    //     console.log("tax rate is 10%");
    // }
};

const ahmed = {
    salary : 70000
};
const ali = {
    salary : 70000
};
const saad = {
    salary : 70000
};

ahmed.__proto__ = employee;
console.log(ahmed.calTax1())
ali.__proto__ = employee;
saad.__proto__ = employee;


const hamza = {
    salary : 70000,
    calTax1() {
        console.log("tax rate is 20%");
    }
};
hamza.__proto__ = employee;