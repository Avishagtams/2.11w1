// ex1.js
function run() {
  console.log("Start");
  setTimeout(() => {
    console.log("Middle");
    console.log("End");
  }, 0);
}



if (typeof module !== "undefined") module.exports = { run };
