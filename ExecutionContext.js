// Whenever the function is called, it forms an imaginary container where there are three things -->

// 1. variables
// 2. functions inside the parent function
// 3. lexical environment

// this imaginary container is called execution context.

function abcd() {
  var a = 12;
  function def() {
    var b = 12;
  }
}
