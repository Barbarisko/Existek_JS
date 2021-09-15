//Завдання 1
// Створити масив розмірністю N елементів, заповнити його довільними цілими числами.
// Вивести найбільш значення масиву,
// найменше значення, загальну суму елементів, середнє арифметичне всіх елементів,
// всі непарні значення

//випадково зробила для матриці - але вона складається з масивів, тому завдання релевантне

let matrix;

function create_matrix(width, height){
    matrix = new Array(height);

    for (var i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(width);
    }
    return matrix;
}

function getRandomInt(max = 20) {
    return Math.floor(Math.random() * max);
}

function init_matrix(call_matrix, m, n){
    let imatrix = call_matrix(m, n);

    for (let i = 0; i < imatrix.length; i++) {
        for (let j = 0; j < imatrix[i].length; j++) {
            imatrix[i][j] = getRandomInt();
        }
    }
    return imatrix;
}

function print_matrix(a){
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[i].length; j++)
        {
            document.write(a[i][j]+" ");
        }
        document.write("<br>");
    }
}

// m = parseInt(prompt());
// n = parseInt(prompt());
var a = init_matrix(create_matrix, 4, 4);
print_matrix(a);


function largestOfFour(arr) {
    return arr.map(n => Math.max(...n));
}
function smallestOfFour(arr) {
    return arr.map(n => Math.min(...n));
}
function sumOfMtrix(arr) {
    arr =  arr.map(a => a.reduce((prevvalue, currvalue) => prevvalue+currvalue));
    return arr.reduce((prev, cur)=>prev+cur);
}
function oddOfMtrix(arr) {
    arr =  arr.map(a => a.filter(el => el % 2 !== 0).join(", "));
    return arr;
}

document.write(`The largest matrix element -> ${largestOfFour(matrix)} -> ${Math.max(...largestOfFour(matrix))} <br/>`)
document.write(`The smallest matrix element -> ${smallestOfFour(matrix)} -> ${Math.min(...smallestOfFour(matrix))} <br/>`)
document.write(`The sum of matrix elements -> ${sumOfMtrix(matrix)} <br/>`)
document.write(`The average of matrix elements -> ${sumOfMtrix(matrix)/(matrix.reduce((count, row) => count + row.length, 0))} <br/>`)
document.write(`The odd matrix elements -> ${oddOfMtrix(matrix)} <br/>`)

