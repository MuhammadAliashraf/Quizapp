const quizData = [{
        question: "Which animal is known as the 'Ship of the Desert?",
        a: " Camel",
        b: "Cow",
        c: "Goat",
        d: "Befflu",
        correct: "a",
    },
    {
        question: "How many days are there in a week?",
        a: "7 Days",
        b: "9 Days",
        c: "6 Days",
        d: "8 Days",
        correct: "a",
    },
    {
        question: "How many hours are there in a day?",
        a: "24 hours",
        b: "14 hours",
        c: "44 hours",
        d: "34 hours",
        correct: "a",
    },
    {
        question: "How many letters are there in the English alphabet?",
        a: " 26 letters",
        b: " 25 letters",
        c: " 29 letters",
        d: " 28 letters",
        correct: "a",
    },
    {
        question: "Rainbow consist of how many colours?",
        a: "7 colours",
        b: "5 colours",
        c: "8 colours",
        d: "9 colours",
        correct: "a",
    },
    {
        question: "Which animal is known as the king of the jungle?",
        a: "Loin",
        b: "Cheeta",
        c: "Hourse",
        d: "Zebra",
        correct: "a",
    },
    {
        question: "How many days are there in a year?",
        a: "365 days",
        b: "366 days",
        c: "364 days",
        d: "361 days",
        correct: "a",
    },
    {
        question: "Name the primary colours?",
        a: "Red, Yellow, and Blue",
        b: "Red, Yellow, and Blue",
        c: "Red, Yellow, and Green",
        d: "Red, Perple, and Blue",
        correct: "a",
    },
    {
        question: "Name the largest planet of our Solar System?",
        a: "Jupiter",
        b: "Mercury",
        c: "Venus",
        d: "Mars",
        correct: "a",
    },
    {
        question: "Name the longest river on the Earth?",
        a: "Casbeian Lake",
        b: "Land Mar",
        c: "Amazon",
        d: "Nile",
        correct: "d",
    }
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}
const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> You Got In This Quiz ${correct} / ${total} </h3>
            <button id="home" onclick="home()" >home</button>
        </div>
    `
}
loadQuestion(index);


// Start Quiz App To next Page 

function StartQuiz(){
    window.location.href="index.html"
}

function home(){
    window.location.href="home.html"
}

