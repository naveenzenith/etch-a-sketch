function changeSketchpad(N){
    const sketchpad=document.querySelector('.sketchpad');
    sketchpad.innerHTML='';
    
    for(let squares=1;squares<=N*N;squares++){
        let square=document.createElement('div');
        square.style.borderWidth='0px';
        square.style.width=`${960/N}px`;
        square.style.height=`${960/N}px`;
        sketchpad.appendChild(square);
        let alpha=0;
        square.addEventListener('mouseover',()=>{
            alpha=Math.max(0,alpha+0.2);
            square.style.background=`rgba(0, 0, 0, ${alpha})`;
        });
    }
}
changeSketchpad(16);
 document.querySelector('.btn').addEventListener('click',()=>{
    const N=prompt('enter a value within 64');
    changeSketchpad(N);
 });


