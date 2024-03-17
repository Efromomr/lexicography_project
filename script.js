// массив со всеми словарями
let all_dicts = ['Обратный словарь русского языка',
       'Толковый словарь русского языка Ефремовой',
       'Толковый словарь живого великорусского языка',
       'Толковый словарь паронимов русского языка',
       'Толковый словарь русского языка конца XX века: Языковые изменения',
       'Словарь модных слов. Языковая картина современности',
       'Словарь синонимов русского языка',
       'Словарь редких и забытых слов',
       'Большой толковый словарь донского казачества',
       'Словарь трудностей русского языка',
       'Школьный толковый словарь русского языка',
       'Школьный словарь литературоведческих терминов',
       'Школьный словарь образования слов русского языка',
       'Школьный орфографический словарь русского языка',
       'Школьный словарь синонимов и антонимов',
       'Школьный словарь иностранных слов',
       'Школьный словарь устаревших слов русского языка: по произведениям русских писателей XVIII-XX вв',
       'Школьный словарь антонимов русского языка',
       'Школьный орфоэпический словарь русского языка',
       'Школьный словарь трудностей русского языка',
       'Сербохорватско-русский словарь', 'Бурятско-русский словарь',
       'Большой корейско-русский словарь',
       'Современный испанско-русский. Русско-испанский\r словарь: свыше 120 000 слов и словосочетаний ',
       'Русско-Белорусский словарь / Руска-Беларускi слоўнiк',
       'Большой русско-польский словарь',
       'Новый большой русско-финский словарь',
       'Русско-башкирский словарь: В 2 т. ', 'Армянско-русский словарь',
       'Русско-армянский учебный словарь', 'Русско-Армянский словарь',
       'Большой русско-немецкий словарь', 'Англо-русский словарь',
       'Русско-сербский словарь', 'Полный русско-французскій словарь',
       'Русско-башкирский словарь',
       'Русско-башкирский, башкирско-русский словарь: для изучающих башкирский язык как государственный. ',
       'Русско-белорусский словарь',
       'Учебный чешско-русский и русско-чешский сло- варь: около 40 000 слов и выражений',
       'Русско-украинский, украинско-русский словарь',
       'Словарь ударений для работников радио и телевидения',
       'Большой орфоэпический словарь русского языка литературное произношение и ударение начала XXI века: норма и её варианты',
       'Орфоэпический словарь русского языка: Произношение, ударение, грамматические формы : Около 65 000 слов',
       'Орфоэпический словарь русского языка: Произношение. Ударение',
       'Русское литературное произношение и ударение: словарь-справочник',
       'Словарь ударений для дикторов радио и телевидения.',
       'Давайте говорить правильно! : трудности современного русского произношения и ударения : краткий словарь-справочник',
       'Русское словесное ударение: словарь : около 50 000 слов',
       'Словарь ударений русского языка: 82,500 словарных единиц',
       'Орфоэпический словарь современного русского\r языка',
       'Словарь областного архангельского наречия в его областном и этнографическом применении',
       'Архангельский областной словарь',
       'Словарь областного вологодского наречия: по рукописи П. А. Дилакторского',
       'Словарь живого поморского языка в его бытовом и этнографическом применении',
       'Словарь русских народных говоров',
       'Жесты и мимика в русской речи: Лингвострановедческий словарь',
       'Толковый словарь языка жестов',
       'Словарь терминов современного искусства на русском жестовом языке',
       'Словарь языка японских жестов', 'Русско-жестовый словарь',
       'Жесты и мимика в общении японцев',
       'Краткий словарь русского жестового языка',
       'Жестово-русский словарь', 'Словарь языка русских жестов',
       'Словарь русского жестового языка',
       'Большой словарь русского жаргона: 25000 слов, 7000 устойчивый сочетаний',
       'Новый словарь сокращений',
       'Русское сквернословие. Краткий, но выразительный словарь',
       'Толковый словарь русской разговорной речи',
       'Молодежный сленг: толковый словарь: около 20 000 слов и фразеологизмов. 2-е изд., испр. и доп.',
       'Русский мат. Толковый словарь', 'Словарь языка интернета. ru',
       'Словарь молодёжного сленга', 'Большой словарь мата',
       'Материалы для словаря древнерусского языка по письменным памятникам',
       'Этимологический словарь русского языка Макса Фасмера',
       'Словарь обиходного русского языка Московской Руси XVI-XVII вв.',
       'Словарь-справочник "Слова о полку Игореве"',
       'Словарь древнерусского языка (XI~XIV вв.)',
       'Словарь языка Пушкина', 'Поэтический словарь',
       'Словарь языка русской поэзии ХХ века',
       'Словарь поэтического языка Д. В. Давыдова',
       'Словарь рифм русского языка', 'Словарь рифм',
       'Частотный словарь языка М. Ю. Лермонтова',
       'Религиозная лексика в стихах русских поэтов Серебряного века',
       'Школьный поэтический словарь',
       'Поэтический словарь Ф. И. Тютчева'];
