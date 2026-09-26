const div = document.querySelector(".ball");
const screen = document.querySelector(".screen")

let x = 0, y = 0;
let currentX = 0, currentY = 0;

document.addEventListener('mousemove', (e) =>{
    const rect = screen.getBoundingClientRect();
    x = e.clientX - rect.left ;
    y = e.clientY - rect.top ;
});

function animate(){
    currentX += (x - currentX) * 0.15;
    currentY += (y - currentY) * 0.15;

    const demi = 25 / 2;
    const maxX = screen.clientWidth - demi;
    const maxY = screen.clientHeight - demi;

    const posX = Math.max(demi, Math.min(currentX, maxX));
    const posY = Math.max(demi, Math.min(currentY, maxY))

    div.style.transform = 
    `translate(${posX}px, ${posY}px)
    translate(-50%, -50%)`;

    requestAnimationFrame(animate);
}
animate();