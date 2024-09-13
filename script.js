const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const clearBtn = document.getElementById('clearBtn');
const saveBtn = document.getElementById('saveBtn');

let drawing = false;
let brushColor = '#000000';
let brushSize = 5;

// Set up canvas for high-DPI displays
function setupCanvas() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = 800 * dpr;
  canvas.height = 600 * dpr;
  ctx.scale(dpr, dpr);
}
