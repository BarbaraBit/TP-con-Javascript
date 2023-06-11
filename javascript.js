const valorcurso = 400;

let descuentoLiquidacion_y_Seleccion = 0.15;
let descuentoGanancias_y_Seleccion = 0.15;
let descuentoGanancias_y_Liquidacion = 0.15;
let descuentoSeleccion_Ganancias_y_Liquidacion = 0.25;

const cantidad = document.querySelector("#cantidad");
const categoria = document.querySelector("#categoriaSelect");
const BotonCalcular = document.querySelector("#Calcular");
const BotonReset = document.querySelector("#Reset");
const parrafo = document.querySelector("#parrafo");
const Nombre = document.querySelector('#Nombre');
const Apellido = document.querySelector('#Apellido');
const email = document.querySelector('#email');
const text = document.getElementById('#warnings');


function totalpagar(){
let totalValor = parseInt (cantidad.value) * valorcurso;
console.log(typeof cantidad.value);
  

if (categoria.value == 1) {totalValor = totalValor - (totalValor * 0) ;
}
else if (categoria.value == 2) {totalValor = totalValor - (totalValor * 0);
}
else if (categoria.value == 3) {totalValor = totalValor - (totalValor * 0);
}
else if (cantegoria.value == 4) {totalValor = totalValor - (totalValor * descuentoLiquidacion_y_Seleccion);
}
else if (categoria.value == 5) {totalValor = totalValor - (totalValor * descuentoGanancias_y_Seleccion);
}
else if (categoria.value == 6) {totalValor = totalValor - (totalValor * descuentoGanancias_y_Liquidacion);
}
else if (cantegoria.value == 7) {totalValor = totalValor - (totalValor * descuentoSeleccion_Ganancias_y_Liquidacion);
}

parrafo.innerHTML = `Total a pagar: $${totalValor}`;
}
BotonCalcular.addEventListener('click', totalpagar);

BotonReset.addEventListener('click', totalpagar);
const form = document.getElementById('form-id');


function getName() {
    var Nombre = document.getElementById("Nombre");
    var Apellido = document.getElementById("Apellido");
    if (Nombre.value == "") return ("Por favor ingrese su nombre");
if (Apellido.value == "") return ("Por favor ingrese su apellido");

}
function validarFormulario(evento) {
    evento.preventDefault();
}
    