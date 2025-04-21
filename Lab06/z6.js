console.log("")
console.log("Zadanie 6:")

let osoby = [
    ['Jan', 'Kowalski', 21],
    ['Anna', 'Nowak', 19],
    ['Jan', 'Trzeci', 27]
];

let posortowane = osoby.map(osoba => osoba.join(' |'));
console.log(posortowane);