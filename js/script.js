let open = document.querySelector("#open");
let close = document.querySelector("#close");

open.onclick = () =>{
    document.getElementById("menu-list").style.display = 'block';
   }
close.onclick = () =>{
    document.getElementById("menu-list").style.display ='none'
   }