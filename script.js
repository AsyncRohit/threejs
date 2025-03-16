// Creating the scene
let scene = new THREE.Scene();

// Creating the camera
let camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 5;
scene.add(camera);

// Creating geometry
let geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({ color: "red" });
let mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Creating the renderer
const canvas = document.querySelector("#draw");
let renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

// Clock for animation
const clock = new THREE.Clock();

function animate() {
  window.requestAnimationFrame(animate);
  renderer.render(scene, camera);
  
  // Updating mesh rotation
  mesh.rotation.y = clock.getElapsedTime();
}

animate();

// Handle window resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
