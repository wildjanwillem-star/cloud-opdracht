
const glow=document.querySelector('.cursor-glow');
document.addEventListener('mousemove',e=>{
glow.style.left=e.clientX+'px';
glow.style.top=e.clientY+'px';
});

const container=document.getElementById('particles');
for(let i=0;i<40;i++){
const p=document.createElement('div');
p.className='particle';
p.style.left=Math.random()*100+'vw';
p.style.top=Math.random()*100+'vh';
p.style.animationDuration=(5+Math.random()*10)+'s';
container.appendChild(p);
}
