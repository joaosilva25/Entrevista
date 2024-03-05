1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);


let Indice=13;
let K=0;

function imprimir(SOMA) {
    while(K<Indice) {
        K=K+1;
    }

    return SOMA+K
}


imprimir(0);


2)

let fiboList=[0,1,1,2,3,5,8,13,21,34]
let fiboSumList=[]

function fiboCalc(num) {

    for(let i=0;i<fiboList.length-1;i++) {
        let fibo=fiboList[i] + fiboList[i+1]
        fiboSumList.push(fibo)
    }

    if(fiboSumList.includes(num)) {
        fiboList.push(num)
        console.log(fiboSumList)
        console.log(fiboList)
        return "Número pertence a sequência"
    }
    else {
        return "Número não pertence a sequência"
    }

}

fiboCalc(55)



3) Descubra a lógica e complete o próximo elemento:

Resposta:

a) 1,3,5,7,9
b)2,4,8,16,32,64,128
c)0,1,4,9,16,25,36,49
d)4,16,36,64,256
e)1,1,2,3,5,8,13
f)2,10,12,16,17,18,19,200

4)


5)