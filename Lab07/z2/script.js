class Ocena {
    constructor(przedmiot, wartosc) {
        this.przedmiot = przedmiot;
        this.wartosc = wartosc;
    }
}

class Student {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this._oceny = [];
        this.srednia = 0;
    }

    hello() {
        return `Witaj ${this.imie} ${this.nazwisko}, Twoja średnia ocen to: ${this.srednia}.`;
    }

    set oceny(x) {
        if (x instanceof Ocena) {
            this._oceny.push(x);
            this.przeliczSrednia();
        }
    }

    get oceny() {
        return this._oceny.map(ocena => `Przedmiot: ${ocena.przedmiot} - ocena ${ocena.wartosc}`).join('. ');
    }

    przeliczSrednia() {
        if (this._oceny.length > 0) {
            const suma = this._oceny.reduce((acc, ocena) => acc + ocena.wartosc, 0);
            this.srednia = (suma / this._oceny.length).toFixed(2);
        } else {
            this.srednia = 0;
        }
    }
}

let s = new Student('Jan', 'Kowalski');

console.log(s.hello());

s.oceny = new Ocena('WPR', 4);
s.oceny = new Ocena('TIN', 3);
s.oceny = new Ocena('POJ', 2);

console.log(s.hello());
console.log(s.oceny);
