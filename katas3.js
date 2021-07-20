const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


function showResults(nome, arrContagem) {


    let novoKata = document.getElementById('conteudo') // Pega id

    let elemento = document.createElement('div'); // Cria div para resultados
    let paragrafo = document.createElement('p'); // Cria p para resultados
    let resultado = document.createTextNode(arrContagem) // Insere a contagem no elemento
    let subTitulo = document.createElement('h3'); // Dá nome de acordo com o kata
    let texto = document.createTextNode(nome); // Insere nome

    subTitulo.appendChild(texto); // Insere nome do kata no h3 criado
    elemento.appendChild(subTitulo); // Insere h3 na div
    paragrafo.appendChild(resultado); // Insere resultados no p
    elemento.appendChild(paragrafo); // Insere p na div

    novoKata.appendChild(elemento) // Insere todos acima na página
}

// Resolução

function kata1() {

    let nome = 'Kata 1'
    let arrContagem = []


    for (let i = 1; i <= 25; i++) {
        arrContagem.push(' ' + (i));

    }

    showResults(nome, arrContagem)
    return arrContagem

}
kata1();



function kata2() {

    let nome = 'Kata 2'
    let arrContagem = []

    for (let i = 25; i >= 1; i--) {
        arrContagem.push(' ' + (i));
    }

    showResults(nome, arrContagem)
    return arrContagem

}
kata2();



function kata3() {

    let nome = 'Kata 3'
    let arrContagem = []

    for (let i = -1; i >= -25; i--) {
        arrContagem.push(' ' + (i));
    }

    showResults(nome, arrContagem)
    return arrContagem

}
kata3();



function kata4() {

    let nome = 'Kata 4'
    let arrContagem = []

    for (let i = -25; i <= -1; i++) {
        arrContagem.push(' ' + (i));
    }

    showResults(nome, arrContagem)
    return arrContagem

}
kata4();



function kata5() {

    let nome = 'Kata 5'
    let arrContagem = []

    for (let i = 25; i >= -25; i--) {

        if (i % 2 !== 0) {
            arrContagem.push(' ' + (i));

        }
    }

    showResults(nome, arrContagem)
    return arrContagem

}
kata5();



function kata6() {

    let nome = 'Kata 6'
    let arrContagem = []

    for (let i = 3; i <= 100; i++) {

        if (i % 3 === 0) {
            arrContagem.push(' ' + (i));

        }
    }

    showResults(nome, arrContagem)
    return arrContagem

}
kata6();



function kata7() {

    let nome = 'Kata 7'
    let arrContagem = []

    for (let i = 1; i <= 100; i++) {

        if (i % 7 === 0) {
            arrContagem.push(' ' + (i));

        }
    }

}
kata7();



function kata8() {

    let nome = 'Kata 8'
    let arrContagem = []

    for (let i = 100; i >= 3; i--) {

        if (i % 7 === 0 || i % 3 === 0) {
            arrContagem.push(' ' + (i));

        }
    }

    showResults(nome, arrContagem)
    return arrContagem

}
kata8();



function kata9() {

    let nome = 'Kata 9'
    let arrContagem = []

    for (let i = 0; i <= 100; i++) {

        if (i % 2 !== 0 && i % 5 === 0) {
            arrContagem.push(' ' + (i));

        }
    }

    showResults(nome, arrContagem)
    return arrContagem

}
kata9();



function kata10() {

    let nome = 'Kata 10'

    let arrContagem = sampleArray

    showResults(nome, arrContagem)
    return arrContagem

}
kata10();



function kata11() {

    let nome = 'Kata 11'
    let arrContagem = []

    for (i = 0; i <= sampleArray.length; i++) {

        if (sampleArray[i] % 2 === 0) {
            arrContagem.push(sampleArray[i])
        }
    }

    showResults(nome, arrContagem)
    return arrContagem

}
kata11();



function kata12() {

    let nome = 'Kata 12'
    let arrContagem = [];

    for (i = 0; i < sampleArray.length; i++) {

        if (sampleArray[i] % 2 !== 0) {
            arrContagem.push(' ' + (sampleArray[i]));
        }
    }

    showResults(nome, arrContagem)
    return arrContagem

}
kata12();



function kata13() {

    let nome = 'Kata 13'
    let arrContagem = [];

    for (i = 0; i <= sampleArray.length; i++) {

        if (sampleArray[i] % 8 === 0) {
            arrContagem.push(' ' + (sampleArray[i]));
        }
    }

    showResults(nome, arrContagem)
    return arrContagem
}
kata13();



function kata14() {

    let nome = 'Kata 14'
    let arrContagem = [];

    for (i = 0; i < sampleArray.length; i++) {


        arrContagem.push(' ' + ((sampleArray[i] ** 2)));

    }

    showResults(nome, arrContagem)
    return arrContagem

}
kata14();



let sum = 0;

function kata15() {

    let nome = 'Kata 15'
    let arrContagem = [];

    for (i = 0; i <= 20; i++) {

        sum += i;

    }
    arrContagem.push(sum);

    showResults(nome, arrContagem)
    return arrContagem

}
kata15();



function kata16() {

    let nome = 'Kata 16'
    let arrContagem = [];

    for (i = 0; i < sampleArray.length; i++) {

        sum += sampleArray[i];
    }
    arrContagem.push(sum)

    showResults(nome, arrContagem)
    return arrContagem

}
kata16();



function kata17() {


    let nome = 'Kata 17'
    let arrContagem = [];

    let minor = sampleArray[0];

    for (let i = 0; i <= sampleArray.length; i++) {
        if (minor > sampleArray[i]) {
            minor = sampleArray[i];
        }


    }

    arrContagem.push(minor);

    showResults(nome, arrContagem)
    return arrContagem

}
kata17();



function kata18() {

    let nome = 'Kata 18'
    let arrContagem = [];

    let greater = sampleArray[0];

    for (let i = 0; i <= sampleArray.length; i++) {
        if (greater < sampleArray[i]) {
            greater = sampleArray[i];
        }


    }

    arrContagem.push(greater);

    showResults(nome, arrContagem)
    return arrContagem

}
kata18();