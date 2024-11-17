// Animar stickers al hacer clic
document.querySelectorAll('.sticker').forEach(sticker => {
    sticker.addEventListener('click', () => {
        alert('¡Este sticker es tu favorito!');
    });
});
