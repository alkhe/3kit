import {
	Scene, PerspectiveCamera, WebGLRenderer,
	Mesh, BoxGeometry, MeshBasicMaterial
} from 'three';

let { innerWidth, innerHeight } = window;

let scene = new Scene();
let camera = new PerspectiveCamera(75, innerWidth / innerHeight, .1, 1000);

let renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

let cube = new Mesh(
	new BoxGeometry(1, 1, 1),
	new MeshBasicMaterial({ color: 0xf58025 })
);
scene.add(cube);

camera.position.z = 5;

let render = () => {
	let { rotation, scale } = cube;
	rotation.x =
	rotation.y =
	rotation.z += .05;
	scale.x =
	scale.y =
	scale.z = Math.sin(Date.now() / 1500) ** 2 + .5;

	requestAnimationFrame(render);
	renderer.render(scene, camera);
}

render();
