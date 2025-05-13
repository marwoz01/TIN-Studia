function calculate() {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (operation === '/' && secondNumber === 0) {
        result = 'Błąd: Dzielenie przez zero';
    } else {
        result = eval(`${firstNumber} ${operation} ${secondNumber}`);
    }

    document.getElementById('result').textContent = result;
}