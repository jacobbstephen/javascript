function download(url) {
  console.log("Started Downloading content from URL: ", url);

  return new Promise(function exec(resolve, reject) {
    setTimeout(function P() {
      console.log("Completed Downloading data from URL: ", url);
      const content = "ABCDEF";
      resolve(content);// or reject(content)
    }, 5000);
  });
}

download("www.jacob.com")
  .then(
    function fulfillHandler(value) {
      console.log("Content Downloaded: ", value);
      return "This is a promise";
    },
    function rejectHandler(value) {
      console.log("Content Not Downloaded: ", value);
      //   throw new Error("This is not a  promise");
      return Promise.reject("This is not a  promise");
    }
  )
  .then(
    function newFulfillHandler(value) {
      console.log("Content from new fulfill promise: ", value);
    },
    function newRejectHandler(value) {
      console.log("Content from new reject promise: ", value);
    }
  );

//   Started Downloading content from URL:  www.jacob.com
// Completed Downloading data from URL:  www.jacob.com
// Content Downloaded:  ABCDEF
// Content from new fulfill promise:  This is a promise
