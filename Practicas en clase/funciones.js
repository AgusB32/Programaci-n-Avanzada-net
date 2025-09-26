// function declaration

function saludar(nombre) {
    console.log ("Bienvenido, " + nombre + "!");
    }

        saludar("Agustin");

// function expression
const cliente = function (nombreCliente, edadCliente) {
    console.log("Mostrando datos del cliente " + nombreCliente + ", Edad: " + edadCliente);
}

cliente("Juan", 20);

function actividad (nombre = 'Walter White', nombreActividad = 'Profe de química') {
    console.log(`El cliente ${nombre} esta realizando la actividad: ${nombreActividad}`);
}

actividad("Agustin", "Estudiante");
actividad("Valentino", "Desarrollador web");
actividad(); //Usando los valores por defecto

