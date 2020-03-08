/* 
Parsing an JSON object’s Keys:
Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
Example Input:
{name : ‘RajiniKanth’, age : 25, hasPets : true}
Example Output:
[‘name’, ‘age’, ‘hasPets’]
*/

let object = {name : 'RajiniKanth', age : 25, hasPets : true};
function printAllKeys(object){
    console.log(Object.keys(object));
}

printAllKeys(object);