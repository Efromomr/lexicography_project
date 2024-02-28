// массив со всеми словарями
let all_dicts = ["Словарь русских народных говоров", "Обратный словарь русского языка", "Новый словарь русских названий жителей",
"Эсперанто-русский словарь", "Словарь фантастики", "Русский мат. Толковый словарь", 
"Словарь областного архангельского наречия", "Словарь языка интернета. ru", "Словарь Макса Фасмера"];
const shuffled = [...all_dicts].sort(() => 0.5 - Math.random());
let dict_arr = shuffled.slice(0, 9);
const prizes = [
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


const prizeSlice = 360 / prizes.length;
const prizeOffset = Math.floor(180 / prizes.length);
const spinClass = "is-spinning";
const selectedClass = "selected";
const spinnerStyles = window.getComputedStyle(spinner);


let tickerAnim;
let rotation = 0;
let currentSlice = 0;
let prizeNodes;

const createPrizeNodes = () => {
  prizes.forEach(({ text, color, reaction }, i) => {
    const rotation = ((prizeSlice * i) * -1) - prizeOffset;
    spinner.insertAdjacentHTML(
      "beforeend",
      `<li class="prize" data-reaction=${reaction} style="--rotate: ${rotation}deg">
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
      ${prizes
        // получаем цвет текущего сектора
        .map(({ color }, i) => `${color} 0 ${(100 / prizes.length) * (prizes.length - i)}%`)
        .reverse()
      }
    );`
  );
};

const setupWheel = () => {
  createConicGradient();
  createPrizeNodes();
  prizeNodes = wheel.querySelectorAll(".prize");
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
  const slice = Math.floor(angle / prizeSlice);

  if (currentSlice !== slice) {
    ticker.style.animation = "none";
    setTimeout(() => ticker.style.animation = null, 10);
    currentSlice = slice;
  }
  tickerAnim = requestAnimationFrame(runTickerAnimation);
};

const selectPrize = () => {
  const selected = Math.floor(rotation / prizeSlice);
  prizeNodes[selected].classList.add(selectedClass);
};

trigger.addEventListener("click", () => {
  trigger.disabled = true;
  rotation = Math.floor(Math.random() * 360 + spinertia(2000, 5000));
  prizeNodes.forEach((prize) => prize.classList.remove(selectedClass));
  wheel.classList.add(spinClass);
  spinner.style.setProperty("--rotate", rotation);
  ticker.style.animation = "none";
  runTickerAnimation();
});
// функция для переадресации после кручения колеса (пока что ведёт на заглушку)
function loadPage() {
window.location.href = './dict_page.html';
}
spinner.addEventListener("transitionend", () => {
  cancelAnimationFrame(tickerAnim);
  rotation %= 360;
  selectPrize();
  wheel.classList.remove(spinClass);
  spinner.style.setProperty("--rotate", rotation);
  //trigger.disabled = false;
  setTimeout(loadPage, 2000);
});

// подготавливаем всё к первому запуску
setupWheel();