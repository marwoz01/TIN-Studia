function addDiv() {
    const container = document.getElementById('container');
    const newDiv = document.createElement('div');
    newDiv.className = 'dynamic-div';
    container.appendChild(newDiv);
}

function removeDiv() {
    const container = document.getElementById('container');
    if (container.firstElementChild) {
        container.removeChild(container.firstElementChild);
    }
}

function changeColor() {
    const divs = document.querySelectorAll('.dynamic-div');
    if (divs[2]) {
        divs[2].style.backgroundColor = 'lightblue';
    }
}

function changeText() {
    const divs = document.querySelectorAll('.dynamic-div');
    divs.forEach(div => {
        div.textContent = 'nowy tekst';
    });
}