'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function multiplicaPorDois(numeros) {
    /*
     * Complete a função multiplicando todos os elementos
     * do array `numeros` por dois e retornando um array
     * com esses resultados
     */

    var array = [];

    for(var i = 0; i < numeros.length; i++){
        array.push(numeros[i]*2);

    }return array;

}
// fim do seu código

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const listaCount = parseInt(readLine().trim(), 10);

    let lista = [];

    for (let i = 0; i < listaCount; i++) {
        const listaItem = readLine();
        lista.push(listaItem);
    }

    const result = multiplicaPorDois(lista);

    ws.write(result + '\n');

    ws.end();
}