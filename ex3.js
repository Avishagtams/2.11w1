// ex3.js
function printNumber(val) {
  setTimeout(() => {
    console.log(val);
  }, 0);
}

function run() {
  for (var i = 0; i < 3; i++) {
    printNumber(i);
  }
}
if (typeof module !== "undefined") module.exports = { run };
