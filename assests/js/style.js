document.addEventListener("DOMContentLoaded", function(){
    let options = document.getElementsByTagName("button");

    for (let i = 0; i <options.length; i++){
        option1.addEventListener("click" , function(){
            if (this.getAttribute("data-type") === "option1"){
                alert("You clicked Option1");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked Option1`);
            }
        })
    }
})

function runGame(){

}

function checkAnswer(){

}

 function calculateCorrectAnswer(){

 }

 function incrementScore(){

 }

 function incrementWrongAnswer(){

 }

 function displayQuestions(){

 }

 let questions = [
    {
        question: "When did the Jordan 1 release?",
        answer: [
            {text: "1985", correct: true},
            {text:"1984", correct: false},
            {text:"1986", correct: false},
        ]
    }
 ]