console.log("")
console.log("Zadanie 4:")

let arr = [10, 11, 13, 12, 14, 15];

function mojafunkcja(a, b) {
    return (a % 3) - (b % 3);
}

let sorted = arr.sort(mojafunkcja);

console.log(sorted);
