const soatH1=document.getElementById("soatH1");
const minutH1=document.getElementById("minutH1");
const sekundH1=document.getElementById("sekundH1");

const vaqt=new Date();
let soat=vaqt.getHours();
let minut=vaqt.getMinutes();
let sekund=vaqt.getSeconds();




function timer(){
    if(sekund==60){
         sekund=0;
         minut++;
    }
    if(minut==60){
        minut=0;
        soat++;
    }
    if(soat==24){
        soat=0;
        minut=0;
        sekund=0;
    }
    soatH1.textContent=soat;
    minutH1.textContent=minut;
    sekundH1.textContent=sekund
    sekund++;
}

setInterval(timer,1000)