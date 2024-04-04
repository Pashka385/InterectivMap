const GetRoad = document.querySelectorAll(".get");
const StrText = document.querySelectorAll(".answer__li");
const NameCom = document.querySelector(".name_text");
const box = document.querySelector(".name");
const NumberGroup = document.querySelector(".group");

function getName(message) {
    let input = prompt(message);
    if (input !== null) { 
        return input; 
    } else {
        return 'Название команды';
    }
}

function getNumberGroup(message) {
    let input = prompt(message); 
    if (input !== null) { 
        return input; 
    } else {
        return 'Номер группы'; 
    }
}

NameCom.textContent = getName('Введите название команды');
NumberGroup.textContent = getNumberGroup('Введите номер группы');

box.addEventListener('click', () => {
    NameCom.textContent = getName('Введите название команды');
});

NumberGroup.addEventListener('click', () => {
    NumberGroup.textContent = getNumberGroup('Введите номер группы');
});


GetRoad.forEach((event) => {
    event.addEventListener('click', () => {
        if (event.checked) {
            TextDecor(event);
        } else {
            TextUndecor(event);
        }
    });
});

function TextDecor(checkbox) {
    const parentLi = checkbox.parentElement;
    parentLi.classList.add("active");
}

function TextUndecor(checkbox) {
    const parentLi = checkbox.parentElement;
    parentLi.classList.remove("active");
}
