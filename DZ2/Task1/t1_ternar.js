// Завдання 1
// Переписати умову з використанням лише тернарних операторів
//Результат вивести на екран, a i b - запитати у юзера
let result;
function given(a, b){
    if (a + b < 4)
        result = 'Мало';
    else if (a + b > 100)
        result = 'Багато';
    else
        result = 'В самий раз';
}

function rewritten(a, b){
    let condition1 = (a + b) < 4;
    let condition2 = (a + b) > 100;
    result = condition1 ? "Мало" : condition2 ? "Багато" : "В самий раз";
}

const a = parseInt(prompt("Input a", "0"));
const b = parseInt(prompt("Input b", "0"));
given(a, b);
document.write(`given(): result ${result}<br/><hr/>`);

rewritten(a, b);
document.write(`rewritten(): result ${result}<br/><hr/>`);

