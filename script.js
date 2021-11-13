//varastoidaan HTML elementit
const questionLabel = document.getElementById("questionText");
const answerLabel = document.getElementById("answer");
const button1 = document.getElementById("nappi1");
const button2 = document.getElementById("nappi2");
const button3 = document.getElementById("nappi3");
const button4 = document.getElementById("nappi4");
//
//
var questions = [
  {
    question: "Mikä on Suomen pääkaupunki?",
    rightAnswer: "Helsinki",
    wrongs: ["Oulu", "Rovaniemi", "Turku"]
  },
  {
    question: "Mikä on Ruotsin pääkaupunki?",
    rightAnswer: "Tukholma",
    wrongs: ["Haaparanta", "Oslo", "Vantaa"]
  }
];
var currentQuestion;
//
function askQuestion() {
  var randomIndex = Math.floor(Math.random() * questions.length);
  currentQuestion = questions[randomIndex];

  var buttons = shuffle([button1, button2, button3, button4]);
  buttons[0].innerHTML = currentQuestion.rightAnswer;
  buttons[1].innerHTML = currentQuestion.wrongs[0];
  buttons[2].innerHTML = currentQuestion.wrongs[1];
  buttons[3].innerHTML = currentQuestion.wrongs[2];

  questionLabel.innerHTML = currentQuestion.question;
}
askQuestion();
//
function answerHandler() {
  answerLabel.innerHTML = "Vastaus oli: " + currentQuestion.rightAnswer;
  askQuestion();
}
//
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
//harjoitus kesken, jossain koodissa virhe
