window.onload = function () {
  const canvas  = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  const width   = canvas.width  = window.innerWidth;
  const height  = canvas.height = window.innerHeight;
  const twoPi   = Math.PI * 2;
  const space   = 200;  // 200 is a random number simply used to create space here
  const size    = 5;    // 5 represents a pixel value

  context.translate(0, height / 2); // Moves canvas down so we can see positive values
  context.scale(1, -1);             // Flips the Y axis to follow traditional Cartesian coordinates system

  for (var angle = 0; angle < twoPi; angle += 0.01) {
    const x = angle * space;
    const siny = Math.sin(angle) * space;

    context.fillRect(x, siny, size, size);
  }
};
