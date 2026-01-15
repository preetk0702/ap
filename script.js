document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect()
    btn.style.transform = `translate(${(e.clientX - rect.left - rect.width/2)/10}px, ${(e.clientY - rect.top - rect.height/2)/10}px)`
  })
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0,0)'
  })
})
