const svetafor = document.querySelectorAll(".svetafor");

let active =0

setInterval(()=>{
  changel()
}, 2200)

function changel(){
    svetafor[active].className ='svetafor';
    active++;

    if(active>2){
        active=0
    }

    const current = svetafor[active];
    current.classList.add(current.getAttribute('color'))
}