console.log("script is running");
document.querySelector(".cross").style.display ='none'
document.querySelector(".humburger").addEventListener('click',()=>{
   document.querySelector(".sidebar").classList.toggle('sidebarGo')
   if(document.querySelector(".sidebar").classList.contains('sidebarGo')){
       setTimeout(() => {
           document.querySelector(".hum").style.display='inline'
       }, 400);
    document.querySelector(".cross").style.display='none'
   }else{
    document.querySelector(".hum").style.display='none'
    setTimeout(() => {
        document.querySelector(".cross").style.display='inline'
        
    }, 300);
   }
})


