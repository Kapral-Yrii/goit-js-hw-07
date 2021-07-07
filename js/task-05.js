const refs = {
    userName: document.querySelector(`#name-output`),
    input: document.querySelector(`#name-input`)
}

refs.input.addEventListener(`input`, (event) => {
    refs.userName.textContent = 'незнакомец'
    if (event.currentTarget.value !== '') {
        refs.userName.textContent = event.currentTarget.value
    }
})
