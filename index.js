var noOfDrum=document.querySelectorAll(".drum").length;
console.log("noof drum",noOfDrum);
for(var i=0;i<noOfDrum;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function()
{ 
   // var audio=new Audio("sounds/crash.mp3");
   // audio.play();
   var buttoninner=this.innerHTML;
   playsound(buttoninner);
   buttonAnimation(buttoninner);
});
}

//keypress
document.addEventListener("keypress",function(event){
    console.log("key =",event);
    playsound(event.key);
    buttonAnimation(event.key);

})

var playsound=(buttoninner)=>{
    switch (buttoninner){
        case "w":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
             var audio=new Audio("sounds/snare.mp3");
              audio.play();
             break;
        case "d":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
             var audio=new Audio("sounds/tom-2.mp3");
             audio.play();
             break;
         case "k":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
         case "l":
                var audio=new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
             
        default:
            console.log("nom sound with this keypress");
    }

};
///add animation
function buttonAnimation(currentKey){
 var ani=document.querySelector("." + currentKey);
 ani.classList.add("pressed");
 setTimeout(function(){
    ani.classList.remove("pressed")
 },150);

}