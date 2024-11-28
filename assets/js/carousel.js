// Carrusel de imágenes
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;
const indicators = document.querySelectorAll('.indicator');

function updateCarousel() {
  // Mueve el carrusel
  document.querySelector('.carousel').style.transform = `translateX(-${currentIndex * 100}%)`;

  // Actualiza los indicadores
  indicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

function moveCarousel(event) {
  // Obtiene la posición del clic con respecto al carrusel
  const clickPosition = event.clientX - event.target.getBoundingClientRect().left;
  const halfWidth = event.target.offsetWidth / 2;

  // Si el clic es en la mitad izquierda, retrocedemos una imagen
  if (clickPosition < halfWidth) {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  } else {
    // Si el clic es en la mitad derecha, avanzamos una imagen
    currentIndex = (currentIndex + 1) % totalImages;
  }

  updateCarousel();
}

function goToImage(index) {
  currentIndex = index;
  updateCarousel();
}

// Cambiar imagen cada 3 segundos
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
}, 3000);

// Inicializa el carrusel
updateCarousel();