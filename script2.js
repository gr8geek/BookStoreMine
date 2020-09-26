window.onload = async function(){
    console.log("Hello hie")
    const bt=document.getElementById('call')
    const h=document.getElementById('t1')

    bt.ontouchstart=()=>{
        bt.classList.add('pulse')
        h.classList.remove('hide')
    }
    bt.ontouchend=()=>{
        bt.classList.remove('pulse')  
        h.classList.add('hide')

    }
    


}
