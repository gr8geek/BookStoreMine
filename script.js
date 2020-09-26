console.log("Hello Namaste")
    const bt = document.getElementById('btn1')
console.log(bt)
var c=0
bt.addEventListener('click',(event)=>{
    event.preventDefault()
    console.log(c)
    c=c+1
})
const bt1 = document.getElementById('call')
console.log(bt1)
var c=0
bt1.addEventListener('hover',(event)=>{
    bt.classList.add('pulse')
})
bt1.addEventListener('blur',(event)=>{
    bt.classList.remove('pulse')
})
