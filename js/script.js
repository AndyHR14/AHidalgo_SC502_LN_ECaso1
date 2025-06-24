 function realizarCalculos() {
    

    const servicio1 = document.getElementById('serv1').textContent;
    const servicio2 = document.getElementById('serv2').textContent;
    const servicio3 = document.getElementById('serv3').textContent;

    const precio1 = parseInt(document.getElementById('prec1').textContent);
    const precio2 = parseInt(document.getElementById('prec2').textContent);
    const precio3 = parseInt(document.getElementById('prec3').textContent);

    const celda1 = document.getElementById('prec1');
    const celda2 = document.getElementById('prec2');
    const celda3 = document.getElementById('prec3');

    if (precio1 < 9000) {
    celda1.classList.add('precioBajo');
    } else if (precio1 > 11000) {
    celda1.classList.add('precioAlto');
    }

    if (precio2 < 9000) {
    celda2.classList.add('precioBajo');
    } else if (precio2 > 11000) {
    celda2.classList.add('precioAlto');
    }

    if (precio3 < 9000) {
    celda3.classList.add('precioBajo');
    } else if (precio3 > 11000) {
    celda3.classList.add('precioAlto');
    }

    let masBajo = precio1;
    let servicioMasBajo = servicio1;

    if (masBajo > precio2){
        masBajo = precio2;
        servicioMasBajo = servicio2;
    }

    if (masBajo > precio3){
        masBajo = precio3;
        servicioMasBajo = servicio3;
    }

    let masAlto = precio1;
    let servicioMasAlto = servicio1;

    if (masAlto < precio2){
        masAlto = precio2;
        servicioMasAlto = servicio2;
    }

    if (masAlto < precio3){
        masAlto = precio3;
        servicioMasAlto = servicio3;
    }

    let suma = precio1+precio2+precio3;
    promedio = suma/3;

    document.getElementById('servicioBajo').textContent = servicioMasBajo;
    document.getElementById('servicioAlto').textContent = servicioMasAlto;
    document.getElementById('promedio').textContent = promedio;
}

window.addEventListener('DOMContentLoaded', function() {
    realizarCalculos();
});

function limpiar() {
    document.getElementById('formulario').reset(); 
}



document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formulario');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const nombre = document.getElementById('nombreform').value;
        const servicio = document.getElementById('servicioform').value;
        const precio = document.getElementById('precioform').value;

        if (nombre === '' || servicio === '' || precio === '') {
            alert('Por favor, ingrese la informacion correspondiente');
            return; 
        }

        const precioNum = parseFloat(precio);

        if (precioNum < 5000 || precioNum > 15000) {
            alert('El precio debe ser un número entre ₡5.000 y ₡15.000');
            return;
        }

        alert('Servicio registrado correctamente');

        form.reset();
    });

    window.limpiar = function() {
        document.getElementById('formulario').reset();
    };
});