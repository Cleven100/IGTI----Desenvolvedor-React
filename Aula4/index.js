if(true) {
    var v = "Aula"
}

if(true) {
    let x = "Aula"
}

console.log(v);



const PI = 3.141595;

console.log(PI);


const Aluno = {
    nome: "Bruno",
    sobrenome: "Teixeira"
}

console.log(Aluno.nome);


Aluno.nome = "Carlos";

console.log(Aluno.nome);



var some = function(a, b) {
    return a + b;
}

function soma2(a,b) {
    return a + b;
}


let soma3 = (a, b) =>{
    return a + b
}

let soma4 = (a,b) => a + b;


let log = () => {console.log("Erro"); }


const Aluno2 = {
    nome: "ana",
    getAluno: function () {return console.log(this)}
}

Aluno2.getAluno();

const Aluno3 = {
    nome: "Anan",
    getAluno: () => {return console.log(Aluno3.nome)}
}

Aluno3.getAluno();


