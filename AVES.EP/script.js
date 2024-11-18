const images = document.querySelectorAll('.carrusel-container img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let current = 0;


const aves = [
    {
        nombre: "Tucán",
        descripcion: "Con su colorido pico, es un símbolo de los bosques tropicales.",
        imagen: "/aves/tucan.jpeg"
    },
    {
        nombre: "Quetzal",
        descripcion: "Ave de plumas vibrantes, asociada con culturas precolombinas.",
        imagen: "/aves/quetzal.jpeg"
    },
    {
        nombre: "Cóndor de los Andes",
        descripcion: "El ave voladora más grande del mundo, símbolo nacional.",
        imagen: "/aves/condor.jpeg"
    },
    {
        nombre: "Cardenal",
        descripcion: "Reconocible por su brillante plumaje rojo.",
        imagen: "/aves/cardenal.jpeg"
    }
];


function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });

    
    const ave = aves[index];
    document.getElementById('nombre-ave').textContent = ave.nombre;
    document.getElementById('descripcion-ave').textContent = ave.descripcion;
}


prev.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
});


next.addEventListener('click', () => {
    current = (current + 1) % images.length;
    showImage(current);
});


showImage(current);
