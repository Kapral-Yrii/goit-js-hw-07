const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const listIngredientsEl = document.querySelector(`#ingredients`)
const makeListIngredients = element => {
    const arrIngredients = []
    const ingredient = element.forEach(el => {
        const ingredientEl = document.createElement(`li`)
        ingredientEl.textContent = el
        return arrIngredients.push(ingredientEl)
    });
    return arrIngredients
}

listIngredientsEl.append(...makeListIngredients(ingredients))
console.log(listIngredientsEl);
