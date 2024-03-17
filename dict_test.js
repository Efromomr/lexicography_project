let question_number = 0;
let score = 0;
window.addEventListener("DOMContentLoaded", addListeners);
let disabled = false;

let true_dicts = ['Толковый словарь живого великорусского языка', 'Словарь модных слов. Языковая картина современности', 'Словарь синонимов русского языка',
'Словарь редких и забытых слов', 'Большой толковый словарь донского казачества', 'Словарь трудностей русского языка', 'Словарь ударений для дикторов радио и телевидения',
'Архангельский областной словарь', 'Русский мат. Толковый словарь', 'Словарь языка интернета', 'Обратный словарь русского языка',
'Словарь рифм русского языка', 'Большой словарь русского жаргона', 'Словарь фэнтези', 'Вопросы и восклицания в русской речи: Лингвострановедческий словарь',
'Словарь программиста', 'Словарь редкой лексики русской литератруры', 'Словарь поэзии О. Мандельштама', 'Частичный русско-французский словарь',
'Словарь аббревиатур молодёжного сленга ', 'Словарь языка поэтов-акмеистов', 'Словарь стихотворных размеров', 'Словарь обиходного языка Великого княжества Литовского XIII-XVIII вв. в двух частях',
'Словарь Галицко-Волынского княжества', 'Школьный словарь пунктуации', 'Словарь языка Приморья'];

let false_dicts = ['Толковый словарь мертвого русского языка', 'Словарь модных терминов', 'Словарь абсолютных синонимов русского языка',
'Словарь экзотических слов', 'Большой толковый словарь сибирского казачества', 'Словарь говололомок русского языка',
'Словарь ударений для комментаторов футбольных матчей', 'Кемеровский областной словарь', 'Толковый словарь нецензурной лексики', 'Словарь школьного сленга',
'Прямой словарь русского языка', 'Словарь возвышенной лексики', 'Малый словарь церковных слов', 'Словарь молодежного сленга', 'Жесты и мимика в русской речи: Лингвострановедческий словарь',
'Словарь терминов современного искусства на русском жестовом языке', 'Частотный словарь языка М. Ю. Лермонтова', 'Поэтический словарь Ф. И. Тютчева', 'Полный русско-французский словарь',
'Новый словарь сокращений', 'Словарь языка русской поэзии XX века', 'Словарь рифм ', 'Словарь обиходного русского языка Московской Руси XVI-XVII вв.',
'Словарь древнерусского языка (XI~XIV вв.)', 'Школьный орфографический словарь', 'Словарь живого поморского языка в его бытовом и этнографическом применении'];
let cor_answers = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a',
'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']

let results = ['Мы в восхищении! Вы настолько разбираетесь в словарях, что, похоже, вы и сами написали парочку.',
'Вы неплохо разбираетесь в теме! Наверняка время от времени вы заглядываете в словарь за незнакомым словом.',
'Да, кажется, последный раз словарь вы брали в руки в школе!', 'Вас очень легко запутать! Похоже, со словарями вы незнакомы, советуем почитать!']

var arr_idx = [];
while(arr_idx.length < 10){
    var r = Math.floor(Math.random() * 26);
    if(arr_idx.indexOf(r) === -1) arr_idx.push(r);
}

function getAnswer(ans) {
    if (disabled) {
        return;
    }
    disabled = true;

    if (ans === cor_answers[arr_idx[question_number]]) {
        score += 1;
        let el = document.getElementById('score_text');
        el.innerHTML = score.toString() + '/10';
    }
    question_number += 1;
    if (question_number < 10) {
	const element = document.getElementById('next_button');
	element.style.display = 'block';
    }
	//element.href = '/dict_page?type=' + true_dicts[question_number].split(' ').join('+');

    else
    {
        let res_text = document.getElementById('results_text');
        if (score > 8)
        {
            res_text.innerHTML = results[0];
        }
        else if (score > 5)
        {
            res_text.innerHTML = results[1];
        }
        else if (score > 2)
        {
            res_text.innerHTML = results[2];
        }
        else
        {
            res_text.innerHTML = results[3];
        }
    }
}

function initialLoad() {
       	element = document.getElementById('var_1');
    	element.innerHTML = true_dicts[arr_idx[question_number]];
    	element = document.getElementById('var_2');
    	element.innerHTML = false_dicts[arr_idx[question_number]];
}

function nextQuestion () {
        disabled = false;
    	let element = document.getElementById('next_button');
    	element.style.display = 'none';
    	element = document.getElementById('var_1');
    	element.innerHTML = true_dicts[arr_idx[question_number]];
    	element.disabled = false;
    	element = document.getElementById('var_2');
    	element.innerHTML = false_dicts[arr_idx[question_number]];

}

function addListeners(){
let var_1 = document.getElementById("var_1");
var_1.addEventListener('click', function () {
  getAnswer('a');
});
let var_2 = document.getElementById("var_2");
var_2.addEventListener('click', function () {
  getAnswer('b');
});
let button = document.getElementById("next_button");
button.addEventListener('click', nextQuestion);

initialLoad();
}