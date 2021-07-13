//Refactor Global Variables Out of Functions
 let bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

 function add(bookList, bookName){
   newArr = [...bookList]; // copy the booklist array to a newArr
   newArr.push(bookName); // adding the new bookName to newArr
   
   return newArr;
   
 }

 function remove(bookList, bookName){
   newArr = [...bookList];  // copy the booklist array to a newArr
   if(newArr.indexOf(bookName) >= 0){ 
     // Check whether the bookName parameter is in new array.
     newArr.splice(newArr.indexOf(bookName), 1);
     
     return newArr
   }
  }

let newBookList = add(bookList, 'A Brief History of Time');
let newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
let newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies'); 

   //console.log(bookList);
   console.log(newBookList);
   console.log("newerBookList", newerBookList);
   console.log("newestBookList", newestBookList)
 