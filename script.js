const boton = document.getElementById("boton");
const inicio = document.getElementById("inicio");
const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

boton.onclick = () => {

    inicio.style.opacity = "0";

    setTimeout(() => {

        inicio.style.display = "none";
        canvas.style.display = "block";

        animar();

    },1000);

};

let tiempo = 0;

function animar(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    tiempo += 0.05;

    const escala = 14 + Math.sin(tiempo)*1.2;

    ctx.beginPath();

    for(let i=0;i<=360;i++){

        const a = i*Math.PI/180;

        let x = 16*Math.pow(Math.sin(a),3);

        let y =
        13*Math.cos(a)
        -5*Math.cos(2*a)
        -2*Math.cos(3*a)
        -Math.cos(4*a);

        x*=escala;
        y*=escala;

        x += canvas.width/2;
        y = canvas.height/2 - y;

        if(i==0){
            ctx.moveTo(x,y);
        }else{
            ctx.lineTo(x,y);
        }

    }

    ctx.fillStyle="red";
    ctx.fill();

    ctx.fillStyle="white";
    ctx.font="bold 42px Arial";
    ctx.textAlign="center";
    ctx.fillText("Te amo Andrea ❤️",canvas.width/2,canvas.height/2+15);

    requestAnimationFrame(animar);

}