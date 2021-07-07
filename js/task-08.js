const qqq = document.querySelector(`[data-action="render"]`)

function getRandomColor() {
    const hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);
}
