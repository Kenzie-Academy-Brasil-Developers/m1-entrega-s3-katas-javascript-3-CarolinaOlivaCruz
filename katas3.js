const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


function kata1() {

    let listNum = [];

    for (let i = 1; i <= 25; i++) {

        listNum.push(i)
    }
    return listNum;

}
console.log(kata1());


//

function kata2() {

    let listNum = [];

    for (let i = 25; i >= 1; i--) {
        listNum.push(i);
    }
    return listNum;

} console.log(kata2())


//

function positivoForNegativo(num) {

    let multiplicacao = num - (num * 2);

    return multiplicacao;
}



//

function kata3() {

    let listNum = [];

    for (let i = 1; i <= 25; i++) {
        let negativo = positivoForNegativo(i);
        listNum.push(negativo);
    }
    return listNum;
}
console.log(kata3());




//

function kata4() {
    let listNum = [];
    for (let i = 25; i >= 1; i--) {
        let negativo = positivoForNegativo(i)
        listNum.push(negativo)
    }
    return listNum

} console.log(kata4())




//

function kata5() {
    let listNum = [];
    let listaImpar = [];

    for (let i = 25; i >= 1; i--) {
        let negativo = positivoForNegativo(i)
        listNum.push(negativo)
    }

    for (let i = 1; i <= 25; i++) {

        listNum.push(i)
    }

    if (listNum % 2 === 1) {
        listaImpar.push(listNum)
    }
    return listaImpar;

}
console.log(kata5())




//

function kata6() {

    let listaDivisivel3 = [];

    for (let i = 0; i <= 100; i++) {
        let numAtual = i;
        if (numAtual % 3 === 0) {
            listaDivisivel3.push(numAtual);
        }
    }
    return listaDivisivel3
}
console.log(kata6());




//

function kata7() {

    let listaDivisivel7 = [];

    for (let i = 0; i <= 100; i++) {
        let numAtual = i;
        if (numAtual % 7 === 0) {
            listaDivisivel7.push(numAtual);
        }
    }
    return listaDivisivel7;
}
console.log(kata7());




//

function kata8() {
    let divisiveis3E7 = [];

    for (let i = 100; i > 1; i--) {
        let numAtual = i;
        if (numAtual % 3 === 0) {
            divisiveis3E7.push(numAtual);
        }
    }

    for (let i = 100; i > 1; i--) {
        let numAtual = i;
        if (numAtual % 7 === 0) {
            divisiveis3E7.push(numAtual);
        }
    }

    return divisiveis3E7;
}
console.log(kata8());



//

let divisivel5 = [];

function listaDivisiveis5() {

    for (let i = 1; i <= 100; i++) {
        let numAtual = i;
        if (numAtual % 5 === 0) {
            divisivel5.push(numAtual);
        }
    }
    return divisivel5;
}
console.log(listaDivisiveis5());


function kata9(lista) {

    let divisivel5Impar = [];

    for (let i = 0; i < lista.length; i++) {

        let numNovo = lista[i];

        if (numNovo % 2 !== 0) {
            divisivel5Impar.push(numNovo);
        }
    }
    return divisivel5Impar;
}
console.log(kata9(divisivel5));




function kata10(lista) {
    return sampleArray;
}
console.log(kata10(sampleArray));






function kata11(lista) {
    let numPares = [];

    for (i = 0; i < lista.length; i++) {
        let listaAtual = lista[i];

        if (listaAtual % 2 === 0) {
            numPares.push(listaAtual);
        }
    }
    return numPares;
}
console.log(kata11(sampleArray));






function kata12(lista) {
    let numPares = [];

    for (i = 0; i < lista.length; i++) {
        let listaAtual = lista[i];

        if (listaAtual % 2 !== 0) {
            numPares.push(listaAtual);
        }
    }
    return numPares;
}
console.log(kata12(sampleArray));








function kata13(lista) {

    let numPares = [];

    for (i = 0; i < lista.length; i++) {
        let listaAtual = lista[i];

        if (listaAtual % 8 === 0) {
            numPares.push(listaAtual);
        }
    }
    return numPares;
}
console.log(kata13(sampleArray));





function kata14() {
    // implemente o código do kata 14 aqui
}




function kata15(numeroLista) {

    contador = 0;

    for (i = 1; i <= numeroLista; i++) {

        contador += i;

    }
    return contador;
}
console.log(kata15(20));




function kata16(lista) {

    contador = 0;

    for (i = 0; i < lista.length; i++) {

        contador += lista[i];

    }
    return contador;


}
console.log(kata16(sampleArray));






function kata17(lista) {

    let verificaMenor = lista[0];

    for (i = 0; i < lista.length; i++) {

        if (lista[i] < verificaMenor) {
    
            verificaMenor = lista[i];
        }
    }

    return verificaMenor;
}
console.log(kata17(sampleArray));






function kata18(lista) {
    
    let verificaMaior = lista[0];
    

    for(i = 0; i < lista.length; i++){

        if(lista[i] > verificaMaior){

            verificaMaior = lista[i];
        } 
    }
    return verificaMaior;

}
console.log(kata18(sampleArray));



/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
