// /* Задание на урок:

// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами*/

// 'use strict';

// // Код возьмите из предыдущего домашнего задания

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');

// } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('Произошла ошибка');
// }

// console.log(personalMovieDB);

'use strict'

let num = 20;

function showFirstMessage(text) {
    console.log('text');
    num = 10;
}
showFirstMessage('Hello world!');
console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(3, 4));
// console.log(calc(5, 6));
// console.log(calc(7, 8));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
    console.log('hello');
};

logger();

const calc = (a, b) => a + b;

// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
//     console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

const usdCurr = 28;
const discount = 0.9

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}
const res = convert(500, usdCurr);
promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('Done');
}

test();

function sayHello(name) {
    return `Привет, ${name}`;
}

sayHello('Антон')


function getMathResult(base, count) {
    if (typeof (count) !== 'number' || count <= 0)
        return base;

    let res = '';

    for (let i = 1; i <= count; i++) {
        if (i === count) {
            res += `${base * i}`
        } else {
            res += `${base * i}---`;
        }
    }
    return res;
}

console.log(getMathResult(3, 5));


const str = 'test';
// const arr = [1, 2, 4];

console.log(str.length);
console.log(str.toUpperCase());

let fruit = 'Some fruit';

console.log(fruit.indexOf('fruit'));


const logg = 'Hello world';

console.log(logg.slice(6, 11));
console.log(logg.slice(6,));


console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5)); <- с какой позиции и сколько символов

const num = 12.2
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));