var array1 = [1, 2, 3, [5, 6], ['a', 'b', 'c']];

var flatArray = [];

array1.forEach(function(element, index) {
  console.log("Current flat array: " + flatArray);
  console.log("Current element: " + element);
  console.log("Current index: " + index);
  flatArray = flatArray.concat(element);
});

console.log("Final array: " + flatArray);
