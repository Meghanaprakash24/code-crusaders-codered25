// Enhanced chatbot script with advanced interaction
let currentStage = "onboarding"; // Start at onboarding stage
let userResponses = {}; // Store user responses for processing

function appendMessage(text, sender) {
    const chatOutput = document.getElementById("chat-output");
    const newMessage = document.createElement("div");
    newMessage.classList.add(sender);
    newMessage.innerText = text;
    chatOutput.appendChild(newMessage);
    chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to bottom
}

function showTypingIndicator() {
    const chatOutput = document.getElementById("chat-output");
    const typingDiv = document.createElement("div");
    typingDiv.classList.add("bot", "typing-indicator");
    typingDiv.innerHTML = '<span></span><span></span><span></span>';
    typingDiv.id = "typing-indicator";
    chatOutput.appendChild(typingDiv);
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

function hideTypingIndicator() {
    const typingDiv = document.getElementById("typing-indicator");
    if (typingDiv) typingDiv.remove();
}

function processUserInput() {
    const userText = document.getElementById("user-text").value;
    if (userText === "") return;

    appendMessage(userText, "user");
    document.getElementById("user-text").value = "";

    showTypingIndicator();
    setTimeout(() => {
        hideTypingIndicator();
        switch (currentStage) {
            case "onboarding":
                handleOnboarding(userText);
                break;
            case "quiz":
                handleQuiz(userText);
                break;
            case "result":
                handleResult(userText);
                break;
            default:
                appendMessage("Sorry, something went wrong.", "bot");
        }
    }, 1000); // Simulate typing delay
}

function handleOnboarding(userText) {
    if (!userResponses.name) {
        userResponses.name = userText;
        appendMessage(`Hello ${userText}! Welcome to your career assistant.`, "bot");
        appendMessage("To get started, please tell me your education level (e.g., High School, Bachelor\'s, Master\'s).", "bot");
    } else {
        userResponses.education = userText;
        appendMessage("Great! Let\'s move to a quick quiz to understand your interests.", "bot");
        currentStage = "quiz";
        showQuizQuestions();
    }
}

function showQuizQuestions() {
    const questions = [
        { question: "What subjects or activities do you enjoy the most?", options: ["Technology", "Design", "Business", "Health"] },
        { question: "Do you prefer working individually or in a team?", options: ["Individual", "Team"] },
        { question: "Rate your preference for work-life balance (1-5)", options: [1, 2, 3, 4, 5] }
    ];

    const nextQuestion = questions.find(q => !userResponses[q.question]);
    if (nextQuestion) {
        askQuestion(nextQuestion);
    } else {
        appendMessage("Thank you for completing the quiz!", "bot");
        currentStage = "result";
        displayResults();
    }
}

function askQuestion(question) {
    const chatOutput = document.getElementById("chat-output");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("bot");

    const questionHtml = `<strong>${question.question}</strong><br/> `+
        question.options.map(option => `<button onclick="captureResponse('${question.question}', '${option}')">${option}</button>`).join("<br/>");

    messageDiv.innerHTML = questionHtml;
    chatOutput.appendChild(messageDiv);
    chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to bottom
}

function captureResponse(question, response) {
    userResponses[question] = response;
    appendMessage(response, "user");
    nextStep();
}

function nextStep() {
    setTimeout(() => {
        showQuizQuestions();
    }, 500);
}

function displayResults() {
    const interests = userResponses["What subjects or activities do you enjoy the most?"] || "varied fields";
    const personality = userResponses["Do you prefer working individually or in a team?"] || "a balanced work style";
    const values = userResponses["Rate your preference for work-life balance (1-5)"] || "neutral";

    const recommendedCareers = `Based on your responses, we recommend exploring careers in: ${interests}. Your preference for ${personality} and work-life balance indicates roles like Software Developer, UX Designer, or Project Manager.`;

    appendMessage(recommendedCareers, "bot");
    appendMessage("Would you like to explore learning resources or prepare for interviews? Let me know!", "bot");
}