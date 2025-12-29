/* Building Background Canvas */
/* Renders big "squarely" like big pixels as waves, so it looks more cyberpunk. 
   It should be interactive such that mouse clicks makes ripples. */

// Number of columns and rows
const cols = 160;
const rows = 90;
let curr = new Float32Array(cols * rows);
let prev = new Float32Array(cols * rows);

const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const cols = 160;
const rows = 90;
let curr = new Float32Array(cols*rows);
let prev = new Float32Array(cols*rows);

// small initial disturbance
prev[Math.floor(cols/2) + Math.floor(rows/2)*cols] = 5;

function step() {
  for (let j = 1; j < rows-1; j++) {
    for (let i = 1; i < cols-1; i++) {
      const idx = j*cols + i;
      curr[idx] = (prev[idx-1]+prev[idx+1]+prev[idx-cols]+prev[idx+cols])/2 - curr[idx];
      curr[idx] *= 0.98; // damping
    }
  }
}

function render() {
  const cw = canvas.width / cols;
  const ch = canvas.height / rows;
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const v = curr[j*cols+i];
      const color = Math.floor(128 + v*255);
      ctx.fillStyle = `rgb(${color}, ${color*0.3}, 255)`;
      ctx.fillRect(i*cw, j*ch, cw, ch);
    }
  }
}

function loop() {
  step();
  render();
  [curr, prev] = [prev, curr];
  requestAnimationFrame(loop);
}

loop();

// click for ripples
canvas.addEventListener("click", e => {
  const i = Math.floor(e.clientX / canvas.width * cols);
  const j = Math.floor(e.clientY / canvas.height * rows);
  for (let dy=-2; dy<=2; dy++) {
    for (let dx=-2; dx<=2; dx++) {
      const ni = i+dx, nj = j+dy;
      if (ni>=0 && ni<cols && nj>=0 && nj<rows) {
        prev[nj*cols + ni] += 5;
      }
    }
  }
});
