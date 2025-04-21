console.log("")
console.log("Zadanie 3:")

let zakazane = "kot";
let tablica = ['kotlet', 'kotka', 'koty', 'pies'];

function cenzuraSlowa(slowo) {
    const reg = new RegExp(zakazane, "gi");
    return slowo.replace(reg, "*");
}

let zdanie = tablica.map(cenzuraSlowa);

console.log(wynik);