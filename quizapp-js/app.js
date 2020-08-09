
 var quiz = [
    {
      "question": "What amount of bits commonly equals one byte?",
      "correct_answer": "8",
      "incorrect_answers": [
        "1",
        "2",
        "64",
        "8"
      ]
    },
    {
      "question": "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      "correct_answer": "Final",
      "incorrect_answers": [
        "Static",
        "Private",
        "Final",
        "Public"
      ]
    },
    {
      "question": "What is the most preferred image format used for logos in the Wikimedia database?",
      "correct_answer": ".svg",
      "incorrect_answers": [
        ".png",
        ".svg",
        ".jpeg",
        ".gif"
      ]
    },
    {
      "question": "Which programming language shares its name with an island in Indonesia?",
      "correct_answer": "Java",
      "incorrect_answers": [
        "Java",
        "Python",
        "C",
        "Jakarta"
      ]
    },
    {
      "question": "What does the computer software acronym JVM stand for?",
      "correct_answer": "Java Virtual Machine",
      "incorrect_answers": [
        "Java Vendor Machine",
        "Java Visual Machine",
        "Just Virtual Machine",
        "Java Virtual Machine"
      ]
    }
  ]
  console.log(quiz[1].question)

  var currentStep= 0;
  var score = 0;

  var scoreBox = document.getElementById('score-box');
  var Box = document.getElementById('box');
  var showScore = document.getElementById('score');


  var question = document.getElementById('question');
  var options = document.querySelectorAll('#option')
  
  scoreBox.style.display = "none";

  function ShowQuiz(){

     question.innerText = quiz[currentStep].question; 
    
    console.log(quiz[3].question) 
    console.log(options[0]);     
    for(var i=0; i<quiz[0].incorrect_answers.length; i++){
        //  console.log(options);
         options[i].childNodes[1].value=quiz[currentStep].incorrect_answers[i]
         options[i].childNodes[2].textContent=quiz[currentStep].incorrect_answers[i]
        if(options[i].childNodes[1].checked){
                   if(options[i].childNodes[1].value==quiz[currentStep].correct_answer){
                       console.log("gsggs")
                       score++;
                   }
                  console.log(options[i].childNodes[1].value)
                  console.log(quiz[currentStep].correct_answer)
            

           
        }
    }
  }

  function Next(){
      currentStep++;
      if(currentStep==5){
          scoreBox.style.display="block"
          Box.style.display = "none";
          showScore.innerText= "Score is "+score+" out of "+quiz.length;
      }
      ShowQuiz();
      
      console.log(score)
  }

  function PlayAgain(){
    currentStep = 0;
    score = 0;
    scoreBox.style.display = "none"
    Box.style.display = "block";

  }