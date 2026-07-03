const text=`Dear Dad,

Every lesson you taught me,
Every sacrifice you made,
Every smile you shared,
has shaped me into the person I am today.

Thank you for always believing in me before I believed in myself.
I hope one day I become even half the man you are.

Happy Birthday, my superhero.

Love,
Purv Gohil ❤️`;

let i=0;

function t(){
  if(i<text.length){
    type.textContent+=text[i++];
    setTimeout(t,35);
  }
}
t();

gift.onclick=()=>{
  msg.hidden=false;
  fire();
};

const c=document.getElementById('c'),
      x=c.getContext('2d');

function fire(){
  c.width=innerWidth;
  c.height=innerHeight;

  let p=[];

  for(let i=0;i<180;i++){
    p.push({
      x:innerWidth/2,
      y:innerHeight/2,
      vx:(Math.random()-.5)*8,
      vy:(Math.random()-.5)*8,
      r:2+Math.random()*3
    });
  }

  let a=0;

  (function f(){
    x.clearRect(0,0,c.width,c.height);

    p.forEach(o=>{
      o.x+=o.vx;
      o.y+=o.vy;
      o.vy+=0.03;

      x.fillStyle=`hsl(${Math.random()*60+20},100%,60%)`;
      x.beginPath();
      x.arc(o.x,o.y,o.r,0,Math.PI*2);
      x.fill();
    });

    if(a++<180){
      requestAnimationFrame(f);
    }
  })();
}
