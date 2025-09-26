
//promises
//resolve => ejecuta el llamado al promise cuando el mismo llamado es correcto
//reject => si el llamado es incorrecto
const aplicarDescuentos = new Promise((resolve, reject) => {
    setTimeout(() => {
        // setTimeout sirve para darle un tiempo de espera al usuario (ejemplo)
        let descuento = false;
        if (descuento) {
            resolve("Descuento aplicado");
        } else {
            reject(" No se pudo aplicar el descuento");
        }
    }, 1000)
})
console.log(aplicarDescuentos);

aplicarDescuentos.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log("Hubo un error en la consulta" + error);
})

//error de promesas en cadena
