let questions = [
    {prompt: "Commonly used data types DO NOT include:", options: ["Strings", "Boolean", "Alerts", "Numbers"], answer: [options[2]]},
    {prompt: "The condition in an if / else statement is enclosed within ____.", options: ["Quotes", "Curley Braces", "Parentheses", "Square Brackets"], answer: options[1]},
    {prompt: "Arrays in JavaScript can be used to store ____.", options: ["Numbers and Strings", "Other arrays", "Booleans", "All of the above"], answer: options[3]},
    {prompt: "String values must be enclosed within ____ when being assigned to variables.", options: ["Commas", "Curley Braces", "Quotes", "Parentheses"], answer: options[2]},
    {prompt: "A very useful tool used during development and debugging for printing content to the debugger is:", options: ["JavaScript", "For Loop", "Terminal/Bash", "Console.log"], answer: options[3]}
];


let questionIndex = 0;


let questions = [
    // EDIT: the first question here had brackets around the prompt that I removed
      {prompt: "Commonly used data types DO NOT include:", options: ["Strings", "Boolean", "Alerts", "Numbers"], answer: [options[2]]},
      {prompt: "The condition in an if / else statement is enclosed within ____.", options: ["Quotes", "Curley Braces", "Parentheses", "Square Brackets"], answer: options[1]},
      {prompt: "Arrays in JavaScript can be used to store ____.", options: ["Numbers and Strings", "Other arrays", "Booleans", "All of the above"], answer: options[3]},
      {prompt: "String values must be enclosed within ____ when being assigned to variables.", options: ["Commas", "Curley Braces", "Quotes", "Parentheses"], answer: options[2]},
      {prompt: "A very useful tool used during development and debugging for printing content to the debugger is:", options: ["JavaScript", "For Loop", "Terminal/Bash", "Console.log"], answer: options[3]}
  ];

  let questionArrays = [questionArray1, questionArray2, questionArray3, questionArray4, questionArray5];


let questionIndex = 0;
 
let generateQuestion = function(){
 
    let thisQuestion = questions[questionIndex];
 
    // EDIT: change thisQuestion[0] to thisQuestion.prompt
    $(".question").text(thisQuestion.prompt);
 
    // EDIT: i starts at 0, and goes up to the length of thisQuestion.options instead of thisQuestion
    for (let i = 0; i < thisQuestion.options.length; i++){
 
        $(".choice").addClass("btn btn-secondary"); //adds bootstrap button classes
        let createButton = document.createElement("button"); //Creates question buttons
        $(".choice" + [i]).append(createButton); 
 
        // EDIT: thisQuestion.options instead of thisQuestion
        $(".choice" + [i]).text(thisQuestion.options[i]);
        $(".submitBtn").text("Submit");
        //add on click event for .choice button
    }
}


let thisQuestion = questions[questionIndex];

let generateQuestion = function(){
    $(".question").text(thisQuestion[0]);
    
    for (let i = 1; i < thisQuestion.length; i++){
        
        $(".choice").addClass("btn btn-secondary"); //adds bootstrap button classes
        let createButton = document.createElement("button"); //Creates question buttons
        $(".choice" + [i]).append(createButton); 
        $(".choice" + [i]).text(thisQuestion[i]);
        $(".submitBtn").text("Submit");
        
         //changes font color when you click on your answer choice
        $(".choice").click(function(){
            $(this).css("color", "yellow");
        });

       
    }
}

function question1Func(){
    generateQuestion();
}

function question2Func(){
    $(".question").text(question2Array[0]); 
    generateQuestion();
}

function question3Func(){
    $(".question").text(question3Array[0]); 
    generateQuestion();
}

function question4Func(){
    $(".question").text(question4Array[0]); 
    generateQuestion();
}

function question5Func(){
    $(".question").text(question5Array[0]); 
    generateQuestion();
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
