/* CURSOR */
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

/* INTRO ANIMATION */
setTimeout(() => {
  document.querySelector('.intro').style.opacity = 0;
  setTimeout(() => document.querySelector('.intro').remove(), 800);
}, 1400);

/* MAGNETIC BUTTON */
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    btn.style.transform = `translate(${(e.clientX - rect.left - rect.width/2)/4}px, ${(e.clientY - rect.top - rect.height/2)/4}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0,0)';
  });
});

/* HORIZONTAL SCROLL */
const track = document.querySelector('.track');
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  track.style.transform = `translateX(-${scroll}px)`;
});

/* THREE.JS HERO */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('webgl'), alpha: true });
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
