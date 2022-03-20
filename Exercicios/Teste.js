//=============================================================================

function retornaNomeCompleto() {

    var nomeCompleto = 'Thiago Pedrozo';
    return nomeCompleto;

}console.log("Seu nome é: "+retornaNomeCompleto());

//=============================================================================

function retornaMinhaIdade() {

    let minhaIdade = 40;
    return minhaIdade;

}console.log("Sua idade é: "+retornaMinhaIdade()+" anos.");

//=============================================================================

function retornaMinhaNacionalidade() {

    const NACIONALIDADE = 'Brasileira';
    return NACIONALIDADE;

}console.log("Sua nacionalidade é: "+retornaMinhaNacionalidade());

//=============================================================================

function returnMyExercise() {

    var meuTamanho = 1.86;
    const PI = 3.14;
    var corDaMinhaCamisa = "Azul";
    var queroEstudarNaTrybe = true;
    var computadorLigado = false;    

    let resultObject = {
        integer: meuTamanho,
        float: PI,
        shirt: corDaMinhaCamisa,
        trueBoolean: queroEstudarNaTrybe,
        falseBoolean: computadorLigado
    }

    return resultObject;
}console.log(returnMyExercise());