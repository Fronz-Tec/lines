const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);

camera.position.set(0, 0, -100);
camera.lookAt(0, 0, 0);

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    lineObject.rotation.x += 0.01;
    lineObject.rotation.y += 0.01;

    let movement = getRandom(1, 2);

    if (movement == 1) {
        lineObject.moveBy(getRandom(1, 20), getRandom(1, 20));
    } else {

    }
    renderer.render(scene, camera);
}

const lineObject = new THREE.Object3D();

let amountOfLines = getRandom(100, 333);

for (let i = 0; i < amountOfLines; i++) {
    const MAX_POINTS = 5000;

    const geometry = new THREE.BufferGeometry();

    const positions = new Float32Array(MAX_POINTS * getRandom(2, 10));
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, getRandom(1, 5)));

    let drawCount = getRandom(2, 10);
    geometry.setDrawRange(0, drawCount);

    const material = new THREE.LineBasicMaterial({color: Math.random() * 0xffffff});

    const line = new THREE.Line(geometry, material);
    lineObject.add(line);


    let x, y, z, index;
    x = y = z = index = 0;

    for (let i = 0, l = MAX_POINTS; i < l; i++) {

        let amountOfParts = getRandom(5,40)

        for (let i = 0; i < amountOfParts; i++) {
            positions[index++] = x;
            positions[index++] = y;
            positions[index++] = z;


            x += (Math.random() - 0.5) * getRandom(10,60);
            y += (Math.random() - 0.5) * getRandom(10,60);
            z += (Math.random() - 0.5) * getRandom(10,60);
        }
    }
}

scene.add(lineObject);
render();
animate();

function render() {

    renderer.render(scene, camera);

}

