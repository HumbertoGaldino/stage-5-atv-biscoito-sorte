const screenOne = document.querySelector(".screenOne");
const screenTwo = document.querySelector(".screenTwo");

const btnFortune = document.querySelector("#btnFortune");
const btnReset = document.querySelector("#btnReset");

btnFortune.addEventListener('click', handleFortuneClick)
btnReset.addEventListener('click', handleResetClick)


function toggle() {
    screenOne.classList.toggle("hide");
    screenTwo.classList.toggle("hide");
}

function handleFortuneClick(event) {
    event.preventDefault();

    toggle()
}

function handleResetClick(event) {
    event.preventDefault();

    toggle()
}

