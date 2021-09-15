//Завдання 5
// Використовуючи цикли намалюйте у браузері за допомогою пробілів  (&nbsp) та зірочок (*):
//     - прямокутник
//     - прямокутний трикутник
//     - рівносторонній трикутник
//     - ромб


let matrix;

function create_matrix(width, height){
    matrix = new Array(height);

    for (var i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(width);
    }
    return matrix;
}

function init_rectange(call_matrix, m, n){
    let imatrix = call_matrix(m, n);

     for (let i = 0; i < imatrix.length; i++) {
         if(i===0 || i ===imatrix.length-1) {
             imatrix[i].fill("*");
             continue
         }

         for (let j = 0; j < imatrix[i].length; j++) {
             if (j === 0 || j === (imatrix[i].length - 1)) {
                 imatrix[i][j] = "*";
                 continue
             }
             imatrix[i][j] = `&nbsp`; //too small in my browser, but okay
             console.log(imatrix[i])
         }
     }
    return imatrix;
}

function init_right_triangle(call_matrix, m, n){
    let imatrix = call_matrix(m, n);

    let hipotenuze_counter = 0;

    for (let i = 0; i < imatrix.length; i++) {
        if(i ===imatrix.length-1) {
            imatrix[i].fill("*");
            continue
        }

        for (let j = 0; j < imatrix[i].length; j++) {
            if (j === 0) {
                imatrix[i][j] = "*";
                continue
            }
            imatrix[i][j] = `&nbsp`;
        }

        imatrix[i][hipotenuze_counter] = `*`;
        hipotenuze_counter+=1;
    }
    return imatrix;
}

function init_isosceles_triangle(call_matrix, w, h){
    if (w%2 ===0)
        w+=1;

    let imatrix = call_matrix(w, h);

    let k = (2*h)/w ;

     imatrix[imatrix.length-1].fill("*");

    for (let i = 0; i < imatrix.length - 1; i++) {

        for (let j = 0; j < imatrix[i].length; j++) {
            imatrix[i][j] = `_`;

            let coord = Math.abs(j*k-h);

            if(Math.abs(coord-i)<=0.5){
                imatrix[i][j] = "*";
            }
        }


    }
    return imatrix;
}

function init_romb(call_matrix, w, h){
    if (w%2 ===0)
        w+=1;

    let imatrix = call_matrix(w, h);

    let k = (2*h)/w ;

    for (let i = 0; i < imatrix.length; i++) {
        for (let j = 0; j < imatrix[i].length; j++) {
            imatrix[i][j] = `_`;

            let coord = Math.abs(j*k-h);

            if(Math.abs(coord-i)<=0.5){
                imatrix[i][j] = "*";
            }
        }
    }

    //creating 2x size matrix to translate reversed matrix
    let res_matrix = call_matrix(w, 2*h);

    for (let i = 0; i < res_matrix.length/2; i++) {
        for (let j = 0; j < res_matrix[i].length; j++) {
            res_matrix[i][j] = imatrix[i][j];
        }
    }

    for (let i = 0; i < imatrix.length; i++) {
        for (let j = 0; j < res_matrix[i].length; j++) {
            res_matrix[2*h-i-1][j] = imatrix[i][j];
        }
    }
    return res_matrix;
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

//you can use user input or hardcode values
//to create a figure, uncomment function calls 1 in time

// m = parseInt(prompt());
// n = parseInt(prompt());

// var a = init_rectange(create_matrix, m, n);
// var a = init_right_triangle(create_matrix, m, n);

//works more visual with big numbers
// var a = init_isosceles_triangle(create_matrix, 40, 20);
var a = init_romb(create_matrix, 30, 25);

print_matrix(a);

