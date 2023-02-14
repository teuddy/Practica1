//generar numeros alatoreos
function generadoralatoreo(maximo) {
  return Math.floor(Math.random() * maximo);
}

for (let i = 1; i <= 10; ++i) {
  console.log(generadoralatoreo(6));
}
