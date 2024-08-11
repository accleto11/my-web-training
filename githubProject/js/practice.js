document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    const clearButton = document.getElementById('clearCanvas');
    const eraserButton = document.getElementById('eraserMode');

    let isDrawing = false;
    let isErasing = false;

    // Adjust for canvas positioning and drawing
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        draw(e);
    });

    canvas.addEventListener('mouseup', () => {
        isDrawing = false;
        ctx.beginPath();
    });

    canvas.addEventListener('mousemove', (e) => {
        if (isDrawing) {
            draw(e);
        }
    });

    canvas.addEventListener('mouseleave', () => {
        isDrawing = false;
        ctx.beginPath();
    });

    clearButton.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    eraserButton.addEventListener('click', () => {
        isErasing = !isErasing;
        eraserButton.textContent = isErasing ? 'Drawing Mode' : 'Eraser Mode';
    });

    function draw(e) {
        // Adjust mouse position based on canvas position
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.lineWidth = isErasing ? 10 : 3;
        ctx.lineCap = 'round';
        ctx.strokeStyle = isErasing ? '#fff' : '#000';

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
});
