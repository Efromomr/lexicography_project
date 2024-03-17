let question_number = 0;
let a_score = 0;
let b_score = 0;
let c_score = 0;
let d_score = 0;
window.addEventListener("DOMContentLoaded", addListeners);
let disabled = false;

let as = ["А. Вторая половина XIX в.", 'А. Использовать устаревшие и исконно русские слова вместо заимствований', 'А. Кропотливость и усидчивость',
'А. буду переезжать из одной глухой деревни в другую и записывать любопытные слова, услышанные от местных жителей', 'А. работаю врачом', 'А. зелёный'];
let bs = ['Б. Середина XX в.', 'Б. Прерывать свой рассказ на рассуждения о происхождении слов', 'Б. Стремление к поиску причин и исторических предпосылок разных событий',
'Б. объеду всю Европу, читая лекции для коллег', 'Б. изучаю разные иностранные языки', 'Б. красный'];
let cs = ['В. Вторая половина XX в. ', 'В. Исправлять речевые ошибки собеседника', 'В. Перфекционизм, стремление к идеалу', 'В. отправлюсь в Италию на интересную стажировку', 'В. обучаю дикторов телевидения и радио грамотной речи',
'В. синий'];
let ds = ['Г. Начало XXI в.', 'Г. Использовать современные модные слова', 'Г. Честность и реализм', 'Г. останусь дома и буду составлять очередной словарь', 'Г. активно веду научную работу', 'Г. жёлтый'];

let questions = ['Выберите время, с которым вы себя ассоциируете больше всего', 'Выберите речевую привычку, которая вам ближе всего',
'Выберите характеристику, которая описывает вас точнее', 'Как выглядело бы путешествие вашей мечты?', 'Чем вы занимаетесь помимо составления словарей?',
'Какой цвет вам больше нравится?'];

let results = ['Поздравляем! Вы – Владимир Иванович Даль.', 'Поздравляем! Вы – Макс Фасмер.', 'Поздравляем! Вы – Дитмар Эльяшевич Розенталь.',
'Поздравляем! Вы – Татьяна Фёдоровна Ефремова.'];

function argMax(array) {
  return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
}

function getAnswer(ans) {
    if (disabled) {
        return;
    }
    disabled = true;

    switch (ans) {
		case 'a':
    a_score+=1;
    break;
		case 'b':
    b_score+=1;
    break;
		case 'c':
    c_score+=1;
    break;
		case 'd':
    d_score+=1;
	break;
}

    question_number += 1;
    if (question_number < 6) {
	const element = document.getElementById('next_button');
	element.style.display = 'block';
    }
	//element.href = '/dict_page?type=' + true_dicts[question_number].split(' ').join('+');

    else
    {
        let res_text = document.getElementById('results_text');
        idx = argMax([a_score, b_score, c_score, d_score]);
        res_text.innerHTML = results[idx];
    }
}

function initialLoad() {
       	element = document.getElementById('a');
    	element.innerHTML = as[question_number];
    	element = document.getElementById('b');
    	element.innerHTML = bs[question_number];
		element = document.getElementById('c');
    	element.innerHTML = cs[question_number];
		element = document.getElementById('d');
    	element.innerHTML = ds[question_number];
    	element = document.getElementById('question');
    	element.innerHTML = questions[question_number];
}

function nextQuestion () {
        disabled = false;
    	let element = document.getElementById('next_button');
    	element.style.display = 'none';
    	element = document.getElementById('a');
    	element.innerHTML = as[question_number];
		element = document.getElementById('b');
    	element.innerHTML = bs[question_number];
		element = document.getElementById('c');
    	element.innerHTML = cs[question_number];
		element = document.getElementById('d');
    	element.innerHTML = ds[question_number];
    	element = document.getElementById('question');
    	element.innerHTML = questions[question_number];


}

function addListeners(){
let var_1 = document.getElementById("a");
var_1.addEventListener('click', function () {
  getAnswer('a');
});
let var_2 = document.getElementById("b");
var_2.addEventListener('click', function () {
  getAnswer('b');
});
let var_3 = document.getElementById("c");
var_3.addEventListener('click', function () {
  getAnswer('c');
});
let var_4 = document.getElementById("d");
var_4.addEventListener('click', function () {
  getAnswer('d');
});
let button = document.getElementById("next_button");
button.addEventListener('click', nextQuestion);

initialLoad();
}