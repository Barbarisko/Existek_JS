//Завдання 3
// Написати програму розрахунку об"єму циліндра - V і площі поверхні -S циліндра,
// де висота та радіус циліндра задаються користувачем.

var calculateArea = function (rad, height){
    return height*2*Math.PI*rad;
}
var calculateVolume = function (rad, height){
    return height*Math.PI*(rad**2);
}
function reload() {
    reload = location.reload();
}
const createBtn = function () {
    var btn = document.createElement("BUTTON");         // Create a <button> element
    btn.innerHTML = "Click to reload";                           // Insert text
    btn.addEventListener("click", reload, false);   // reload page
    document.body.appendChild(btn);
}

alert("Creating a cylinder!");

let stopsign = true;

while(stopsign){
    const height = parseInt(prompt("Input height ", "0"));
    const radius = parseInt(prompt("Input height ", "0"));

    if(height >0 && radius >0 ){
        stopsign = false;

        document.write(`Initial data is : \n height: <b>${height}</b> \n radius: <b>${radius}</b> <br/>`);
        document.write(`The area of cylinder is <b>${Math.round(calculateArea(radius, height))}</b> <br/>`);
        document.write(`The volume of cylinder is <b>${Math.round(calculateVolume(radius, height))}</b> <br/>`);

        createBtn();
    }
    else confirm("You sure input valid params?");
}



