function trojkatPascala(n) {
    for (let i = 0; i < n; i++) {
        let wiersz = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                wiersz[j] = 1;
            } else {
                wiersz[j] = trojkat[i - 1][j - 1] + trojkat[i - 1][j];
            }
        }
        trojkat.push(wiersz)
    }

    for (let i = 0; i < n; i++) {
        let spacje = ` `.repeat(n - i);
        console.log(spacje + trojkat[i].join(' '));
    }
}

let trojkat = []

trojkatPascala(6)