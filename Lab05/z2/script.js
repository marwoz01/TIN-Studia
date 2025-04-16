function wypiszPodzielne(a, b, c) {
    console.log(`Liczby z przedziału ${a}-${b} podzielne przez ${c}:`);
    for (let i = a; i <= b; i++) {
        if (i % c === 0) {
            console.log(i);
        }
    }
}

wypiszPodzielne(1, 20, 4);