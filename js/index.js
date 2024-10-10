 ///<reference types="../@types/jquery" />

$('.openNav').on('click',function(){
        $('#leftNav').animate({width:'200px'},50)
        $('#home-info').animate({marginLeft:'200px'},50)
})

$('.close').on('click',function(){
        $('#leftNav').animate({width:'0px'},50)
        $('#home-info').animate({marginLeft:'0px'},50)
})

// Duration section
$('#Duration .toggle').on('click',function(){
        $('.inner').not($(this).next()).slideUp(500);
        $(this).next().slideToggle(500);
})

//Details section
window.onload = function(){
         countDownToTime("10 october 2024 10:00:00");
        }
    
      function countDownToTime(countTo) {
        let futureDate = new Date(countTo);
        futureDate = (futureDate.getTime()/1000);
        let now = new Date();
        now = (now.getTime()/1000);
        timeDifference = (futureDate- now);
            
       let days = Math.floor( timeDifference / (24*60*60));
       let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
       let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
       let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))
      
        $(".days").html(`${days} D`);
        $(".hours").html(`${hours} h`);
        $(".minutes").html(`${ mins } m`);
        $('.seconds').html(`${ secs} s`)
        setInterval(function() { countDownToTime(countTo); }, 1000); }

/*Contact section  textarea*/
let maxLength = 100;
$('textarea').keyup(function() {
  let length = $(this).val().length;
  let AmountLeft = maxLength-length;
        if(AmountLeft<=0)
         { $("#chars").text("your available character finished");}
     else{  $("#chars").text(AmountLeft);}  
});

     