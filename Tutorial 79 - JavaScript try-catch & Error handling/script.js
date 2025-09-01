let a = prompt("Enter first num");
let b = prompt("Enter second num");

if(isNaN(a) || isNaN(b)) {
    // throw SyntaxError("This is not allowed")
    throw new Error("Sorry...")
};

let sum = parseInt(a) + parseInt(b);

let x = 1;
// try {
//     console.log(sum*x)
// } catch (error) {
//     console.log("Error occured...")
//     // alert(error.name)
//     // alert(error.message)
//     // alert(error.stack)
// }
// finally {
//     console.log("Files are being closed...")
// }

function main() {
    try {
        console.log(sum*x)
        return true
    } catch (error) {
    console.log("Error occured...")
    return false
    }
    finally {
        console.log("Files are being closed...")
    }
}
main()