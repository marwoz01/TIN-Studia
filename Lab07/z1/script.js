class Auto {
    constructor(rok, przebieg, cena_wyjsciowa) {
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_wyjsciowa;
    }

    powiekszCene() {
        this.cena_wyjsciowa += 1000;
    }

    obliczWiek() {
        const currentYear = new Date().getFullYear();
        const wiek = currentYear - this.rok;
        this.cena_koncowa -= 1000 * wiek;
    }

    obliczZuzycie() {
        const iloscSetek = Math.floor(this.przebieg / 100000);
        this.cena_koncowa -= 10000 * iloscSetek;
    }

    aktualizujDane(nowyRok, nowyPrzebieg) {
        this.rok = nowyRok;
        this.przebieg = nowyPrzebieg;
        this.obliczWiek();
        this.obliczZuzycie();
    }
}

function dopiszDoTablicy(auto, tablica) {
    if (auto.cena_koncowa > 10000) {
        tablica.push(auto);
    }
}

function zwiekszRok(tablica) {
    tablica.forEach(auto => auto.rok += 1);
}

let tablica = [];

let a1 = new Auto(2024, 100000, 9000);
let a2 = new Auto(2024, 100000, 20000);

dopiszDoTablicy(a1, tablica);
dopiszDoTablicy(a2, tablica);

zwiekszRok(tablica);

console.log(tablica);
