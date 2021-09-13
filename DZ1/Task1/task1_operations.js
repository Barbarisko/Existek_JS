//Завдання 1
// Створити три змінних x = 6, y = 15, z = 4;
// Виконати  та відобразити на сторінці результати операцій
// x += y-x++*z;
// z = --x-y*5;
// y ?= x+5%z;
// z = x++ +y*5;
// x=y-x++ *z;

let x = 6;
let y = 15;
let z = 4;

x += y-x++*z;
document.write("x += y-x++*z = " + x + "<br/><hr/>");

z = --x-y*5;
document.write("z = --x-y*5 = " + z + "<br/><hr/>");

//y ?= x+5%z - missclick?
var str = '${y}';
var patt1 = /is(?= x+5%z)/;
var result = str.match(patt1);
document.write("var. 1 : y ?= x+5%z = " + result + "<br/><hr/>");

//y /= x+5%z - missclick?
y /= x+5%z
document.write("var. 2 : y /= x+5%z = " + result + "<br/><hr/>");

//y = x+5%z
y = x+5%z
document.write("var. 3: y = x+5%z = " + y + "<br/><hr/>");

z = x++ +y*5;
document.write("z = x++ +y*5 = " + z + "<br/><hr/>");

x = y-x++ *z;
document.write("x=y-x++ *z = " + x + "<br/><hr/>");