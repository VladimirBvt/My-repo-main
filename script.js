// Упражнение 2.2.2
function translate(color) {
	if (color == "red") {
		return "красный";
	} else if (color == "green") {
		return "зеленый";
	} else if (color == "blue") {
		return "синий";
	} else if (color == "yellow") {
		return "желтый";
	}
	return "Ошибка: Неизвестная команда";
}

//Упражнение 2.2.4
//Напиши функцию, которая принимает имя и время суток (утро, день, вечер, ночь), а возвращает приветствие с обращением по имени (Доброе утро, <имя>!, Добрый день, <имя>!, ...). Если в качестве времени суток указать что-то неизвестное, функция возвращает Добрый день, <имя>!.

//Например: hello("Маша", "вечер"); Возвращает: Добрый вечер, Маша!
//Например: hello("Ваня", "???"); Возвращает: Добрый день, Ваня!

function hello(name, time) {
	let call;
	if (time === "Доброе утро") {
		call = 'Доброе утро' + ", " + name + "!";
	} else if (time === "Добрый день") {
		call = 'Добрый день' + ", " + name + "!";
	} else if (time === "Добрый вечер") {
		call = "Добрый вечер" + ", " + name + "!";
	} else {
		call = "Добрый день" + ", " + name + "!";
	}
	return call;
}

//Упражнение 2.2.5

function descr(locality, type) {
	let depiction;
	if (type === "мегаполис") {
		depiction = locality + " - " + 'огромный мегаполис' + "!";
	} else if (type === "город") {
		depiction = locality + " - " + 'красивый город' + "!";
	} else if (locality === "село") {
		depiction = locality + " - " + 'тихое село' + "!";
	} else {
		depiction = locality + " - " + 'неизвестный населенный пункт' + "!";
	}
	return depiction;
}

//Упражнение 2.2.6

function money(summ, currency) {
	let converter;
	if (currency === 'доллар') {
		converter = '$' + summ;
	} else if (currency === 'евро') {
		converter = '€' + summ;
	} else if (currency === 'рубль') {
		converter = summ + ' ₽';
	} else {
		converter = summ;
	}
	return converter;
}

//Упражнение 2.3.1

function way(a) {
	let result;
	switch (a) {
		case 1:
			result = 'Продолжайте движение прямо';
			break;
		case 2:
			result = 'Поверните направо';
			break;
		case 3:
			result = 'Развернитесь';
			break;
		case 4:
			result = 'Поверните налево';
			break;
		default:
			return 'Ошибка';
	}
	return result;
}

//Упражнение 2.3.2

function talk(t) {
	let reply;
	switch (t) {
		case 'Привет!':
			reply = 'Привет!';
			break;
		case 'Как дела?':
			reply = 'Спасибо! У меня всё хорошо. А как у тебя дела?';
			break;
		case 'Как тебя зовут?':
			reply = 'Меня зовут JavaScript. А тебя?';
			break;
		default:
			return 'Прости, но я не понимаю.';
	}
	return reply;
}

//Упражнение 2.3.3

function mult(a, b) {
	let result;
	switch (a) {
		case '1':
			result = 1 * b;
			break;
		case '2':
			result = 2 * b;
			break;
		case '3':
			result = 3 * b;
			break;
		default:
			return 'Ошибка';
	}
	return result;
}

//Упражнение 2.4.1

function multip(a) {
	if (a > 0) {
		return a;
	} else if (a < 0) {
		return a * -1
	}
}

//Упражнение 2.4.2
//Версия 2 - рабочая!!
function math(a, b, c) {
	if (a > b && a > c && b > c) {						//abc
		return a + " " + b + " " + c;
	} else if (b > a && b > c && a > c) {				//bac
		return b + " " + a + " " + c;
	} else if (c > a && c > b && b > a) {				//cba
		return c + " " + b + " " + a;
	} else if (b > c && c > a && b > a) {				//bca
		return b + " " + c + " " + a;
	} else if (a > c && c > b && a > b) {				//acb
		return a + " " + c + " " + b;
	} else if (c > a && a > b && c > b) {				//cab
		return c + " " + a + " " + b;
	}
}

//Упражнение 2.4.3
function state(age, sex) {
	if (age < 12) {
		return 'ребенок';
	} else if (age > 12 && age < 20) {
		return 'подросток';
	} else if (age < 30 && sex === 'м') {
		return 'молодой человек';
	} else if (age < 30 && sex === 'ж') {
		return 'девушка';
	} else if (age < 60 && sex === 'м') {
		return 'мужчина';
	} else if (age < 60 && sex === 'ж') {
		return 'женщина';
	} else if (sex === 'ж') {
		return 'пожилая женщина';
	} else (sex === 'м'); {
		return 'пожилая женщина';
	}
}

//2.4.4. Напишите функцию, которая принимает название предмета (физика, английский, математика) и балл за экзамен.

//Если предмет физика:
//Если балл меньше 85, возвращает строку на физика не поступил.
//Если балл больше либо равен 85, возвращает строку на физика поступил.

//Если предмет английский:
//Если балл меньше 80, возвращает строку на филолога не поступил.
//Если балл больше либо равен 80, возвращает строку на филолога поступил.

//Если предмет математика:
//Если балл меньше 75, возвращает строку на экономиста не поступил.
//Если балл больше либо равен 75, возвращает строку на экономиста поступил.

//	Например: exams("английский", 90); Возвращает: на филолога поступил

function exams(science, score) {
	if (score < 85 && science === физика) {
		return 'На физика не поступил';
	} else if (score >= 85 && science === физика) {
		return 'На физика поступил';
	} else if (score < 80 && science === английский) {
		return 'На филолога не поступил'
	}
}


//Упражнение 3.1.1
//Напиши функцию, которая выводит подряд числа через пробел.
//На вход она должна принимать два параметра: с какого и по какое выводить числа.
//Если первый параметр больше второго — выводить ошибку.
//??? Не работает
function calc(a, b) {
	let number = 1;
	let result = "";
	while (a < b) {
		result = a + number + " ";
		number = number + 1;
	} if (a > b) {
		return result = 'Ошибка'
	}
	return result;
}

//Версия 2
//?? Работает не корректно
function calc(a, b) {
	let number = 0;
	let result = "";
	if (a > b) {
		return 'Ошибка'
	}
	while (a <= b) {
		result = result + a + " ";
		number = number + 1;
		a = a + number;
	} 
	return result;
}

//Версия 3
//В разработке
function calc(a, b) {
	let number = 0;
	let result = "";
	if (a > b) {
		return 'Ошибка'
	}
	while (a <= b) {
		a = a + number;
		result = result + a + " ";
		number = number + 1;
	}
	return result;
}

//Версия 4
//Рабочая. Убран полностью number и a=a+1 перемещено в конец цикла
function calc(a, b) {
	debugger
	let result = "";
	if (a > b) {
		return 'Ошибка'
	}
	while (a <= b) {
		result = result + a + " ";
		a = a + 1;
	}
	return result;
}
calc (1,3)