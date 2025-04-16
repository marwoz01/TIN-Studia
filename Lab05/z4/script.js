function fibonacci(n) {
    let a = 0, b = 1;

    console.log(`Ciąg Fibonacciego (${n} elementów):`);
    for (let i = 0; i < n; i++) {
        console.log(a);
        let next = a + b;
        a = b;
        b = next;
    }
}

fibonacci(10)