function celsiusParaFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

let conversão = celsiusParaFahrenheit(36.5)

console.log(`Convertendo a temperatura informada em °C para °F temos: ${conversão} °F.`);