function contactar() {
      const numero = '50495953118';
      const mensaje = encodeURIComponent("¡Hola Lazuli! Me gustaría saber más sobre tus shows para fiestas infantiles.");
      window.open(`https://wa.me/${numero}?text=${mensaje}`, '_blank');
    }

    const testimoniosData = [
      { nombre: "Mariana G.", texto: "¡Lazuli hizo que el cumpleaños de mi hija fuera inolvidable! Súper recomendada.", imagen: "https://via.placeholder.com/80" },
      { nombre: "Carlos T.", texto: "Una profesional con mucho carisma. Los niños no dejaban de reír.", imagen: "https://via.placeholder.com/80" },
      { nombre: "Andrea L.", texto: "Desde la decoración hasta el show, todo fue mágico. Gracias Lazuli.", imagen: "https://via.placeholder.com/80" }
    ];

    async function cargarTestimonios() {
      try {
        const response = await fetch('js/testimonies.js');
        const testimoniosData = await response.json();
        const carousel = document.getElementById('carousel');

        testimoniosData.forEach(t => {
          const div = document.createElement('div');
          div.className = 'testimonio-burbuja';
          div.innerHTML = `<img src="${t.imagen}" alt="${t.nombre}"><h4>${t.nombre}</h4><p>“${t.texto}”</p>`;
          carousel.appendChild(div);
        });

        let index = 0;
        setInterval(() => {
          index = (index + 1) % testimoniosData.length;
          carousel.style.transform = `translateX(-${index * 100}%)`;
        }, 4000);
      } catch (error) {
        console.error('Error al cargar testimonios:', error);
      }
    }
     cargarTestimonios();

    