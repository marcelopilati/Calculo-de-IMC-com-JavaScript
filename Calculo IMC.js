import input from 'readline-sync';

console.log("Calculo de IMC!! \n");

let peso = input.question("Insira o seu peso (em Kg): ");
let altura = input.question("Insira a sua altura (em m) ");

let imc = peso / (altura * altura);

console.log("Seu IMC e: \n " + imc.toFixed(1));

if(imc > 0 && imc < 17){
    console.log("Muito abaixo do peso! \n");
}
else if(imc > 17 && imc < 18.5){
    console.log("Abaixo do peso! \n");
}
else if(imc > 18.5 && imc < 25){
    console.log("Peso normal! \n");
}
else if(imc > 25 && imc < 30){
    console .log("Acima do peso! \n");
}
else if(imc > 30 && imc < 35){
    console.log("Obesidade Grau 1! \n");
}
else if(imc > 35 && imc < 41){
    console.log("Obesidade Grau 2! \n");
}
else{
    console.log("Obesidade Grau 3! \n");
}