console.log("")
console.log("Zadanie 5:")

let tab = [
    ['Jan', 'Kowalski', 21],
    ['Anna', 'Nowak', 19],
    ['Jan', 'Trzeci', 27]
];

function sortowanie(osoba) {
    return osoba[2] > 20;
}

let x = tab.filter(sortowanie);

console.log(x);
