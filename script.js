let photo =document.querySelector(".image");
let context = document.querySelector(".context");
let elem =document.querySelectorAll(".elem")

elem.forEach(function(val){
  
   val.addEventListener("mouseenter",()=>{
      val.childNodes[3].style.opacity=1;
      
   })
   val.addEventListener("mouseleave",()=>{
      val.childNodes[3].style.opacity=0;

   })
   val.addEventListener("mousemove",(dets)=>{
      
      val.childNodes[3].style.left=dets.deltax+"px";
      val.childNodes[3].style.top=dets.deltay+"px";

   })
});
let main=document.querySelector(".maincontent");

photo.addEventListener('mouseenter',()=>{
   photo.style.backgroundColor="rgba(0, 0, 0, 0.514);";
   photo.style.border="4px solid #BBBBBB"
   gsap.to(".context,.moreContent,.contacts,.projects,.socialHandles,.nav",{
    opacity:1,
    scale:1,
    duration:0.8,
    delay:0.5,


   })
   
})



