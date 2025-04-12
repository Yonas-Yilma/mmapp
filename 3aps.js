//document.getElementById("my_counter_app").innerText=10;let myAge=23;console.log(myAge);

/* let text="per";
let message="You have three new notification";
let messageToUser=message + " ," + text +"!";
console.log(messageToUser);
welComeEl.innerText=greeting + name;
welComeEl.innerText=welComeEl.innerText+"🚀";
*/

let myCounter=document.getElementById("my_counter_app");
let saveEl=document.getElementById("save_El"); 
console.log(saveEl);

let count=0;
function increment(){
    count +=1;
    myCounter.innerText=count;
    
  
};

function save(){
   let countST=count + " - ";
   saveEl.textContent +=countST;
  myCounter.textContent=0;
  count=0;
  
   
}



  


 
 








 











