// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4


const category = document.querySelector('#categories');
console.log(category);

function countItems() {

    console.log(`В списке ${category.children.length} категории`);
}

countItems();

function countElements() {
    for (let index = 0; index < category.children.length; index++) {
        const h2 = category.children[index].firstElementChild;
        console.log(`Категория: ${h2.textContent}`);
        const ul = h2.nextElementSibling;
        console.log(`Количество элементов: ${ul.children.length}`);
    }
}

countElements();

