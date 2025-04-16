function choinkaNoca(wysokosc) {
    for (let i = 0; i < wysokosc - 1; i++) {
        let zewnetrzne = '*'.repeat(wysokosc - i - 1)
        let srodek = ' '.repeat(i * 2 + 1)
        console.log(zewnetrzne + srodek + zewnetrzne);
    }
    console.log('*'.repeat(wysokosc * 2 - 1));
}

choinkaNoca(6);