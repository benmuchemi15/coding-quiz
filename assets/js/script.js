function startQuiz(){
    // variable to store output
    const quiz = [];

    //questions
    theQuestions.array.forEach((currentQuestion, questionNumber) => {
        
        // variable for possible answers
        const answer = [];

        for(letter in currentQuestion.answer){
            answer.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
        }

        answer.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
        )
    });

    contQuiz.innerHtml = output.join('');
}
// answers from the quiz
function theResults(){
    let correctNum = 0

    // for each question...
    theQuestions.forEach( (currentQuestion, questionNumber) => {
        // find selected answer
        const ansContainer = ansContainers[questionNumber];
        const userAnswer = (ansContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
        }
    });
  
      
}

//
const myQuestions = [
    {
      question: "Commonly Used data types do not include",
      answers: {
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers"
      },
      correctAnswer: "c"
    },
    {
      question: "The condition in an if/else statement is enclosed with?",
      answers: {
        a: "quotes",
        b: "curly brackets",
        c: "parentheses",
        d: "square brackets"
      },
      correctAnswer: "c"
    },
    {
      question: "String Values must be enclosed within____ when being assigned to variables",
      answers: {
        a: "commas",
        b: "curly brackets",
        c: "quotes",
        d: "parenthes"
      },
      correctAnswer: "d"
    },
    {
        question: "A ver uselful tool used during development and debugging for printing content to debugger is:",
        answers: {
          a: "JavaScript",
          b: "terminl",
          c: "loops",
          d: "console.log"
        },
        correctAnswer: "d"
      },
      {
       
      }
    
  ];