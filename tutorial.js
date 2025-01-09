// Tab functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.dataset.tab;

        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to the clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Accordion functionality
const accordionTitles = document.querySelectorAll('.accordion-title');

accordionTitles.forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;

        // Toggle the accordion
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

// Mock Test Data
// Mock Test Data
const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "HyperText Markup Language",
            "HyperText Machine Language",
            "HyperText Marking Language",
            "HyperTransfer Markup Language"
        ],
        answer: "HyperText Markup Language"
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["<a>", "<link>", "<href>", "<hyper>"],
        answer: "<a>"
    },
    {
        question: "Which attribute is used in HTML to add inline styles?",
        options: ["style", "css", "class", "inline"],
        answer: "style"
    },
    {
        question: "Which of the following is a valid variable declaration in C?",
        options: [
            "int num;",
            "int 1num;",
            "int-num;",
            "int num 10;"
        ],
        answer: "int num;"
    },
    {
        question: "What is the correct syntax to print 'Hello World' in C?",
        options: [
            "print('Hello World');",
            "echo('Hello World');",
            "printf('Hello World');",
            "println('Hello World');"
        ],
        answer: "printf('Hello World');"
    },
    {
        question: "Which of these is NOT a valid data type in C?",
        options: ["float", "boolean", "int", "double"],
        answer: "boolean"
    },
    {
        question: "In C++, which symbol is used for single-line comments?",
        options: ["//", "/*", "#", "--"],
        answer: "//"
    },
    {
        question: "Which of the following is a constructor in C++?",
        options: [
            "A special function to initialize an object",
            "A function to destruct an object",
            "A function to call another function",
            "None of the above"
        ],
        answer: "A special function to initialize an object"
    },
    {
        question: "In C++, which operator is used to access members of a class?",
        options: [".", "->", "::", ":"],
        answer: "."
    },
    {
        question: "Which keyword is used to define a class in Java?",
        options: ["class", "Class", "define", "struct"],
        answer: "class"
    },
    {
        question: "What is the correct syntax for the main method in Java?",
        options: [
            "public static void main(String[] args)",
            "void main(String[] args)",
            "main(String[] args)",
            "public main(String[] args)"
        ],
        answer: "public static void main(String[] args)"
    },
    {
        question: "In Java, which keyword is used to inherit a class?",
        options: ["extends", "inherits", "super", "this"],
        answer: "extends"
    },
    {
        question: "Which HTML tag is used to define a table row?",
        options: ["<tr>", "<td>", "<th>", "<row>"],
        answer: "<tr>"
    },
    {
        question: "Which of the following is used to declare a pointer in C?",
        options: ["*", "&", "^", "$"],
        answer: "*"
    },
    {
        question: "Which HTML attribute is used to specify the path of an image?",
        options: ["src", "href", "alt", "path"],
        answer: "src"
    }
];


const quizContainer = document.getElementById("quiz-container");
const submitBtn = document.getElementById("submit-btn");
const resultDisplay = document.getElementById("result");

// Display Questions
questions.forEach((q, index) => {
    const questionElem = document.createElement("div");
    questionElem.innerHTML = `
        <p>${index + 1}. ${q.question}</p>
        ${q.options
            .map(
                option => `
            <label>
                <input type="radio" name="question${index}" value="${option}">
                ${option}
            </label>
        `
            )
            .join("")}
    `;
    quizContainer.appendChild(questionElem);
});

// Handle Submit Button Click
submitBtn.addEventListener("click", () => {
    let score = 0;

    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(
            'input[name="question${index}"]:checked'
        );
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });

    resultDisplay.textContent = `Your score: ${score} / ${questions.length}`;
});