// Función para manejar el cambio de secciones al hacer clic en los enlaces de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        targetSection.classList.add('active');
    });
});
function validateForm() {
    return true; 
  }
function showconsolas(productconsolasid){
    var consolas =document.getElementById(productconsolas + 'listadeproductos');
    if (consolas.style.display === "none") {
        consolas.style.display = "block";
        }else
        consolas.style.display ="none";
    }
// Función para mostrar u ocultar el menú de opciones
function toggleProductOptions() {
    var productOptions = document.getElementById("product-options");
    productOptions.classList.toggle("hidden");
}

// Función para manejar la selección de categorías
function selectCategory(category) {
    var productsContent = document.querySelector(".products-content");
    // Lógica para mostrar los productos correspondientes a la categoría seleccionada
    if (category === "todos") {
        // Mostrar todos los productos
        // Por ejemplo, puedes hacer una petición AJAX aquí para cargar todos los productos
    } else {
        // Mostrar solo los productos de la categoría seleccionada
        // Por ejemplo, puedes filtrar los productos en base a la categoría y luego mostrarlos
    }
}
function selectCategory(category) {
    var productsContent = document.querySelector(".products-content");
    // Lógica para mostrar los productos correspondientes a la categoría seleccionada
    if (category === "todos") {
        // Ocultar todos los productos
        var allProducts = document.querySelectorAll(".product");
        allProducts.forEach(function(product) {
            product.style.display = "none";
        });
    } else if (category === "consolas") {
        // Mostrar solo los productos de la categoría consolas
        var consolaProducts = document.querySelectorAll(".product[id^='consola']");
        consolaProducts.forEach(function(product) {
            product.style.display = "block";
        });
    } else {
        // Ocultar los productos de otras categorías
        var otherProducts = document.querySelectorAll(".product:not([id^='consola'])");
        otherProducts.forEach(function(product) {
            product.style.display = "none";
        });
    }
}

function selectCategory(category) {
    var productsContent = document.querySelector(".products-content");
    var consolaProducts = document.querySelectorAll(".product[id^='consola']");
    var accesorioProducts = document.querySelectorAll(".product[id^='accesorio']");
    var peliculaProducts = document.querySelectorAll(".product[id^='pelicula']");
    var ServicioProducts = document.querySelectorAll(".product[id^='Servicio']");

    // Ocultar todos los productos al inicio
    var allProducts = document.querySelectorAll(".product");
    allProducts.forEach(function(product) {
        product.style.display = "none";
    });

    // Lógica para mostrar los productos correspondientes a la categoría seleccionada
    if (category === "todos") {
        // Mostrar todos los productos
        allProducts.forEach(function(product) {
            product.style.display = "block";
        });
    } else if (category === "consolas") {
        // Mostrar solo los productos de la categoría consolas
        consolaProducts.forEach(function(product) {
            product.style.display = "block";
        });
    } else if (category === "accesorios") {
        // Mostrar solo los productos de la categoría accesorios
        accesorioProducts.forEach(function(product) {
            product.style.display = "block";
        });
        
    } else if (category === "peliculas") {
        // Mostrar solo los productos de la categoría accesorios
        peliculaProducts.forEach(function(product) {
            product.style.display = "block";
        });
    } else if (category === "Servicios") {
        // Mostrar solo los productos de la categoría accesorios
        ServicioProducts.forEach(function(product) {
            product.style.display = "block";
        });
    // Agrega más lógica para otras categorías si es necesario
}
}

function mostrarTexto() {
    var texto = document.getElementById("texto");
    if (texto.style.display === "none") {
      texto.style.display = "block";
    } else {
      texto.style.display = "none";
    }
  }
  function validateForm() {
    // Aquí podrías agregar validaciones de los campos si lo deseas
    // Por ejemplo, verificar que el correo electrónico tenga un formato válido
    
    // Simplemente mostramos el mensaje de éxito y borramos los campos
    document.getElementById("success-message").style.display = "block";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("birthdate").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("gender").value = "select"; // Reiniciamos el valor del select a "Masculino"
    document.getElementById("suggestion").value = "";
    document.getElementById("schedule").value = "select"; // Reiniciamos el valor del select a "Mañana"
    return false; // Devolvemos false para evitar que se envíe el formulario
}