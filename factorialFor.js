function factorial(numero) {
	if (!Number.isInteger(numero) || numero < 0) {
		throw new Error("El numero debe ser un entero no negativo");
	}

	let resultado = 1;

	for (let contador = 2; contador <= numero; contador++) {
		resultado *= contador;
	}

	return resultado;
}

console.log(factorial(5)); // 120
console.log(factorial(10));
console.log(factorial(20));
console.log(factorial(30));
console.log(factorial(70));