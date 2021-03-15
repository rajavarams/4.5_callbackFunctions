
/* Callback functions are used when we want to execute a function right after the return of another function */

/* add() function is called with x, y and callback. callback function will be called after the ending of addition. */
function add(x, y, callback){
  console.log(`The sum of ${x} and ${y} is ${x+y}.`);
  callback();
} 
/* display function is called after the ending of addition, here display() is the callback function*/
function display(){
  setTimeout(() => { 
  console.log("This is printed after the add function");
}, 3000);
}
add(5,6,display);


