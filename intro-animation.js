// Intro Animation Script - Integrates particle animation with portfolio
let scene, camera, renderer, particles;
const count = 12000;
let animationComplete = false;

function init() {
    const container = document.getElementById('intro-container');
    if (!container) {
        console.error('intro-container element not found. Make sure you have <div id="intro-container"></div> in your HTML.');
        return;
    }

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    container.appendChild(renderer.domElement);

    camera.position.z = 25;

    createParticles();
    animate();
    
    // Start the name animation after a short delay
    setTimeout(() => {
        morphToText('Darshan D G');
    }, 500);
}

function createParticles() {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    function sphericalDistribution(i) {
        const phi = Math.acos(-1 + (2 * i) / count);
        const theta = Math.sqrt(count * Math.PI) * phi;
        
        return {
            x: 8 * Math.cos(theta) * Math.sin(phi),
            y: 8 * Math.sin(theta) * Math.sin(phi),
            z: 8 * Math.cos(phi)
        };
    }

    for (let i = 0; i < count; i++) {
        const point = sphericalDistribution(i);
        
        positions[i * 3] = point.x + (Math.random() - 0.5) * 0.5;
        positions[i * 3 + 1] = point.y + (Math.random() - 0.5) * 0.5;
        positions[i * 3 + 2] = point.z + (Math.random() - 0.5) * 0.5;

        const color = new THREE.Color();
        const depth = Math.sqrt(point.x * point.x + point.y * point.y + point.z * point.z) / 8;
        color.setHSL(0.5 + depth * 0.2, 0.7, 0.4 + depth * 0.3);

        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 0.08,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true
    });

    if (particles) scene.remove(particles);
    particles = new THREE.Points(geometry, material);
    particles.rotation.x = 0;
    particles.rotation.y = 0;
    particles.rotation.z = 0;
    scene.add(particles);
}

function createTextPoints(text) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const fontSize = 120;
    const padding = 20;

    ctx.font = `bold ${fontSize}px Inter, Arial`;
    const textMetrics = ctx.measureText(text);
    const textWidth = textMetrics.width;
    const textHeight = fontSize;

    canvas.width = textWidth + padding * 2;
    canvas.height = textHeight + padding * 2;

    ctx.fillStyle = 'white';
    ctx.font = `bold ${fontSize}px Inter, Arial`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    const points = [];
    const threshold = 128;

    for (let i = 0; i < pixels.length; i += 4) {
        if (pixels[i] > threshold) {
            const x = (i / 4) % canvas.width;
            const y = Math.floor((i / 4) / canvas.width);
            
            if (Math.random() < 0.3) {
                points.push({
                    x: (x - canvas.width / 2) / (fontSize / 10),
                    y: -(y - canvas.height / 2) / (fontSize / 10)
                });
            }
        }
    }

    return points;
}

function morphToText(text) {
    const textPoints = createTextPoints(text);
    const positions = particles.geometry.attributes.position.array;
    const targetPositions = new Float32Array(count * 3);

    gsap.to(particles.rotation, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.5
    });

    for (let i = 0; i < count; i++) {
        if (i < textPoints.length) {
            targetPositions[i * 3] = textPoints[i].x;
            targetPositions[i * 3 + 1] = textPoints[i].y;
            targetPositions[i * 3 + 2] = 0;
        } else {
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 25 + 15;
            targetPositions[i * 3] = Math.cos(angle) * radius;
            targetPositions[i * 3 + 1] = Math.sin(angle) * radius;
            targetPositions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
    }

    for (let i = 0; i < positions.length; i += 3) {
        gsap.to(particles.geometry.attributes.position.array, {
            [i]: targetPositions[i],
            [i + 1]: targetPositions[i + 1],
            [i + 2]: targetPositions[i + 2],
            duration: 2,
            ease: "power2.inOut",
            onUpdate: () => {
                particles.geometry.attributes.position.needsUpdate = true;
            }
        });
    }

    // After 3 seconds, fade out and show portfolio
    setTimeout(() => {
        fadeOutIntro();
    }, 3000);
}

function fadeOutIntro() {
    animationComplete = true;
    const overlay = document.getElementById('intro-overlay');
    const portfolioContent = document.getElementById('portfolio-content');
    
    if (!overlay || !portfolioContent) {
        console.error('Required elements not found. Make sure you have intro-overlay and portfolio-content divs.');
        return;
    }
    
    // Fade out the intro
    overlay.classList.add('fade-out');
    
    // After fade completes, remove overlay and show portfolio
    setTimeout(() => {
        overlay.style.display = 'none';
        portfolioContent.style.display = 'flex';
        
        // Trigger portfolio content fade in
        setTimeout(() => {
            portfolioContent.classList.add('show');
            
            // Re-enable body scroll
            document.body.style.overflow = 'auto';
        }, 50);
    }, 800);
}

function animate() {
    requestAnimationFrame(animate);
    
    if (!animationComplete) {
        particles.rotation.y += 0.001;
    }
    
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    if (!animationComplete) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
});

// Initialize when page loads
window.addEventListener('load', () => {
    init();
});
