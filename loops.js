
function forLoop(array) {
  for (i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  } return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  } return 'done';
}

<<<<<<< HEAD
function doWhileLoop(num) {
  var i = 0

function incrementVariable() {
  i = i + 1;
  return i;
}
  
  do { 
    console.log("I run once regardless.");
  } while ( incrementVariable() < num);
  
}


=======


function incrementVariable() {
  let i = 0
  i = i + 1;
  return i;
}

function doWhileLoop(num) {
  do { 
    console.log("I run once regardless.");
  } while (incrementVariable() < num);
}
>>>>>>> f082113a9872d61b0f39b9ce4032c6bff18183fc
