window.onload = () => {
  const canvas  = document.getElementById('canvas')
  const context = canvas.getContext('2d')
  const width   = canvas.width  = window.innerWidth
  const height  = canvas.height = window.innerHeight
  const twoPi   = Math.PI * 2
  const centerY = height * 0.5
  const centerX = width * 0.5
  const offset  = height * 0.4 // Offset slightly smaller than centerY so animation doesn't move off of canvas
  const speed   = 0.1

  const render = (angle) => {
    const y = centerY  + Math.sin(angle) * offset

    context.clearRect(0, 0, width, height)
    context.beginPath()
    context.arc(centerX, y, 50, 0, twoPi, false)
    context.fill()

    const newRender = render.bind(null, angle + speed)
    requestAnimationFrame(newRender)
  }

  render(0)
}
