console.log("Leariing Array in JavaScript")
//Learning Array Methods
// const fruits =[
//     "mango",
//     "orange",
//     "coconut",
//     "pawpaw",
//     "watermelon",
//     "apple",
//     "cherry"
// ];
// console.log(fruits);
// console.log(fruits[2]);
// fruits.push("banana");
// console.log(fruits);
// fruits.pop()
// console.log(fruits)
// fruits.shift()
// console.log(fruits)
// fruits.unshift("pineapple")
// console.log(fruits)
// console.log(fruits.length)
// console.log(fruits.indexOf("orange"))
// fruits.sort()
// console.log(fruits)
// fruits.splice(4,2)
// console.log(fruits)
// let num = [0,2,4];
// console.log(num)
// console.log(fruits.concat(num))
const myStudents =[
    {name:"bola", age: 25, status:"single"},
    {name:"irene", age: 28, status:"married"},
    {name:"tife", age: 25, status:"complicated"},
    {name:"mariam", age: 21, status:"married"},
    {name:"chioma", age: 27, status:"divorced"},
    {name:"love", age: 28, status:"married"},
    {name:"esther", age: 22, status:"complicated"},
    {name:"grace", age: 21, status:"divorced"},
    {name:"favour", age: 28, status:"single"},
]
// console.log(myStudents[0].name)
// myStudents.forEach((stdName, index)=>{
//     console.log(stdName.name);
//     console.log(name);
//     console.log(index)
// })
// myStudents.forEach(({name, age, status}, index)=>{
//     console.log(`My Name is ${name} i am ${age} years old and i am ${status} `);
// })
// myStudents.forEach((stdName, index)=>{
//     console.log(`My Name is ${stdName.name} i am ${stdName.age} years old and i am ${stdName.status} `);
// // })
// const name = myStudents.map((stdName, index)=>{
//     return stdName.name
// })
// console.log(name)
// const OlderStudents = myStudents.filter((stdName)=>{
//     return stdName. age >=25
// })
// console.log(OlderStudents)
// let MaritalStatus = myStudents.filter((stdName)=>{
//     return stdName.status ==="married"
// })
// console.log(MaritalStatus)
// const findStudents = myStudents.find((stdName)=>{
//     return stdName.name === "bola"
// })
// console.log(findStudents)
// // DOM in JavaScripts
// console.log(document);
// const title = document.getElementById("title")
// console.log(title)
// title.textContent ="Learning DOM";
// title.style.backgroundColor ="green";
// title.style.color = "orange";
//Learning Return in JavaScript

// let Num1 = parseInt(prompt("Enter the first Number"))
// let Num2 = parseInt(prompt("Enter the second number"))
// function AddTwoNumber(Num1, Num2){
//     return Num1 + Num2;
// }
// let C = AddTwoNumber(Num1, Num2);
// console.log(C)
// Learning Event Listener
// Common Events are; click, mouseover, mouseout, keydown, keyup, submit,change and input
// let button = document.getElementById("btn");
// button.addEventListener("click", function(){
//     alert("Your Data is Saved Successfully")
// })
let button = document.getElementById("btn2");
button.addEventListener("mouseover",()=>{
    alert("Click here for help ")
})
