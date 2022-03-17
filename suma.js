function suma(a,b){
  return a + b 
}

function resta(a,b){
  return a - b
}

function multiplicacion(numero,veces){
  let arraySum = new Array(veces).fill(numero)
  return arraySum.reduce(suma,0)
  
}

function division(numerador,denominador){
  if(denominador == 0){
    console.error("No se puede dividor entre 0")
  }
  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
  let rango = range(0 , denominador, 1)
  return rango.reduce((acum, num)=>{
    return multiplicacion(num , denominador)<=numerador ? acum = acum + 1 : acum
  })
}

console.log(`La division es: ${division(10,5)}`)
console.log(`La multiplicacion es: ${multiplicacion(4,5)}`)
console.log(`La suma es: ${suma(5,10)}`)
console.log(`La resta es: ${resta(50,10)}`)


