$(document).ready(function(){



let score = 0;
let seconds = 60;
let interval = 1000;
let answer;
let questionIndex = 0;

// Questions

let questions = [
    // EDIT: the first question here had brackets around the prompt that I removed
      {prompt: "Commonly used data types DO NOT include:", options: ["Strings", "Boolean", "Alerts", "Numbers"], answer},
      {prompt: "The condition in an if / else statement is enclosed within ____.", options: ["Quotes", "Curley Braces", "Parentheses", "Square Brackets"], answer},
      {prompt: "Arrays in JavaScript can be used to store ____.", options: ["Numbers and Strings", "Other arrays", "Booleans", "All of the above"], answer},
      {prompt: "String values must be enclosed within ____ when being assigned to variables.", options: ["Commas", "Curley Braces", "Quotes", "Parentheses"], answer},
      {prompt: "A very useful tool used during development and debugging for printing content to the debugger is:", options: ["JavaScript", "For Loop", "Terminal/Bash", "Console.log"], answer}
  ];








let generateQuestion = function(){

    let thisQuestion = questions[questionIndex];

    $(".question").text(thisQuestion.prompt); //prints question @ top


    for (let i = 0; i < thisQuestion.options.length; i++){
        
        $(".choice").addClass("btn btn-secondary"); //adds bootstrap button classes
        let createButton = document.createElement("button"); //Creates question buttons
        $(".choice" + [i]).append(createButton); 
        $(".choice" + [i]).text(thisQuestion.options[i]);
        $(".submitBtn").text("Submit");
        
         //changes font color when you click on your answer choice
        $(".choice").click(function(){
            $(this).css("color", "yellow");
        });
        console.log("you're AMAZING!");
    

        if(submitBtnClick){
            console.log("ho");
        }
        break;
    }
    
}

let submitBtnClick = $(".submitBtn").click(function(){
    questionIndex++;
    generateQuestion;

})

//     //if thisQuestion

// }

// let clickSubmit = function(){
//     for(let i = 0; i < questionArrays.length; i++){
//         generateQuestion(questionArrays[i]);
//         // $(".submitBtn").on("click", clickSubmit);
//     }
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
    };



$(".submitBtn").on("click", generateQuestion);


//On-click event for START QUIZ/SUBMIT button
$(".submitBtn").on("click", function(){
    timerFunc;
    submitBtnClick;
});




});
