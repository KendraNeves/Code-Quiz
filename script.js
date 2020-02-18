$(document).ready(function(){



// class submitBtn;
let score = 0;
let seconds = 60;
let interval = 1000;

// Questions

let question1Array = ["Commonly used data types DO NOT include:", "Strings", "Boolean", "Alerts", "Numbers" ];
let question2Array = ["The condition in an if / else statement is enclosed within ____.", "Quotes", "Curley Braces", "Parentheses", "Square Brackets"];
let question3Array = ["Arrays in JavaScript can be used to store ____.", "Numbers and Strings", "Other arrays", "Booleans", "All of the above"];
let question4Array = ["String values must be enclosed within ____ when being assigned to variables.", "Commas", "Curley Braces", "Quotes", "Parentheses"];
let question5Array = ["A very useful tool used during development and debugging for printing content to the debugger is:", "JavaScript", "For Loop", "Terminal/Bash", "Console.log"];




let hardForLoop = function(){
    for (let i = 1; i < question2Array.length; i++){
        $(".choice").addClass("btn btn-secondary"); //adds bootstrap button classes
        let createButton = document.createElement("button"); //Creates question buttons
        $(".choice" + [i]).append(createButton); 
        $(".choice" + [i]).text(question2Array[i]);
        $(".submitBtn").text("Submit");
    }
}


function question1Func(){
    $(".question").text(question1Array[0]);
    hardForLoop();
}

function question2Func(){
    $(".question").text(question2Array[0]); 
    hardForLoop();
}

function question3Func(){
    $(".question").text(question3Array[0]); 
    hardForLoop();
}

function question4Func(){
    $(".question").text(question4Array[0]); 
    hardForLoop();
}

function question5Func(){
    $(".question").text(question5Array[0]); 
    hardForLoop();
}
    
    

    
//     $(".choice1").text("Strings");
//     $(".choice2").text("Boolean");
//     $(".choice3").text("Alerts");
//     $(".choice4").text("Numbers");
  
// }

// function question2Func(){
//     $(".choice").addClass("btn btn-secondary");
//     $(".question").text("The condition in an if / else statement is enclosed within ____.");
//     $(".choice1").text("Quotes");
//     $(".choice2").text("Curley Braces");
//     $(".choice3").text("Parentheses");
//     $(".choice4").text("Square Brackets");
//     $(".submitBtn").text("Submit");
// }

// function question3Func(){
//     $(".choice").addClass("btn btn-secondary");
//     $(".question").text("Arrays in JavaScript can be used to store ____.");
//     $(".choice1").text("Numbers and Strings");
//     $(".choice2").text("Other arrays");
//     $(".choice3").text("Booleans");
//     $(".choice4").text("All of the above"); 
//     $(".submitBtn").text("Submit");
// }

// function question4Func(){
//     $(".choice").addClass("btn btn-secondary");
//     $(".question").text("String values must be enclosed within ____ when being assigned to variables.");
//     $(".choice1").text("Commas");
//     $(".choice2").text("Curley Braces");
//     $(".choice3").text("Quotes");
//     $(".choice4").text("Parentheses"); 
//     $(".submitBtn").text("Submit");
// }


// function question5Func(){
//     $(".choice").addClass("btn btn-secondary");
//     $(".question").text("A very useful tool used during development and debugging for printing content to the debugger is:");
//     $(".choice1").text("JavaScript");
//     $(".choice2").text("For Loop");
//     $(".choice3").text("Terminal/Bash");
//     $(".choice4").text("Console.log"); 
//     $(".submitBtn").text("Submit");
// }



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
$(".submitBtn").on("click", question2Func);





});
