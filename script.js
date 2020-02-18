$(document).ready(function(){



// class submitBtn;
let score = 0;
let seconds = 60;
let interval = 1000;

// Questions
function question1Func(){
    $(".choice").addClass("btn btn-secondary");
    $(".question").text("Commonly used data types DO NOT include:");
    $(".choice1").text("Strings");
    $(".choice2").text("Boolean");
    $(".choice3").text("Alerts");
    $(".choice4").text("Numbers");
    $(".submitBtn").text("Submit");
}

function question2Func(){
    $(".choice").addClass("btn btn-secondary");
    $(".question").text("The condition in an if / else statement is enclosed within ____.");
    $(".choice1").text("Quotes");
    $(".choice2").text("Curley Braces");
    $(".choice3").text("Parentheses");
    $(".choice4").text("Square Brackets");
    $(".submitBtn").text("Submit");
}

function question3Func(){
    $(".choice").addClass("btn btn-secondary");
    $(".question").text("Arrays in JavaScript can be used to store ____.");
    $(".choice1").text("Numbers and Strings");
    $(".choice2").text("Other arrays");
    $(".choice3").text("Booleans");
    $(".choice4").text("All of the above"); 
    $(".submitBtn").text("Submit");
}

function question4Func(){
    $(".choice").addClass("btn btn-secondary");
    $(".question").text("String values must be enclosed within ____ when being assigned to variables.");
    $(".choice1").text("Commas");
    $(".choice2").text("Curley Braces");
    $(".choice3").text("Quotes");
    $(".choice4").text("Parentheses"); 
    $(".submitBtn").text("Submit");
}


function question5Func(){
    $(".choice").addClass("btn btn-secondary");
    $(".question").text("A very useful tool used during development and debugging for printing content to the debugger is:");
    $(".choice1").text("JavaScript");
    $(".choice2").text("For Loop");
    $(".choice3").text("Terminal/Bash");
    $(".choice4").text("Console.log"); 
    $(".submitBtn").text("Submit");
}



//Timer Function
timerFunc = function(){
    let timer = setInterval(function(){
        $(".timer").text("Seconds: " + seconds);
        seconds--;

        if (seconds < 0){
            clearInterval(timer);
            return "Quiz Over!";
        }  
    }, interval);

    // function quiz(){
    //     function question1Func();
    //     function question2Func();
    //     function question3Func();
    //     function question4Func();
    //     function question5Func();
    // }






};

//On-click event for timer to start
$(".submitBtn").on("click", timerFunc);

//On-click event to start quiz
$(".submitBtn").on("click", question1Func);




});
