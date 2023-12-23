// 7. 
"use strict";
let a = 2.6, b = 5.1, x = Number(prompt("Дана кусочная-заданная ф-ия, введите значение аргумента х:"));

if (x <= 1) {
	let y = a * Math.pow(Math.cos(x), 2) - b * Math.sin(Math.pow(x, 2));
	alert("Результат: y = " + y);
}	else if ((x > 1) && (x <=4)) {
	let y = 6 * Math.log(x) + Math.pow(x, 3);
	alert("Результат: y = " + y);
}	else if (x > 4) {
	let y = Math.sqrt(Math.pow(x,2) + a * b);
	alert("Результат: y = " + y);
}	else {
	alert("Неподходящее значение аргумента");
}