const shuffled = [...all_dicts].sort(() => 0.5 - Math.random());
let dict_arr = shuffled.slice(0, 9);
const dicts = [
  {
    text: dict_arr[1],
    color: "hsl(197 30% 43%)",
  },
  {
    text: dict_arr[2],
    color: "hsl(173 58% 39%)",
  },
  {
    text: dict_arr[3],
    color: "hsl(43 74% 66%)",
  },
  {
    text: dict_arr[4],
    color: "hsl(27 87% 67%)",
  },
  {
    text: dict_arr[5],
    color: "hsl(12 76% 61%)",
  },
  {
    text: dict_arr[6],
    color: "hsl(350 60% 52%)",
  },
  {
    text: dict_arr[7],
    color: "hsl(91 43% 54%)",
  },
  {
    text: dict_arr[0],
    color: "hsl(140 36% 74%)",
  }
];

const wheel = document.querySelector(".deal-wheel");
const spinner = wheel.querySelector(".spinner");
const trigger = wheel.querySelector(".btn-spin");
const ticker = wheel.querySelector(".ticker");


const dictSlice = 360 / dicts.length;
const dictOffset = Math.floor(180 / dicts.length);
const spinClass = "is-spinning";
const selectedClass = "selected";
const spinnerStyles = window.getComputedStyle(spinner);


let tickerAnim;
let rotation = 0;
let currentSlice = 0;
let dictNodes;

const createdictNodes = () => {
  dicts.forEach(({ text, color, reaction }, i) => {
    const rotation = ((dictSlice * i) * -1) - dictOffset;
    spinner.insertAdjacentHTML(
      "beforeend",
      `<li class="dict" data-reaction=${reaction} style="--rotate: ${rotation}deg">
        <span class="text">${text}</span>
      </li>`
    );
  });
};

const createConicGradient = () => {
  // устанавливаем нужное значение стиля у элемента spinner
  spinner.setAttribute(
    "style",
    `background: conic-gradient(
      from -90deg,
      ${dicts
        // получаем цвет текущего сектора
        .map(({ color }, i) => `${color} 0 ${(100 / dicts.length) * (dicts.length - i)}%`)
        .reverse()
      }
    );`
  );
};

const setupWheel = () => {
  createConicGradient();
  createdictNodes();
  dictNodes = wheel.querySelectorAll(".dict");
};

const spinertia = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// функция запуска вращения
const runTickerAnimation = () => {
  const values = spinnerStyles.transform.split("(")[1].split(")")[0].split(",");
  const a = values[0];
  const b = values[1];
  let rad = Math.atan2(b, a);

  if (rad < 0) rad += (2 * Math.PI);

  const angle = Math.round(rad * (180 / Math.PI));
  const slice = Math.floor(angle / dictSlice);

  if (currentSlice !== slice) {
    ticker.style.animation = "none";
    setTimeout(() => ticker.style.animation = null, 10);
    currentSlice = slice;
  }
  tickerAnim = requestAnimationFrame(runTickerAnimation);
};

const selectDict = () => {
  const selected = Math.floor(rotation / dictSlice);
  dictNodes[selected].classList.add(selectedClass);
};

trigger.addEventListener("click", () => {
  trigger.disabled = true;
  rotation = Math.floor(Math.random() * 360 + spinertia(2000, 5000));
  dictNodes.forEach((dict) => dict.classList.remove(selectedClass));
  wheel.classList.add(spinClass);
  spinner.style.setProperty("--rotate", rotation);
  ticker.style.animation = "none";
  runTickerAnimation();
});

function loadPage() {
    const element = document.getElementById('dict_link');
    element.innerHTML = document.getElementsByClassName("dict selected")[0].firstElementChild.innerHTML;
    element.href = "/dict_page?type=" + document.getElementsByClassName("dict selected")[0].firstElementChild.innerHTML.split(' ').join('+');

}
spinner.addEventListener("transitionend", () => {
  cancelAnimationFrame(tickerAnim);
  rotation %= 360;
  selectDict();
  wheel.classList.remove(spinClass);
  spinner.style.setProperty("--rotate", rotation);
  trigger.disabled = false;
  loadPage();
});

// подготавливаем всё к первому запуску
setupWheel();
function initialLoad() {
    const element = document.getElementById('dict_link');
    let rand_item = dict_arr[Math.floor(Math.random()*dict_arr.length)];
    element.innerHTML = rand_item;
    element.href = "/dict_page?type=" + rand_item.split(' ').join('+');
}

window.addEventListener("DOMContentLoaded", initialLoad);