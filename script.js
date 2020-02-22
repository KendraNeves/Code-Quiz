$(document).ready(function(){



let score = 0;
let seconds = 60;
let interval = 1000;
let answer;
let questionIndex = 0;
let userAnswer = "";

// Questions

let questions = [
    // EDIT: the first question here had brackets around the prompt that I removed
      {prompt: "Commonly used data types DO NOT include:", options: ["Strings", "Boolean", "Alerts", "Numbers"], answer: "Alerts"},
      {prompt: "The condition in an if / else statement is enclosed within ____.", options: ["Quotes", "Curley Braces", "Parentheses", "Square Brackets"], answer: "Parentheses"},
      {prompt: "Arrays in JavaScript can be used to store ____.", options: ["Numbers and Strings", "Other arrays", "Booleans", "All of the above"], answer: "All of the above"},
      {prompt: "String values must be enclosed within ____ when being assigned to variables.", options: ["Commas", "Curley Braces", "Quotes", "Parentheses"], answer: "Quotes"},
      {prompt: "A very useful tool used during development and debugging for printing content to the debugger is:", options: ["JavaScript", "For Loop", "Terminal/Bash", "Console.log"], answer: "Console.log"}
  ];

let generateQuestion = function(){

    let thisQuestion = questions[questionIndex];

    $(".question").text(thisQuestion.prompt); //prints question @ top
    $(".choice").addClass("btn btn-secondary"); //adds bootstrap button classes

    for (let i = 0; i < thisQuestion.options.length; i++){
        
        let createButton = document.createElement("button"); //Creates question buttons
        $(".choice" + [i+1]).append(createButton); 
        $(".choice" + [i+1]).text(thisQuestion.options[i]);
        $(".submitBtn").text("Submit");
        
         //changes font color when you click on your answer choice
        $(".choice" + [i+1]).click(function(){
            $(this).css("color", "yellow");
            userAnswer = this.text();
            console.log("LOOK " + this.text());
        });
    }   
}

let submitBtnClick = $(".submitBtn").click(function () {
    if (userAnswer == questions[questionIndex].answer) {
        score++;
    }

    questionIndex++;
    if (questionIndex >= questions.length) {
        showResults();
        return;
    }
    generateQuestion();
});

let showResults = function() {

}

//Timer Function
timerFunc = function(){
    let timer = setInterval(function(){
        $(".timer").text("Seconds: " + seconds);
        seconds--;

        if (seconds < 0){
            clearInterval(timer);
            alert("Quiz Over!");
        }  
    }, interval);
};



$(".submitBtn").on("click", generateQuestion);


//On-click event for START QUIZ/SUBMIT button
$(".startBtn").on("click", function(){
    timerFunc();
    generateQuestion();
});




});
