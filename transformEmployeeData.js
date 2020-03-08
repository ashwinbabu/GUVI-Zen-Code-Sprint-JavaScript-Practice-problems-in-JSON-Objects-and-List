/*
Parsing a list of lists and convert into a JSON object:
Write a function called 'transformGeekData' that transforms some set of data from one format to another.
Input (Array):
var array = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
Output:
[
{firstName: 'Vasanth', lastName: 'Raja', age: 24, role: 'JSWizard'},
{firstName: 'Sri', lastName: 'Devi', age: 28, role: 'Coder'}
]
*/

var arr= [ [['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];

function transformEmployeeData(arr) {
 var transformEmployeeList = [];
 var obj={};
for(i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){
        for(k=0;k<arr[i][j].length;k++){
            obj[arr[i][j][0]] = obj[arr[i][j][1]];
        }
    }
    transformEmployeeList.push([obj]);
}
 return transformEmployeeList;
}

console.log(transformEmployeeData(arr));