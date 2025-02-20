  document.addEventListener("DOMContentLoaded", function () {
    // Obtiene la URL actual sin la ruta completa
    const currentPage = window.location.pathname.split("/").pop().replace(".html", "");

    // Selecciona todos los enlaces del menú
    const links = document.querySelectorAll(".nav-list a");

    links.forEach(link => {
      // Obtiene el valor de data-page
      const page = link.getAttribute("data-page");

      // Si coincide con la página actual, agrega la clase active
      if (page === currentPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });

