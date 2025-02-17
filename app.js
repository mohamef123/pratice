// fetch("https://jsonplaceholder.typicode.com/users/1")
const emailRef = document.querySelector(".email");
console.log(emailRef)

// 1. Then
fetch("https://jsonplaceholder.typicode.com/users/1").then(Response => {
 Response.json().then(data => {
    console.log(data)
    emailRef.innerHTML = data.name;
  })
 })

// 2. Async/Await