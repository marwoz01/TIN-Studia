function tabliczka(n) {
    for (let i = 1; i <= n; i++) {
        let wiersz = '';
        for (let j = 1; j <= n; j++) {
            wiersz += (i * j) + '\t'
        }
        console.log(wiersz)
    }
}

tabliczka(3);