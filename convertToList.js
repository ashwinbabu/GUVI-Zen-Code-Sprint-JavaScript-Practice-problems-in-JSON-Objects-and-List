/*
Parsing an JSON object and convert it to a list:
Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
Input (Object):
var object = {name: “ISRO”, age: 35, role: “Scientist”};
Output:
[[“name”, “ISRO”], [“age”, 35], [“role”, “Scientist”]]
*/
var object = {name: 'ISRO', age: 35, role: 'Scientist'};
function convertToList(object){
   var arr = [];
   for (var key in object){
   arr.push([key, object[key]]);
}
return arr;
}
console.log(convertToList(object));
