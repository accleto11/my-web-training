document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('drawingCanvas');
    const context = canvas.getContext('2d');
    let drawing = false;
    let erasing = false;

    // Initialize drawing settings
    context.lineWidth = 3;
    context.lineCap = 'round';
    context.strokeStyle = '#000';
    
    canvas.addEventListener('mousedown', () => {
        drawing = true;
        if (!erasing) {
            context.beginPath();
        }
    });

    canvas.addEventListener('mousemove', (event) => {
        if (drawing) {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            if (erasing) {
                context.globalCompositeOperation = 'destination-out';
                context.arc(x, y, 10, 0, Math.PI * 2, false); // Draw a circle for erasing
                context.fill();
            } else {
                context.globalCompositeOperation = 'source-over';
                context.lineTo(x, y);
                context.stroke();
            }
        }
    });

    canvas.addEventListener('mouseup', () => {
        drawing = false;
    });

    document.getElementById('clearCanvas').addEventListener('click', () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });

    document.getElementById('eraserMode').addEventListener('click', () => {
        erasing = !erasing;
        document.getElementById('eraserMode').textContent = erasing ? 'Draw Mode' : 'Eraser Mode';
    });
});
