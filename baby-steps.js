let resultado = 0;

process.argv.splice(2, 3).forEach(val =>{

    resultado = resultado + Number(val);
});

console.log(Number(resultado));