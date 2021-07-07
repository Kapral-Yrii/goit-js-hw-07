const refs = {
    btnDecrement: document.querySelector(`[data-action="decrement"]`),
    btnIncrement: document.querySelector(`[data-action="increment"]`),
    spanValue: document.querySelector(`#value`)
}
const counterValue = refs.spanValue

refs.btnDecrement.addEventListener(`click`, () => {
    counterValue.textContent = counterValue.textContent - 1
    console.log(counterValue.textContent);
})

refs.btnIncrement.addEventListener(`click`, () => {
    counterValue.textContent = Number(counterValue.textContent) + 1
    console.log(counterValue.textContent);
})
