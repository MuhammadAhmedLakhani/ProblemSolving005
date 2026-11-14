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


// const a = document.querySelectorAll(".item") 
// const b = document.getElementsByClassName("item")

// console.log(a.length)
// console.log(b.length)

// const list = document.querySelector("#menu") 
// const li = document.createElement("li");

// li.textContent = "Dynamic list item";
// li.className = "item";   
// list.append(li);


// // Reprinting lengths again  

// console.log(a.length) // it take snapshot
// console.log(b.length) //4



//Part B: Changing what’s on the page (about 40 minutes)
//4: Set the title using textContent. Then set textContent = "<b>Hi</b>" and see what the page shows. Then set innerHTML to the same string. Predict both before running, and write down what the difference means for text that comes from a user.

// const title = document.querySelector("#title");

// title.textContent = "Ahmed Store";
// title.textContent = "<b>Hi</b>";   //not evaliated simply 
// title.innerHTML= "<b>Hi</b>";      //Hi is addede as a string

   //of comes from a user , a user can run scripts 

   //5:Using classList on the second .note: add highlight, remove it,
   //  then toggle it twice. Predict what contains("highlight") returns after the two toggles.


   const notes = document.querySelectorAll(".note");

   const secondNote = notes[1];

   secondNote.classList.add("highlight");//added highlight class and note class is preserved

   secondNote.classList.remove("highlight")
   secondNote.classList.toggle("highlight")
   secondNote.classList.toggle("highlight")

   console.log(secondNote.classList.contains("highlight"))
   