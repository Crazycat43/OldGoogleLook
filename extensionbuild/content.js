// Function to apply styles
function applyStyles() {
    const style = document.createElement('style');
    style.textContent = `
        body {
            background-color: #f5f5f5 !important;
            color: #000 !important;
        }

        #header {
            background-color: white !important;
            border-bottom: 1px solid #dcdcdc !important;
            height: 80px;
            display: flex;
            align-items: center;
            padding: 0 20px;
        }

        input.gLFyf {
            width: 600px !important;
            padding: 10px !important;
            border: 1px solid #ccc !important;
            border-radius: 5px !important;
        }

        input[name='btnK'] {
            background-color: #4285f4 !important;
            color: white !important;
            padding: 10px 20px !important;
            border: none !important;
            border-radius: 5px !important;
            cursor: pointer !important;
            margin-left: 10px;
        }

        a {
            color: #1a0dab !important;
            text-decoration: none !important;
        }

        h3 {
            color: #1a0dab !important;
        }

        p {
            color: #4b4b4d !important;
        }
    `;

    document.head.appendChild(style);
}

// Function to perform a barrel roll
function doABarrelRoll() {
    const body = document.body;
    body.style.transition = 'transform 0.6s ease-in-out';
    body.style.transform = 'rotate(360deg)';

    setTimeout(() => {
        body.style.transition = '';
        body.style.transform = '';
    }, 600); // Reset the transformation after 600ms
}

// Keyboard event to activate barrel roll
let isZPressed = false;
document.addEventListener('keydown', (event) => {
    if (event.key === 'z') {
        if (isZPressed) {
            doABarrelRoll();
            isZPressed = false; // Reset the status after the barrel roll
        } else {
            isZPressed = true;
            setTimeout(() => isZPressed = false, 300); // Reset after 300ms
        }
    }
});

// Apply styles when the content script runs
applyStyles();
