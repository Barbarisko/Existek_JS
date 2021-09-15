//Завдання 2
// Напишіть функцію, яка буде приймати число та визначати:
//  - число позитивне чи негативне
//  - чи воно просте (лише два натуральних дільники) чи складене
//  - чи ділиться на 2, 3, 5, 6, 9 без залишку


function isPositive(x){
    return Math.sign(x)===1;
}

// document.write("is positive?" + isPositive((-2)))

function isPrime(x) {
    const m = Math;
    return (x%2!==0
            && x%3!==0
            && x%5!==0
            && x%7!==0
            && x%9!==0
            && x%11!==0
            && x%6!==0
            && x!==1
            && m.sign(x)*m.round(x)===x) //prime numbers are not negative and are integral
            ||x===11||x===7||x===5||x===3||x===2;
} // less time consuming then cycles

let dividers = [2, 3, 5, 6, 9];

function isDivided(a, dividers){
    let result=`divided by `;

    for (let d in dividers) {
        if (parseInt(a) % d === 0)
            result += `${d} `;
    }

    if (result === ``)
        result = "nothing"

    return result;
}
// document.write(`is divided by ${dividers}? ` + isDivided(18, dividers));

var a = parseInt(prompt());
document.write(`<b>${a}</b> is positive? ${isPositive(a)},<br/> prime? -> ${isPrime(a)}, <br/> and divided by 2/3/5/6/9 ? -> ${isDivided(a, dividers)}`);
