function poleProstokata(a, b) {
    return a * b;
}

function poleTrapezu(a, b, h) {
    return ((a+ b) * h / 2);
}

function poleRownolegloboka(a, h) {
    return a * h;
}

function poleTrojkata(a, h) {
    return (a * h) / 2;
}

function poleFigury(figura, ...args) {
    switch(figura) {
        case 'prostokat':
            return poleProstokata(...args)
        case 'trapez':
            return poleTrapezu(...args);
        case 'rownoleglobok':
            return poleRownolegloboka(...args);
        case 'trojkat':
            return poleTrojkata(...args);
        default:
            return 'Nieznana figura';
    }
}

console.log('Prostokąt 5x10:', poleFigury('prostokat', 5, 10));
console.log('Trapez 3, 7, h=4:', poleFigury('trapez', 3, 7, 4));
console.log('Równoległobok 6, h=5:', poleFigury('rownoleglobok', 6, 5));
console.log('Trójkąt 4, h=3:', poleFigury('trojkat', 4, 3));