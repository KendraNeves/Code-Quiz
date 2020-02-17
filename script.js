//On click event on "Start Quiz" button

//


let score = 0;
let seconds = 60;
let interval = 1000;

//Timer
$(".btn").on("click", function timer(){
        timer = setInterval(function(){
        $(".timer").text("Seconds: " + seconds);
        seconds--;
        
        if (seconds < 0){
            clearInterval(timer);
        }  

        // if(answer = incorrect){ //haven't declared these variables
        //  let penalty = (seconds * 5)
        // } 

    }, interval);   
});
timer()