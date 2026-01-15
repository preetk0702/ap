/* CURSOR */
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

/* INTRO */
setTimeout(() => {
  const intro = document.querySelector('.intro');
  intro.style.opacity = 0;
  setTimeout(() => intro.remove(), 800);
}, 1400);

/* MAGNETIC */
document.querySelectorAll('.magnetic').forEach(el => {
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - r.left - r.width/2)/5}px, ${(e.clientY - r.top - r.height/2)/5}px)`;
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'translate(0,0)';
  });
});

/* HORIZONTAL SCROLL */
const track = document.querySelector('.track');
window.addEventListener('scroll', () => {
  track.style.transform = `translateX(-${window.scrollY}px)`;
});

/* THREE.JS */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('webgl'),
  alpha: true,
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.IcosahedronGeometry(1.6, 1);
const material = new THREE.MeshStandardMaterial({
  color: 0x5eead4,
  wireframe: true
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5,5,5);
scene.add(light);

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.002;
  mesh.rotation.y += 0.003;
  renderer.render(scene, camera);
}
animate();
