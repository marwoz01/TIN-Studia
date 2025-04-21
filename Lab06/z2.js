console.log("")
console.log("Zadanie 2:")

function cenzura(zdanie, slowo) {
    const reg = new RegExp(slowo, "gi")
    return zdanie.replace(reg, "*")
}

const wynik = cenzura("Ala ma kota i psa", "kot")
console.log(wynik)