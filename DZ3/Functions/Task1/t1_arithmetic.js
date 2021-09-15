//Завдання 1
// Створити 4 функції для арифметичних дій:
// add - додавання
// sub - віднімання
// mul - множення
// div - ділення
// Кожна функція має приймати два параметри і виводити на екран результат обрахування
// Функція ділення повинна робити перевірку ділення на нуль.
// Користувач вводить значення та вибрати саму операцію

function add(a, b) {
    return (parseInt(a)+parseInt(b));
}

function sub(a, b) {
    return (parseInt(a)-parseInt(b));
}

function mul(a, b) {
    return (parseInt(a)*parseInt(b));
}

function div(a, b){
    if(b===0){
        throw new Error('Invalid dividend ' + b);
    }
    return (parseInt(a)/parseInt(b));
}

var aa = prompt();
var bb = prompt();

let  plus = `${aa} + ${bb} = ${add(aa, bb)}`;
let minus = `${aa} - ${bb} = ${sub(aa, bb)}`;
let mult = `${aa} * ${bb} = ${mul(aa, bb)}`;
let divi = `${aa} / ${bb} = ${div(aa, bb)}`;

document.write(plus + "<br/>" + minus +"<br/>" +mult+"<br/> "+divi);
