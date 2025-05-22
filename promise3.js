console.log("Start  of the file");

setTimeout(function timer1(){
    console.log("Timer 1 done");
}, 0);

for(let i = 0; i < 10000000000; i++){}

let x = Promise.resolve("Jacob Promise");

x.then(function processPromise(value){
    console.log("Whose Promise? ", value);
});

setTimeout(function timer2(){

    console.log("Timer 2 done");
},0)

console.log("End of the file");

// OUTPUT
// Start  of the file
// End of the file
// Whose Promise?  Jacob Promise
// Timer 1 done
// Timer 2 done

