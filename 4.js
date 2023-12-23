// 7. 

"use strict";
let a = 2.6, b = 5.1, y,  x = Number(prompt("Введите значение аргумента х:"));

switch (x) {
	case (1):
		y = a * Math.pow(Math.cos(x), 2) - b * Math.sin(Math.pow(x, 2));
		break;
	case (4):
		y = 6 * Math.log(x) + Math.pow(x, 3);
		break;
	case (5): 
		y = Math.sqrt(Math.pow(x, 2) + a * b);
		break;
	default:
		y = "Неподходящее значение аргумента";
}
alert("Результат: y = " + y);