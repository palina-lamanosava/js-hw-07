// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
//  Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>


let elementCount = 0;
const boxForElements = document.querySelector('#boxes');
const numberInput = document.querySelector('#controls > input');
console.log(numberInput);

const createBtn = document.querySelector('[data-action="render"]');
console.log(createBtn);
const destroyBtn = document.querySelector('[data-action="destroy"]');
console.log(destroyBtn);5



numberInput.addEventListener('input', checkInput);
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function checkInput(event) {
    if (event.currentTarget.value > 100 || event.currentTarget.value < 0) {
        console.log('Введите число от 0 до 100');
        createBtn.disabled = true;
    } else {
        createBtn.disabled = false;
        return elementCount = Number(event.currentTarget.value);
    }
}


function createBoxes() {
        for (let i = 0; i < elementCount; i++) {
        const element = document.createElement('div');
        element.style.backgroundColor = randomRGB();     
        boxForElements.append(element);
        
        sizeBox();
    }   
}

function sizeBox() {
    const lastElement = boxForElements.lastChild;
    lastElement.style.width = '30px';
    lastElement.style.height = '30px';
     let size = Number.parseInt(lastElement.style.width);
    for (let index = 0; index < boxForElements.children.length; index++) {
        size += 10;
        lastElement.style.width = `${size}px`;
        lastElement.style.height = `${size}px`;
    }
}


function randomRGB() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
    return RGBColor;
}



function destroyBoxes() {
    let childToDelete = boxForElements.lastElementChild;
    while (childToDelete) {
        boxForElements.removeChild(childToDelete);
        childToDelete = boxForElements.lastElementChild;
    }
}