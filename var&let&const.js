//var is function scoped
//let is braces scoped

function abcd() {
  //   for (var i = 0; i <= 3; i++) {
  //     console.log(i);
  //   }
  //   console.log(i);

  // Difference

  for (let i = 0; i <= 3; i++) {
    console.log(i);
  }
  console.log(i);
}

abcd();

//var adds itself to the window object
//let and const doesn't add

//browser context api contains three parts -->
//1. window
//2. stack
//3. heap
