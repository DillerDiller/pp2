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
            {text: "1983", correct: false},
        ]
    },
    {
        question: "Who Designed the Jordan 1",
        answer: [
            {text: "Michael Jordan", correct: false},
            {text:"Tinker Hatfield", correct: false},
            {text:"Phil Knight", correct: false},
            {text: "Peter Moore", correct: true},
        ]
    },
    {
        question: "Who designed the Air Max 1?",
        answer: [
            {text: "Peter Moore", correct: false},
            {text:"Tinker Hatfield", correct: true},
            {text:"Tobie Hatfield", correct: false},
            {text: "Phil Knight", correct: false},
        ]
    },
    {
        question: "Who currently makes Yeezy?",
        answer: [
            {text: "Adidas", correct: true},
            {text:"Nike", correct: false},
            {text:"New Balance", correct: false},
            {text: "Puma", correct: false},
        ]
    },
    {
        question: "William J Riley(founder of New Balance), is from?",
        answer: [
            {text: "United States", correct: true},
            {text:"Ireland", correct: false},
            {text:"England", correct: false},
            {text: "Canada", correct: false},
        ]
    },
 ]