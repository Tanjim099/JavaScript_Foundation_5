function greet(name){
    return new Promise((resolve, reject) =>{
        if(typeof name !== "string"){
            reject(new Error("Name must be a string"))
        }
        else{
            resolve(`Hello, ${name}`);
        }
    })
}

greet("Tanjim")
.then(massage => console.log(massage))
.catch(err => console.log(err));