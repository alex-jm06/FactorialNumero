function factorial(numero) {
	if (!Number.isInteger(numero) || numero < 0) {
		throw new Error("El numero debe ser un entero no negativo");
	}

	if (numero === 0) {
		return 1;
	}

	return numero * factorial(numero - 1);
}

console.log(factorial(5)); // 120


console.log(factorial(60));
console.log(factorial(56));
