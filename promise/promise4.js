function blockingForLoop() {
  for (let i = 0; i < 100000000; i++) {}
}

console.log("Start of the file");

setTimeout(function timer1() {
  console.log("Timer 1 done");
}, 0);

blockingForLoop();

let x = Promise.resolve("Jacob Promise 1");

x.then(function processPromise(value) {
  console.log("Whose Promise? ", value);
  blockingForLoop();
});

let y = Promise.resolve("Jacob Promise 2");

y.then(function processPromise(value) {
  console.log("Whose Promise? ", value);
  setTimeout(function () {
    console.log("OK DONE");
  }, 0);
});

let z = Promise.resolve("Jacob Promise 3");

z.then(function processPromise(value) {
  console.log("Whose Promise? ", value);
});

setTimeout(function timer1() {
  console.log("Timer 2 done");
}, 0);

console.log("End of the file");


// OUTPUT
// Start of the file
// End of the file
// Whose Promise?  Jacob Promise 1
// Whose Promise?  Jacob Promise 2
// Whose Promise?  Jacob Promise 3
// Timer 1 done
// Timer 2 done
// OK DONE
