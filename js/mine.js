let aside=$(".asideDiv").outerWidth(true);
$(".asideDiv").css({left:`-${aside}`})

$(".fa-xmark").click(function(){
        $(".asideDiv").animate({left:`-${aside}`},500)
        $(".open-bars").animate({left:`0px`},500)
})
$(".open-bars").click(function(){        
        $(".asideDiv").animate({left:`0px`},500)
        $(".open-bars").animate({left:`200px`},500)
})

 $(window).scroll(function(){
    if($(window).scrollTop()>= 200){
        $(".open-bars").fadeOut(400)
    }else{
        $(".open-bars").fadeIn(400)
    }
 })

 //singers
 $("#singers h3").click(function(){
    console.log(this)
    $(this).next().slideToggle(1000)
 })

 //countdown

var countDownDate = new Date("Aug 4, 2024 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("days").innerHTML =  " -"+days + " d " ;
  document.getElementById("hours").innerHTML = hours + " h ";
  document.getElementById("mins").innerHTML = minutes + " m ";
  document.getElementById("secs").innerHTML = seconds + " s ";
 
  if (distance < 0) {
    clearInterval(x);
        document.getElementById("demo").innerHTML = "TIME UP";
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("mins").innerHTML = "0";
        document.getElementById("secs").innerHTML = "0";
    }
}, 1000);

//count char
//remainingChar

const myTextarea = document.querySelector("textarea")
const remainingChar = document.getElementById("remainingChar")

const maxChars = 100;

myTextarea.addEventListener("input",()=>{
  const remaining = maxChars-myTextarea.value.length;
if(remaining<=0){

    remainingChar.textContent =`your available character finished`;
}else{
    remainingChar.textContent =`${remaining}`;
}
})

