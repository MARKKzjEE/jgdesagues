$(document).ready(function(){
    var currentIndex = 0;
    var totalImages = $('.carousel-images img').length;

    $('.header-option').click(function(){
        var sectionId = $(this).text().toLowerCase(); // Obtenemos el texto del elemento y lo convertimos en minúsculas para usarlo como ID de la sección
        var targetSection = $('#' + sectionId); // Seleccionamos el contenedor de la sección correspondiente

        // Verificamos si el contenedor de la sección existe
        if(targetSection.length){
            // Calculamos la posición a la que queremos desplazar la página (la parte superior del contenedor de la sección menos el tamaño del menú en ese momento)
            var headerHeight = $('header').outerHeight(); // Obtenemos la altura del encabezado
            var scrollToPosition = targetSection.offset().top;
            
            // Animamos el desplazamiento de la página
            $('html, body').animate({
                scrollTop: scrollToPosition
            }, 1000);
        }
    });

    // Inicialmente ocultar todas las imágenes excepto la primera
    $('.carousel-images img').not(':first').hide();

    // Función para cambiar a la siguiente imagen
    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }

    // Función para cambiar a la imagen anterior
    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    }

    // Función para actualizar el carrusel
    function updateCarousel() {
        $('.carousel-images img').eq(currentIndex).fadeIn();
        $('.carousel-images img').not(':eq(' + currentIndex + ')').hide();
    }

    // Event listener para el botón de siguiente
    $('.next').click(function(){
        nextImage();
    });

    // Event listener para el botón de anterior
    $('.prev').click(function(){
        prevImage();
    });
});
