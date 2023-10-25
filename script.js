const questions = [
  {
    question: "What is the capital of France?",
    choices: ["London", "Berlin", "Madrid", "Paris"],
    correctAnswer: 3,
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    choices: ["Mars", "Venus", "Jupiter", "Mercury"],
    correctAnswer: 0,
  },
  {
    question: "How many continents are there?",
    choices: ["5", "6", "7", "8"],
    correctAnswer: 1,
  },
  //   Food:

  {
    question: "What is the main ingredient in traditional Japanese miso soup?",
    choices: ["Tofu", "Seaweed", "Miso paste", "Rice"],
    correctAnswer: 2,
  },

  {
    question:
      "Which fruit is known as the 'king of fruits' and has a strong odor?",
    choices: ["Banana", "Durian", "Mango", "Pineapple"],
    correctAnswer: 1,
  },

  {
    question: "What is the primary ingredient in guacamole?",
    choices: ["Tomatoes", "Avocado", "Onions", "Peppers"],
    correctAnswer: 1,
  },

  // History:
  {
    question: "Who was the first President of the United States?",
    choices: [
      "Thomas Jefferson",
      "John Adams",
      "George Washington",
      "Benjamin Franklin",
    ],
    correctAnswer: 2,
  },

  {
    question: "The Renaissance began in which country?",
    choices: ["Italy", "France", "England", "Germany"],
    correctAnswer: 0,
  },

  {
    question:
      "Which Egyptian queen was known for her relationships with Julius Caesar and Mark Antony?",
    choices: ["Cleopatra", "Nefertiti", "Hatshepsut", "Queen Tiye"],
    correctAnswer: 0,
  },

  // Math:
  {
    question: "What is the value of π (pi) to two decimal places?",
    choices: ["3.14", "3.16", "3.18", "3.20"],
    correctAnswer: 0,
  },

  {
    question: "In a right triangle, which side is opposite the right angle?",
    choices: ["Hypotenuse", "Adjacent", "Opposite", "None of the above"],
    correctAnswer: 2,
  },

  {
    question: "What is the result of 8 squared?",
    choices: ["64", "16", "32", "128"],
    correctAnswer: 0,
  },

  // Science:
  {
    question: "Which planet is often referred to as the 'Red Planet'?",
    choices: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
  },

  {
    question: "What is the chemical symbol for gold?",
    choices: ["Go", "Gl", "Gd", "Au"],
    correctAnswer: 3,
  },

  {
    question:
      "What is the process by which plants make their own food using sunlight?",
    choices: ["Photosynthesis", "Respiration", "Fermentation", "Transpiration"],
    correctAnswer: 0,
  },

  // Pop Culture:
  {
    question:
      "Who is the lead character in the 'Harry Potter' book series by J.K. Rowling?",
    choices: [
      "Ron Weasley",
      "Hermione Granger",
      "Albus Dumbledore",
      "Harry Potter",
    ],
    correctAnswer: 3,
  },

  {
    question: "Which animated film features a young lion named Simba?",
    choices: [
      "Finding Nemo",
      "The Lion King",
      "Aladdin",
      "Beauty and the Beast",
    ],
    correctAnswer: 1,
  },

  {
    question: "Who is known as the 'Queen of Pop'?",
    choices: ["Madonna", "Beyoncé", "Lady Gaga", "Taylor Swift"],
    correctAnswer: 0,
  },

  // Music:
  {
    question:
      "Who is the legendary guitarist known for his iconic performance of 'The Star-Spangled Banner' at Woodstock in 1969?",
    choices: ["Jimi Hendrix", "Eric Clapton", "Jimmy Page", "B.B. King"],
    correctAnswer: 0,
  },

  {
    question:
      "Which British rock band released the album 'The Dark Side of the Moon'?",
    choices: [
      "The Rolling Stones",
      "Led Zeppelin",
      "Pink Floyd",
      "The Beatles",
    ],
    correctAnswer: 2,
  },

  {
    question: "What is the title of Adele's debut album?",
    choices: ["21", "25", "19", "Hello"],
    correctAnswer: 2,
  },

  // Art:
  {
    question: "Who painted the Mona Lisa?",
    choices: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Michelangelo",
    ],
    correctAnswer: 2,
  },

  {
    question:
      "Which artistic style is characterized by bold colors and exaggerated forms, as seen in the works of artists like Henri Matisse and André Derain?",
    choices: ["Cubism", "Impressionism", "Fauvism", "Abstract Expressionism"],
    correctAnswer: 2,
  },

  {
    question:
      "Which famous art movement included works like Salvador Dalí's 'The Persistence of Memory' and René Magritte's 'The Treachery of Images'?",
    choices: ["Surrealism", "Romanticism", "Baroque", "Realism"],
    correctAnswer: 0,
  },

  // Literature:
  {
    question: "Who is the author of the 'Harry Potter' series?",
    choices: ["J.R.R. Tolkien", "C.S. Lewis", "Roald Dahl", "J.K. Rowling"],
    correctAnswer: 3,
  },

  {
    question:
      "Which novel by Jane Austen tells the story of Elizabeth Bennet and Mr. Darcy?",
    choices: [
      "Pride and Prejudice",
      "Sense and Sensibility",
      "Emma",
      "Mansfield Park",
    ],
    correctAnswer: 0,
  },

  {
    question: "In George Orwell's '1984,' what is the ruling party's slogan?",
    choices: [
      "War is Peace",
      "Freedom is Slavery",
      "Ignorance is Strength",
      "All of the above",
    ],
    correctAnswer: 3,
  },

  // Movies & TV:
  {
    question: "Who played the character Jack Dawson in the film 'Titanic'?",
    choices: ["Leonardo DiCaprio", "Tom Hanks", "Brad Pitt", "Johnny Depp"],
    correctAnswer: 0,
  },

  {
    question:
      "Which TV series is set in the fictional continents of Westeros and Essos?",
    choices: [
      "Breaking Bad",
      "Game of Thrones",
      "Stranger Things",
      "The Crown",
    ],
    correctAnswer: 1,
  },

  {
    question: "Who directed the 1994 film 'Pulp Fiction'?",
    choices: [
      "Martin Scorsese",
      "Quentin Tarantino",
      "Steven Spielberg",
      "Christopher Nolan",
    ],
    correctAnswer: 1,
  },

  {
    question:
      "Which gas do plants absorb from the atmosphere during photosynthesis?",
    choices: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: 1,
  },

  {
    question: "What is the largest planet in our solar system?",
    choices: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 2,
  },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const resultElement = document.getElementById("result");

function loadQuestion() {
  const current = questions[currentQuestion];
  questionElement.textContent = current.question;
  choicesElement.innerHTML = "";

  for (let i = 0; i < current.choices.length; i++) {
    const choice = document.createElement("button");
    choice.textContent = current.choices[i];
    choice.addEventListener("click", checkAnswer);
    choicesElement.appendChild(choice);
  }
}

function checkAnswer(event) {
  const userChoice = event.target.textContent;
  const correctIndex = questions[currentQuestion].correctAnswer;
  if (userChoice === questions[currentQuestion].choices[correctIndex]) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    displayResult();
  }
}

function displayResult() {
  questionElement.style.display = "none";
  choicesElement.style.display = "none";
  resultElement.textContent = `You scored ${score} out of ${questions.length}!`;
}

document.getElementById("next-button").addEventListener("click", function () {
  if (currentQuestion < questions.length) {
    loadQuestion();
  }
});

loadQuestion();
