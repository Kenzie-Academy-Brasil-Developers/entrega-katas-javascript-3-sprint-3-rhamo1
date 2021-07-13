const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


function showResults(n) {
    let div = document.createElement('div');
    div.textContent = n;
    resultado.appendChild(div);
}



function kata1(n) {
    showResults('kata1');

    for(let i=1; i<=25; i++){
     showResults(i);
        
    }

} kata1();


function kata2() {

    showResults('kata2');

    for(let i=25; i>=1; i--){
        showResults(i);
    }
} kata2();

function kata3() {

    showResults('kata3');

    for(let i=-1; i>=-25; i--){
        showResults(i);
    }
} kata3();

function kata4() {

    showResults('kata4');

    for(let i=-25; i<=-1; i++){
        showResults(i);
    }

} kata4();

function kata5() {

    showResults('kata5');

    for(let i=25; i>=-25; i--){

        if(i % 2 !== 0){
        showResults(i);
        }
    }

} kata5();

function kata6() {

    showResults('kata6');

    for(let i=3; i<=100; i++){

        if(i % 3 === 0){
        showResults(i);
        }
    }
    
} kata6();

function kata7() {

    showResults('kata7');

    for(let i=1; i<=100; i++){

        if(i % 7 === 0){
        showResults(i);
        }
    }

} kata7();

function kata8() {

    showResults('katas8');

    for(let i=100; i>=3; i--){

        if(i % 7 === 0 || i % 3 === 0){
        showResults(i);
        }
    }

} kata8();

function kata9() {
    
    showResults('katas9');

    for(let i=0; i<=100; i++){

        if(i % 2 !== 0 && i % 5 === 0){
            showResults(i);
        }
    }
    
}kata9();

function kata10() {

    showResults('kata10');

    showResults(sampleArray)

} kata10();

function kata11() {

    showResults('kata11');

    for(i = 0; i <= sampleArray.length; i++){

        if(sampleArray[i] % 2 === 0){
            showResults(sampleArray[i]);
        }
    }
} kata11();

function kata12() {

    showResults('kata12');

    for(i = 0; i <= sampleArray.length; i++){

        if(sampleArray[i] % 2 !== 0){
            showResults(sampleArray[i]);
        }
    }

} kata12();

function kata13() {

    showResults('kata13');

    for(i = 0; i <= sampleArray.length; i++){

        if(sampleArray[i] % 8 === 0){
            showResults(sampleArray[i]);
        }
    }
    // implemente o código do kata 13 aqui
} kata13();

function kata14() {

    showResults('kata14');

    for(i = 0; i < sampleArray.length; i++){

        
            showResults((sampleArray[i] ** 2));
        
    }

} kata14();

let sum = 0;

function kata15() {
    showResults('kata15');

    

    for(i = 0; i <= 20; i++){

        sum += i;
    }
    showResults(sum);

} kata15();

function kata16() {
    showResults('kata16');

    for(i = 0; i < sampleArray.length; i++ ){

        sum += sampleArray[i];
    }

    showResults(sum)

} kata16();

function kata17() {
    showResults('kata17');

    let minor = sampleArray[0];

    for(let i = 0; i <= sampleArray.length; i++){
        if(minor > sampleArray[i]){
            minor = sampleArray[i];
        }

        
    }

    showResults(minor);

} kata17();

function kata18() {
    showResults('kata18');

    let greater = sampleArray[0];

    for(let i = 0; i <= sampleArray.length; i++){
        if(greater < sampleArray[i]){
            greater = sampleArray[i];
        }

        
    }

    showResults(greater);

} kata18();

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
