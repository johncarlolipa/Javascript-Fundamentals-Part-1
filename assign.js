let heightMark = 1.69;
let weightMark = 78;
let heightJohn = 1.95;
let weightJohn = 92;

let markBMI = weightMark / heightMark ** 2;
let johnBMI = weightJohn / heightJohn ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);