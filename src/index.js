import THREE from 'three';

let { innerWidth, innerHeight } = window;

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, .1, 1000);

let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

let cube = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 0xf58025 })
);
scene.add(cube);

camera.position.z = 5;

let render = () => {
	let { rotation, scale } = cube;
	rotation.x =
	rotation.y =
	rotation.z += .05;
	let k = Math.sin(Date.now() / 2000) ** 2 + .5;
	scale.x =
	scale.y =
	scale.z = k;
	requestAnimationFrame(render);
	renderer.render(scene, camera);
}

render();
