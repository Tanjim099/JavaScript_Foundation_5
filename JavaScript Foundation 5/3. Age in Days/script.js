function ageInDays(person){
    const fullName = person.firstName + " " + person.lastName;
    const ageInDays = person.age * 365;


    return function(){
        console.log(`The person full name is ${fullName} and their age in days is ${ageInDays}.`);
    }
};

const person = {
    firstName: "Tanjim",
    lastName: "Alam",
    age: 30
};

const logAgeInDays = ageInDays(person);
logAgeInDays();