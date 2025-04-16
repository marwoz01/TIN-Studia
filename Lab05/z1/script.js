function pitagoras(a, b, c) {
    let max = Math.max(a, b, c);
    let sumaKwadratow = a*a + b*b + c*c - max*max;
  
    if (sumaKwadratow === max * max) {
      console.log("To jest trójka pitagorejska");
    } else {
      console.log("To nie jest trójka pitagorejska");
    }
  }
  
pitagoras(3, 4, 5);
pitagoras(2, 3, 4);
  