// ex7.js
function loadUser(callback) {
  setTimeout(() => callback("Dana"), 30);
}

function loadOrders(callback) {
  setTimeout(() => callback(3), 10);
}

function run() {
  loadUser((user) => {
    console.log("User: " + user);
    loadOrders((orders) => {
      console.log("Orders: " + orders);
    });
  });
}

if (typeof module !== "undefined") module.exports = { run };