'use struct';

const text = document.getElementById('text');
const span = document.getElementById('text-span');

const logger = function (event) {
    span.textContent = event.target.value;
};

text.addEventListener('input', logger);
text.addEventListener('focus', logger);
text.addEventListener('blur', logger);
text.addEventListener('change', logger);

const btn = document.getElementById('btn');
const changeColorValue = function () {
    document.getElementById('square').style.backgroundColor = String(span.textContent);
    document.getElementById('circle').style.width = String(rangeSpan.textContent) + "%";
    document.getElementById('circle').style.height = String(rangeSpan.textContent) + "%";
};
btn.onclick = changeColorValue;


const eBtn = document.getElementById('e_btn');
// 1вариант
// const noneColor = function () {
//     document.getElementById('e_btn').style.display = "none";
// };
// eBtn.onclick = noneColor;

// 2 вариант, более короткий
eBtn.addEventListener('click', function () {
    document.getElementById('e_btn').style.display = "none";
});



// не совсем понял на какое событие, должен меняться размер круга. 
// 1 нажатие кнопки Или 2 отпускание клавиши мыши. Сделал 1 вариант
const range = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');

const loggerRange = function (event) {
    console.dir(event.type);
    rangeSpan.textContent = event.target.value;
};
range.addEventListener('input', loggerRange);
range.addEventListener('change', loggerRange);


























