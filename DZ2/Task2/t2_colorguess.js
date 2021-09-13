// Завдання 2
// За допомогою циклу while напишіть гру "Вгадайте колір за 5 спроб"
// Загаданий колір 'red'.
//     На кожній спробі потрібно відобразити номер спроби. По завершеню гри на сторінці має бути повідомлення
// 'Вітаємо ви вгадали із n спроби' або 'Ви не вгадали'

const req_colour = "red";

let result;

function main(){
    let counter = 0;

    while(counter<5){
        let colour = prompt(`Вгадайте колір за 5 спроб. Спроба ${counter+1}. Ваш варіант: `)

        if(colour === req_colour){
            result = `Вітаємо, ви вгадали із ${counter+1} спроби!`
            break;
        }
        counter+=1;
    }
    document.write(result);
}

main();