const refs = {
    btnCreateCollection: document.querySelector(`[data-action="render"]`),
    btnDeleteCollection: document.querySelector(`[data-action="destroy"]`),
    input: document.querySelector('input'),
    divCollection: document.querySelector('#boxes')
}
function getRandomColor() {
    const hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);
}
const elements = []
refs.input.addEventListener('change', (event) => {
    for (let i = 0; i < event.currentTarget.value; i++) {
        const size = (i * 10) + 30
        const boxEl = document.createElement('div')
        boxEl.style.backgroundColor = getRandomColor()
        boxEl.style.width = `${size}px`
        boxEl.style.height = `${size}px`
        elements.push(boxEl)
    }
})


refs.btnCreateCollection.addEventListener('click', () => {
    refs.divCollection.append(...elements)
})


refs.btnDeleteCollection.addEventListener('click', () => {
    refs.divCollection.innerHTML = ''
    elements.splice(0, elements.length)
})
