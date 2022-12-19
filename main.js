//webstorage
// sessionstorage
// JSON
//clear()- 
//removeitem(key)
//

localStorage.setItem("Dude","Hark Emoyo");
let get = localStorage.getItem("Dude");
let options = {
    "name":  "Waiter",
    "game": "football",
    "Drinks": ['Beer','Gin','Vodka','Whisky']
};
let str = JSON.stringify(options);
localStorage.setItem("Dude",str);
let original = localStorage.getItem("Dude");
console.log(original);
let obj = JSON.parse(original);


