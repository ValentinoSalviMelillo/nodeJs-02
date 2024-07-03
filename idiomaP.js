function agregarP(palabra) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    let resultado = '';
    for (let i = 0; i < palabra.length; i++) {
        resultado += palabra[i];
        if (vocales.includes(palabra[i])) {
            resultado += 'p' + palabra[i];
        }
    }
    return resultado;
}
const fraseEntrada = "hola soy joaquin palacios";
const fraseSalida = agregarP(fraseEntrada);

console.log("Entrada:", fraseEntrada);
console.log("Salida:", fraseSalida);