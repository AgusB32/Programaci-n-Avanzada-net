//metodos en array

const personas1 = [
    { nombre: "Agustin", edad: 20, aprendiendo: 'javascipt' },
    { nombre: "Valentino", edad: 22, aprendiendo: 'java' },
    { nombre: "Walter", edad: 50, aprendiendo: 'python' },
    { nombre: "Marcos", edad: 30, aprendiendo: 'c#' },
    { nombre: "Luciano", edad: 28, aprendiendo: 'php' },
    { nombre: "Macri", edad: 25, aprendiendo: 'javascript' },
    { nombre: "Ana", edad: 21, aprendiendo: 'ruby' },
    { nombre: "Pedro", edad: 40, aprendiendo: 'c++' }
]

const personas2 = [
    { nombre: "Joaco", edad: 20, aprendiendo: 'javascipt' },
    { nombre: "fede", edad: 22, aprendiendo: 'java' },
    { nombre: "seba", edad: 50, aprendiendo: 'python' },
    { nombre: "Cristian", edad: 30, aprendiendo: 'c#' },
    { nombre: "nano", edad: 28, aprendiendo: 'php' },
    { nombre: "lencina", edad: 25, aprendiendo: 'javascript' },
    { nombre: "pato", edad: 21, aprendiendo: 'ruby' },
    { nombre: "franco", edad: 40, aprendiendo: 'c++' }
]

console.log(personas1);
console.log(personas2);

//funcion de filtrar mayores de 28
//const mayores = personas.filter(persona => persona.edad <= 28);
//console.log(mayores);

//const ana = personas.find(persona => persona.nombre === "Ana");
//console.log(ana);

const resultado = personas1.concat(personas2).filter(persona => persona.edad > 20 && persona.aprendiendo === 'javascript');
console.log(resultado);

