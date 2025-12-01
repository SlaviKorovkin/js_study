'use strict';

// let num = 50;

// // while (num < 55) {
// //     console.log(num);
// //     num++;
// // }

// // do {
// //     console.log(num);
// //     num++;
// // }
// // while (num < 55);

// // for (let i = 1; i < 8; i++) {
// //     console.log(num);
// //     num++
// // }

// // for (let i = 1; i < 10; i++) {
// //     if (i === 6) {
// //         // break;
// //         continue;
// //     }
// //     console.log(i);
// // }

// // for (let i = 0; i < 3; i++) {
// //     console.log(i);
// //     for (let j = 0; j < 3; j++) {
// //         console.log(j);
// //     }
// // }

// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {

//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage('Hello world!');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
    console.log('Hello');
};