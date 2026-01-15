/* INTRO FADE */
setTimeout(() => {
  const intro = document.querySelector('.intro');
  intro.style.opacity = 0;
  setTimeout(() => intro.remove(), 800);
}, 1200);

/* THREE.JS HERO */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 6;

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('webgl'),
  alpha: true,
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.IcosahedronGeometry(1.8, 1);
const material = new THREE.MeshStandardMaterial({
  color: 0x888888,
  wireframe: true
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const light = new THREE.PointLight(0xffffff, 0.8);
light.position.set(5,5,5);
scene.add(light);

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.001;
  mesh.rotation.y += 0.0015;
  renderer.render(scene, camera);
}
animate();
