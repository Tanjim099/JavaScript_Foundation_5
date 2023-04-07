const url = "https://jsonplaceholder.typicode.com/posts/123456789";

fetch(url)
.then(response =>{
    if(!response.ok){
        throw new Error("Network response was not ok");
    }
    return response.json();
})
.then(data =>{
    console.log(data)
})
.catch(error =>{
    console.log("There was a problem with the fetch operation:", error);
    const errorMassage = document.createElement("p");
    errorMassage.textContent = "There was a problem with the fetch operation:" + errorMassage;
    document.body.appendChild(errorMassage);
})