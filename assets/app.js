// Part A: Finding elements (about 30 minutes)

// Select #title, the first .note, and all .item elements. 

let title = document.querySelector("#title");
let firstNote = document.querySelector(".note");
let allItems = document.querySelectorAll(".item")
console.log(title);
console.log(firstNote);
console.log(allItems);
console.log("length -->",allItems.length);

allItems.forEach(elem => console.log(elem))



