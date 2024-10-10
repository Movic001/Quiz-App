let score=0;
let currentQuestion=0;

const data = [
    {
        question:'which of this is not a programming language?',
        option:['html', 'css', 'mathematics', 'javascript'],
        correct: 2
    },
    {
      question:'who is the president of nigeria?',
      option:['muhammed', 'tinibu', 'movic', 'ibrahim'],
      correct: 1
    },

      {
        question:'what is the full meaning of HTML?',
        option:['hyper text markup', 'markup language', 'hyper text markup language', 'none of the above'],
        correct: 2
    },
    {
      question:'what is the full meaning of CSS?',
      option:['cascarding season style', 'cascarding style season', 'stylesheet', 'carscading stylesheet'],
      correct: 3
  },
      {
        question:'programming is all about?',
        option:['thinking,writing code', 'playing arround with computer', 'gisting arround ', 'none of the above'],
        correct: 0
    }
]

function loadedQuestion(){
    const questionData =data[currentQuestion] 

    document.getElementById('question1').innerText=questionData.question
    document.getElementById('html').innerText=questionData.option[0]
    document.getElementById('css').innerText=questionData.option[1]
    document.getElementById('mathematics').innerText=questionData.option[2]
    document.getElementById('javascript').innerText=questionData.option[3]
}
  
  function next() {
    selectedValue = document.querySelector('input[name="content"]:checked');

    if (selectedValue === null) {
      alert('select an option')
      return;

    }

     if (parseInt(selectedValue.value) === data[currentQuestion].correct) {
      score++;
    }

    currentQuestion++

    if(currentQuestion < data.length){
      loadedQuestion()
      selectedValue.checked=false
    }
    document.getElementById('total-score').innerText=score;
  }
  
  loadedQuestion()

  function checkResult(){
    //let question4=document.getElementById('first question');
    //let question2=document.getElementById('second question');
    //let questionn3=document.getElementById('third question');
    let finalResult=document.getElementById('total-score');
    let correct1=finalResult.innerText=data[currentQuestion].correct

      
      if(correct1){
        correct1++
      }


    //if (parseInt(selectedValue.value) === data[currentQuestion].correct) {
   // }

  }
  