/*
Parsing a list of lists and convert into a JSON object:
Write a function 'fromListToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
Input (Array):
var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
Output:
var object = {
make : 'Ford'
model : 'Mustang',
year : 1964
}
*/

var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr) {
    var newObject = {};
    for(i=0;i<arr.length;i++){
        newObject[arr[i][0]] = arr[i][1];
    }
    return newObject;
   }
console.log(fromListToObject(array));