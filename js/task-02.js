const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//  после чего вставит все li за одну операцию в список ul.ingredients.
//  Для создания DOM - узлов используй document.createElement().

const container = document.querySelector('#ingredients');

const makeListOfIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const liEl = document.createElement('li');
    liEl.textContent = ingredient;

    return liEl;
  });
};

const elements = makeListOfIngredients(ingredients);

// const makeListOfIngredients = ingredients.map(ingredient => {
//     const liEl = document.createElement('li');
//     liEl.textContent = ingredient;

//     return liEl;
//   });


// const elements =  makeListOfIngredients;

container.append(...elements);