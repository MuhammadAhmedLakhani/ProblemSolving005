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


//    const notes = document.querySelectorAll(".note");

//    const secondNote = notes[1];

//    secondNote.classList.add("highlight");//added highlight class and note class is preserved

//    secondNote.classList.remove("highlight")
//    secondNote.classList.toggle("highlight")
//    secondNote.classList.toggle("highlight")

//    console.log(secondNote.classList.contains("highlight"))

//6: The string trap. The three li elements have data-price.
//  Read each price with dataset.price. Predict the type,
//  and predict what "40" + "60" gives. Compute the total price 
// of all items, correctly. Prove your total is a number with typeof.


// const items = document.querySelectorAll(".item");

// // turnit into  list first

// const arr = [...items]


// const total = arr.reduce((sum, elem) => {
//     return sum + Number(elem.dataset.price)
// }, 0);

// // typeof total

// console.log("type total-->",typeof(total))

// console.log(total)


// Part C: Creating, removing, rendering (about 60 minutes)

// Create a li for “Lemonade” (price 50, class item),
//  put its price in data-price, and
//  add it to the end of #menu. Then add “Water” at the start.

// const menu = document.querySelector("#menu");

// const Lemon = document.createElement("li");

// Lemon.textContent = "Lemonade";

// Lemon.classList.add("item");
// Lemon.dataset.price = "50";

// menu.append(Lemon)

// Lemon.textContent = `Water + ${Lemon.textContent}`

//8:Render from data. Given:
// javascript
const drinks = [
    { name: "Tea", price: 40, stock: 10 },
    { name: "Coffee", price: 60, stock: 0 },
    { name: "Juice", price: 80, stock: 5 },
];
const drinks2 = [
    { name: "Lemon Water", price: 40, stock: 10 },
    { name: "Colddrink", price: 60, stock: 0 },
    { name: "Orange Juice", price: 80, stock: 5 },
    { name: "Mango Juice", price: 80, stock: 5 },
];

// Write renderMenu(list) that empties #menu first,
//  then creates one li per drink showing name -
//  price. Out-of-stock drinks get the class done.
//  An empty list shows No items. Call it twice and 
// prove the menu doesn’t contain duplicates.


const renderMenu = (list) => {
    // empty menu
    let menu = document.querySelector("#menu").textContent = "";

    list.forEach(elem => {
        let li = document.createElement("li")
        li.textContent = `${elem.name}`;
        li.dataset.price = `${elem.price}`;
        if (elem.stock <= 0) {
            li.classList.add("done");
        }

        let menu = document.querySelector("#menu")
        menu.append(li)
    });

}

renderMenu(drinks)
renderMenu(drinks2)
