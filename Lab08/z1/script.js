const auta = [
    { rok: 2020, przebieg: 150000, cena_wyjsciowa: 40000, cena_koncowa: 35000 },
    { rok: 2018, przebieg: 220000, cena_wyjsciowa: 30000, cena_koncowa: 25000 },
    { rok: 2022, przebieg: 80000,  cena_wyjsciowa: 50000, cena_koncowa: 47000 }
  ];
  
  function pokazTabelke(auta) {
    const div = document.getElementById("tabela-samochodow");
    const tabela = document.createElement("table");
    tabela.border = "1";
    tabela.style.borderCollapse = "collapse";
  
    const naglowek = tabela.insertRow();
    ["Rok", "Przebieg (km)", "Cena wyjściowa (zł)", "Cena końcowa (zł)"].forEach(tekst => {
      const th = document.createElement("th");
      th.textContent = tekst;
      naglowek.appendChild(th);
    });
  
    auta.forEach(auto => {
      const wiersz = tabela.insertRow();
      wiersz.insertCell().textContent = auto.rok;
      wiersz.insertCell().textContent = auto.przebieg;
      wiersz.insertCell().textContent = auto.cena_wyjsciowa;
      wiersz.insertCell().textContent = auto.cena_koncowa;
    });
  
    div.appendChild(tabela);
  }
  
  pokazTabelke(auta);
  