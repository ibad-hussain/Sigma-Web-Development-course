// class Toyota {
//     start() {
//         console.log("start");
//     }
//     stop() {
//         console.log("stop");
//     }
//     setBrand(brand) {
//         this.brand = brand;
//     }
// }

// let fortuner = new Toyota();
// fortuner.brand = "fortuner";
// let lexus = new Toyota();
// lexus.brand = "lexus";


class Toyota {
    constructor(brand, mileage) {
        console.log("creating new object")
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
}

let fortuner = new Toyota("fortuner", 10);
console.log(fortuner);
let lexus = new Toyota("lexus", 20);
console.log(lexus);