var n = document.querySelectorAll(".drum").length;
for(var i=0 ; i<n ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var a = this.innerHTML;
        cases(a);
        buttonAnimation(a);
    });
}

var log = document.addEventListener("keydown", function(event){
    a = event.key;
    cases(a);
    buttonAnimation(a);
    love(a);
 });

 function cases(a){
    switch (a) {
        case "w":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;
        
        case "s":
            var tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;
        
        case "d":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;
        
        case "j":
            var crash = new Audio("crash.mp3");
            crash.play();
            break;
        
        case "k":
            var snare = new Audio("snare.mp3");
            snare.play();
            break;
        
        case "l":
            var kick = new Audio("kick-bass.mp3");
            kick.play();
            break;
    
        default:
            break;
    }
 }

 function buttonAnimation(currentKey)
 {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
 
 }

 function love(currentKey)
 {
     if(currentKey=='j')
     {
     var para = document.querySelector(".bindlove");
     para.innerHTML = "💖";
     para.classList.add(".killlove");
     setTimeout(function(){
         para.classList.remove(".killlove");
         para.innerHTML = "💗";
     },100)
     }
}