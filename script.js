const container = document.getElementById("main-sec")

function dropped(){
   const drop = document.createElement("span")

   drop.classList.add("drop")
   drop.style.top = Math.random() * innerHeight + "px"
   drop.style.left = Math.random() * innerWidth + "px"

   setTimeout( () => {drop.remove()},  6000)

   container.appendChild(drop)
}

setInterval(dropped, 300)