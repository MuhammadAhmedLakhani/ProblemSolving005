// Part A: Finding elements (about 30 minutes)

//1 Select #title, the first .note, and all .item elements. 

// let title = document.querySelector("#title");
// let firstNote = document.querySelector(".note");
// let allItems = document.querySelectorAll(".item")
// console.log(title);
// console.log(firstNote);    
// console.log(allItems);
// console.log("length -->", allItems.length);

// allItems.forEach(elem => console.log(elem))



// 2: Predict, then run: document.querySelector(".nope").  
//  What does it give? Then run document.querySelector(".nope").textContent.
//  Which crash from earlier in this course is this, and what is the fix?

// try { 
//     console.log(document.querySelector(".nope").textContent)
//  }  catch(error) {
//     console.log(error.message)
//  }

   //  3:Predict: you have const a = document.querySelectorAll(".item") 
   // and const b = document.getElementsByClassName("item").
   //  Add a new li.item to the page from your script.
   //  Which of a.length and b.length changes,
   //  and why? (One list is a snapshot, the other keeps itself up to date.)


const a = document.querySelectorAll(".item") 
const b = document.getElementsByClassName("item")

console.log(a.length)
console.log(b.length)

const list = document.querySelector("#menu") 
const li = document.createElement("li");

li.textContent = "Dynamic list item";
li.className = "item";   
list.append(li);


// Reprinting lengths again  

console.log(a.length) // it take snapshot
console.log(b.length) //4
