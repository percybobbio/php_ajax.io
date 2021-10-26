var btn = document.getElementById('btn_cargar_usuarios');
var loader = document.getElementById('loader');

btn.addEventListener('click', function() {
    var peticion = new XMLHttpRequest();
    //peticion.open('GET','https://api.json-generator.com/templates/wEtRW1Z2Wppd/data?access_token=dkovq2vhvpocscsrqvd6tt79v4f05r6enp5n3exv');
    peticion.open('GET','php/leerDatos.php');
    loader.classList.add('active');
    peticion.onload = function() {
        console.log(peticion.responseText);
        var datos = JSON.parse(peticion.responseText);
        for (var i = 0; i < datos.length; i++) {
            var elemento = document.createElement('tr');
            elemento.innerHTML += ("<td>" + datos[i].id + "</td>");
            elemento.innerHTML += ("<td>" + datos[i].nombre + "</td>");
            elemento.innerHTML += ("<td>" + datos[i].edad + "</td>");
            elemento.innerHTML += ("<td>" + datos[i].pais + "</td>");
            elemento.innerHTML += ("<td>" + datos[i].correo + "</td>");
            document.getElementById('tabla').appendChild(elemento);
        }
    }

    peticion.onreadystatechange = function() {
        if (peticion.readyState==4 && peticion.status==200) {
            loader.classList.remove('active');
        }
    }

    peticion.send();
});