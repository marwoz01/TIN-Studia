const studenci = [
    {
      imie: "Jan",
      nazwisko: "Kowalski",
      oceny: [
        { przedmiot: "WPR", wartosc: 5 },
        { przedmiot: "TIN", wartosc: 3 },
        { przedmiot: "POJ", wartosc: 4 }
      ]
    },
    {
      imie: "Anna",
      nazwisko: "Nowak",
      oceny: [
        { przedmiot: "WPR", wartosc: 3 },
        { przedmiot: "TIN", wartosc: 5 },
        { przedmiot: "POJ", wartosc: 4 }
      ]
    },
    {
      imie: "Jan",
      nazwisko: "Trzeci",
      oceny: [
        { przedmiot: "WPR", wartosc: 5 },
        { przedmiot: "TIN", wartosc: 5 },
        { przedmiot: "POJ", wartosc: 2 }
      ]
    }
  ];
  
  function obliczSrednia(oceny) {
    const suma = oceny.reduce((a, o) => a + o.wartosc, 0);
    return Math.round(suma / oceny.length);
  }
  
  function pokazStudentow(studenci) {
    const container = document.getElementById("lista-studentow");
  
    studenci.forEach((student, index) => {

      const header = document.createElement("div");
      header.className = "student-header";
      header.textContent = `${student.imie} ${student.nazwisko}`;
  
      const content = document.createElement("div");
      content.className = "student-content";
  
      const lista = document.createElement("ul");
      student.oceny.forEach(ocena => {
        const li = document.createElement("li");
        li.textContent = `${ocena.przedmiot}: ${ocena.wartosc}`;
        lista.appendChild(li);
      });
  
      const srednia = document.createElement("p");
      srednia.className = "srednia";
      srednia.textContent = `Średnia: ${obliczSrednia(student.oceny)}`;
  
      content.appendChild(lista);
      content.appendChild(srednia);
  
      header.addEventListener("click", () => {
        const all = document.querySelectorAll(".student-content");
        all.forEach(c => c.style.display = "none");
        content.style.display = "block";
      });
  
      container.appendChild(header);
      container.appendChild(content);
  
      if (index === 0) content.style.display = "block";
    });
  }
  
  pokazStudentow(studenci);
  