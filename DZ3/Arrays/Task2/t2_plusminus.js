//Завдання 2
// Створити двомірний масив елементів розмірністю 5х5 і заповнити його довільними цілими числами.
// По головній діагоналі всі числа зі знаом (-) замінити на 0, а числа зі знаком (+) на число 1.
// Вивети матриці на екран


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

function replace_odd_even(matrix){
    let j = 0;
    for (let i = 0; i < matrix.length; i++) {
        if (Math.sign(matrix[i][j]) === 1)
            matrix[i][j] = "<b>1</b>";
        else if (Math.sign(matrix[i][j]) === -1)
            matrix[i][j] = "<b>0</b>";
        else
            matrix[i][j] = "<b>?</b>";
        j += 1;
    }
    return matrix;
}

matrix = init_matrix(create_matrix, 5, 5);
print_matrix(matrix);

document.write("<hr/>")
print_matrix(replace_odd_even(matrix))