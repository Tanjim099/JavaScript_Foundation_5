async function getData() {
    const todoResponse = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  
    const todoData = await todoResponse.json();
    const postData = await postResponse.json();
  
    const result = {
      todo: todoData,
      post: postData
    }
    console.log(result)
}
getData()