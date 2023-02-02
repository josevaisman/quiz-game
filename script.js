const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris"
  },
  {
    question: "What is the highest mountain in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    answer: "Mount Everest"
  },
  {
    question: "Who is the inventor of the World Wide Web?",
    options: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
    answer: "Tim Berners-Lee"
  }
];

let currentQuestion = 0;
const submitBtn = $("#submit");
const optionsForm = $("#optionsForm");
const questionDiv = $("#question");
const resultDiv = $("#result");

function displayQuestion() {
  const current = questions[currentQuestion];
  questionDiv.text(current.question);
  optionsForm.empty();
  for (const option of current.options) {
    optionsForm.append(`<input type="radio" name="option" value="${option}">${option}<br>`);
  }
}

submitBtn.click(function(event) {
  event.preventDefault();
  const selectedOption = $("input[name='option']:checked").val();
  if (selectedOption === questions[currentQuestion].answer) {
    resultDiv.text("Correct!");
  } else {
    resultDiv.text
    "Incorrect, the correct answer is " + questions[currentQuestion].answer + ".");
  }
  currentQuestion++;
  if (currentQuestion === questions.length) {
    submitBtn.hide();
  } else {
    displayQuestion();
  }
});

displayQuestion();

