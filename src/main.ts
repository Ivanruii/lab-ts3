import "./style.css";

const $ = (element: string): HTMLElement | null => document.getElementById(element);

let counter = 0;

function update() {
    let counterText = counter.toString().padStart(3, '0');

    for (let i = 0; i < counterText.length; i++) {
        let digitElement = $("number-" + i);
        if (digitElement) {
            digitElement.textContent = counterText[i];
        }
    }
}

function add() {
    counter++;
    update();
}

function reduce() {
    if (counter > 0) {
        counter--;
        update();
    } else {
        alert("Counting in negative is not allowed!");
    }
}

function reset() {
    counter = 0;
    update();
}

function setValue() {
    let inputValue = parseInt(($("input-value") as HTMLInputElement).value);

    if (!isNaN(inputValue)) {
        if (inputValue < 100) {
            counter = inputValue;
            update();
        } else {
            alert("The value must be less than 100.");
        }
    }
}

const btnAdd = $("btn-add");
const btnReduce = $("btn-reduce");
const btnReset = $("btn-reset");
const btnSetValue = $("btn-set-value");

if (btnAdd) {
    btnAdd.addEventListener("click", add);
}
if (btnReduce) {
    btnReduce.addEventListener("click", reduce);
}
if (btnReset) {
    btnReset.addEventListener("click", reset);
}
if (btnSetValue) {
    btnSetValue.addEventListener("click", setValue);
}

update();
