
// Завдання 2
// Визначити середньє арифметичне трьох цілих чисель і вивести на екранж

// function calcAvg_dynamicParams() {
let i1 = parseInt(prompt("Input first value ", "0"));
let i2 = parseInt(prompt("Input second value ", "0"));
let i3 = parseInt(prompt("Input third value ", "0"));

const sum = i1+i2+i3
var str = `${i1} + ${i2} +${i3} = `; //wasnt aware of ``, used only ''

document.write( str + sum + "<hr/>");

let result = sum/3;
document.write("Average value is " + result + "<hr/>");
//}

// function calcAvg_scriptedParams() {
//     var script_tag = document.getElementById('calculate_avg')
//     var i1 = script_tag.getAttribute("v1");
//     var i2 = script_tag.getAttribute("v2");
//     var i3 = script_tag.getAttribute("v3");
//
//     let result = (i1+i2+i3)/3;
//     document.write(result+ "<hr/>");
// }



