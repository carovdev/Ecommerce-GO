var next = document.getElementsByClassName('next')
var banner = document.getElementById("banner")

next[0].onclick =  function (){
    banner.src ="/images/BANNER1.jpg"
    animation();
    this.classList.add("active")
}

next[1].onclick =  function (){
    banner.src ="/images/BANNER2.jpg"
    animation();
    this.classList.add("active")
}

next[2].onclick =  function (){
    banner.src ="/images/BANNER3.jpg"
    animation();
    this.classList.add("active")
}

function animation(){
    for(b of next){
        b.classList.remove("active")
    }
}

