function purchaseSubscription(plan) {
    alert(`¡Has comprado el plan ${plan}! Gracias por tu compra.`);
    // Aquí podrías agregar lógica adicional, como enviar datos de la compra a un servidor.
}

function toggleLista() {
    var listaEspecificaciones = document.getElementById("especificaciones");

    // Si la lista está oculta, la mostramos
    if (listaEspecificaciones.style.display === "none") {
        // Especificaciones de ejemplo, puedes personalizarlas según tus necesidades
        var especificaciones = [
            "2 dispositivos simultáneos para visualizar contenido.",
            "2 dispositivos simultáneos para descargar contenido.",
            "HD 720p como calidad de visualización.",
            "Catálogo limitado. No se puede ver todas las series y películas."
        ];

        // Crear una lista ul
        var listaUl = document.createElement("ul");

        // Iterar sobre las especificaciones y crear elementos li para cada una
        for (var i = 0; i < especificaciones.length; i++) {
            var especificacion = especificaciones[i];
            var listItem = document.createElement("li");
            listItem.textContent = especificacion;
            listaUl.appendChild(listItem);
        }

        // Limpiar el contenido anterior del div
        listaEspecificaciones.innerHTML = "";

        // Agregar la lista ul al div
        listaEspecificaciones.appendChild(listaUl);

        // Mostrar la lista
        listaEspecificaciones.style.display = "block";
    } else {
        // Si la lista está visible, la ocultamos
        listaEspecificaciones.style.display = "none";
    }
}

function toggleLista2() {
    var listaEspecificaciones = document.getElementById("especificaciones2");

    // Si la lista está oculta, la mostramos
    if (listaEspecificaciones.style.display === "none") {
        // Especificaciones de ejemplo, puedes personalizarlas según tus necesidades
        var especificaciones2 = [
            "4 dispositivos simultánemos para visualizar contenido.",
            "4 dispositivos simultáneos para descargar contenido.",
            "UHD 4K como calidad de visualización.",
            "Catálogo con acceso completo."
        ];

        // Crear una lista ul
        var listaUl = document.createElement("ul");

        // Iterar sobre las especificaciones y crear elementos li para cada una
        for (var i = 0; i < especificaciones2.length; i++) {
            var especificacion = especificaciones2[i];
            var listItem = document.createElement("li");
            listItem.textContent = especificacion;
            listaUl.appendChild(listItem);
        }

        // Limpiar el contenido anterior del div
        listaEspecificaciones.innerHTML = "";

        // Agregar la lista ul al div
        listaEspecificaciones.appendChild(listaUl);

        // Mostrar la lista
        listaEspecificaciones.style.display = "block";
    } else {
        // Si la lista está visible, la ocultamos
        listaEspecificaciones.style.display = "none";
    }
}




