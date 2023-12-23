// 7. Даны три целых числа A, B, C. Проверить истинность высказывния: "Число В находится между А и С"

"use strict";

alert("Введите три числа");
let A = Number(prompt("Введите число А:")),
	B = Number(prompt("Введите число В:")),
	C = Number(prompt("Введите число С"));

if (B >= A && B <= C) { alert("True"); 
} else { alert("False"); };
	