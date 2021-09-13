// Завдання 3
// Порахувати факторіал числа загаданий на екран (while-do)

function factorial_recursive(n, result){
    result = result || 1;
    if(!n){
        return result;
    }else{
        return factorial_recursive(n-1, result*n);
    }
}

function factorial_while(n){
    let result = 1;
    while(n){
        result *= n--;
    }
    return result;
}

let n = parseInt(prompt("Number for factorial", "0"));

document.write(`factorial_recursive(): !${n}= ${factorial_recursive(n, 1)} <br/>`);
document.write(`factorial_while(): !${n}=${factorial_while(n)}` );

