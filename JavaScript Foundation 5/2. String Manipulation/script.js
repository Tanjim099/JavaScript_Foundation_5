function manipulateString(string){
    const manipulatedString = string.toUpperCase();

    function logString(){
        console.log(`The manipulated string is: ${manipulatedString}`);
    }

    return logString;
}


const myString = "Hello, word";
const logManipulatedString = manipulateString(myString);
logManipulatedString();