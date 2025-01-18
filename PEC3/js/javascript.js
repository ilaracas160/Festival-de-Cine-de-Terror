// Seleccionamos los elementos relevantes
const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0; // Comienza en la primera imagen
const totalImages = images.length; // Total de imágenes

// Función para mover el carrusel
function updateSlide() {
  const slideWidth = images[0].clientWidth; // El ancho de cada imagen
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Mueve el track según el índice actual
}

// Botón siguiente (next)
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages; // Avanza al siguiente índice, vuelve al principio al final
  updateSlide();
});

// Botón anterior (prev)
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Retrocede al índice anterior
  updateSlide();
});

// Deslizar automáticamente cada 3 segundos
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalImages; // Avanza al siguiente índice, vuelve al principio
  updateSlide();
}, 3000);


