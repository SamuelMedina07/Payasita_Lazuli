const imagenes = [
      'img/1.png',
      'img/2.png',
      'img/3.png',
      'img/4.png',
      'img/5.png',
      'img/6.png',
      'img/7.png',
      'img/8.png',
      'img/9.png',
      'img/10.png'
    ];

    const cuadros = document.querySelectorAll('.galeria img');

    function obtenerAleatorias(n, excluidos = []) {
      const disponibles = imagenes.filter(img => !excluidos.includes(img));
      const seleccionadas = [];

      while (seleccionadas.length < n && disponibles.length > 0) {
        const index = Math.floor(Math.random() * disponibles.length);
        seleccionadas.push(disponibles.splice(index, 1)[0]);
      }

      return seleccionadas;
    }

    function actualizarImagenes() {
      const actuales = Array.from(cuadros).map(img => img.src);
      const nuevas = obtenerAleatorias(4, actuales);

      cuadros.forEach((img, i) => {
        const nueva = nuevas[i];
        gsap.to(img, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            img.src = nueva;
            gsap.to(img, {
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power2.out"
            });
          }
        });
      });
    }

    actualizarImagenes();

    setInterval(actualizarImagenes, 3000);