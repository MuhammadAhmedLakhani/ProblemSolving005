// Part A: Finding elements (about 30 minutes)

//1 Select #title, the first .note, and all .item elements. 

let title = document.querySelector("#title");
let firstNote = document.querySelector(".note");
let allItems = document.querySelectorAll(".item")
console.log(title);
console.log(firstNote);
console.log(allItems);
console.log("length -->", allItems.length);

allItems.forEach(elem => console.log(elem))



// 2: Predict, then run: document.querySelector(".nope").  
//  What does it give? Then run document.querySelector(".nope").textContent.
//  Which crash from earlier in this course is this, and what is the fix?

try { 
    console.log(document.querySelector(".nope").textContent)
 }  catch(error) {
    console.log(error.message)
 }