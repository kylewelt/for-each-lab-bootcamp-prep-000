//prints all elements in the array
function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  })
}

//iterates the array elements
function iterate(callback) {
  var noodles = ['spaghetti,', 'fettucine', 'macaroni', 'rotini'];

  noodles.forEach(callback);

  return noodles;
}

//calls a function on every element of an array
function doToArray(array, callback) {
  array.forEach(callback);
}