function fetchData(url){
    return new Promise(function (resolve, reject){
        console.log("Started Downloading from URL: ", url);
        setTimeout(function processDownloading(){
            let data = "Dummy Data";
            resolve(data);
        },7000);
    })
}


console.log("Start");
let promiseObj = fetchData("www.jacob.com");
promiseObj.then(function A (value){
    console.log("Value is ", value);
})

console.log("END");


// Output
// Start
// Started Downloading from URL:  www.jacob.com
// END
// Value is  Dummy Data