// Завдання 4
// Створити карту мандрівника із запитома напрямку prompt('Куди прямуєш - r/l/t/b');
// Де
// r - на право
// l- на ліво
// t - вниз
// b - вверх
// Закінчення маршруту cancel або не введений можливий варіант.
//     Мо мірі вводу все шлях відображувати на сторінці, по закінченні гри -  "Маршрут складено"



function switch_on_direction(ans){
    var ans_toprint;
    switch (ans) {
        case "r":
            ans_toprint= "на право <br/>";
            break;
        case "l":
            ans_toprint = "на ліво<br/>";
            break;
        case "t":
            ans_toprint = "вверх <br/>";
            break;
        case "b":
            ans_toprint = "вниз<br/>";
        default:
            ans_toprint ="no way<br/>";
            break;
    }
    return ans_toprint;
}

let dir = "r/l/t/b";

function main(switchfunk){
    let stopsign = true;

    while(stopsign){
        let ans = prompt(`Куди прямуєш - ${dir}, stop if you wish`);

        if(!dir.includes(ans.split("/")) || ans==="stop") {
            stopsign = false;
            document.write("Маршрут складено");
            break;
        }
        document.write(switchfunk(ans));
    }
}

main(switch_on_direction);