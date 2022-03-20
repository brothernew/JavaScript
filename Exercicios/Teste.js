const chances = [100, 200, 401];

function tripleTheChances( chances ) {

    var resultado = [];

    for( var i = 0; i < chances.length; i++ ){
        resultado.push( chances[ i ] * 3 );
    }return resultado;

}
console.log(tripleTheChances(chances));