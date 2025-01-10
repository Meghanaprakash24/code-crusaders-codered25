// Enhanced interview questions dataset with 50 questions each
const interviewQuestions = {
    technical: [
        // JavaScript Questions
        {
            question: "What is the difference between let, const, and var in JavaScript?",
            expectedAnswer: ["block scope", "hoisting", "reassignment", "temporal dead zone"],
            followUp: "Can you provide an example of when you would use each?"
        },
        {
            question: "Explain event bubbling and event capturing in JavaScript.",
            expectedAnswer: ["propagation", "parent elements", "target phase", "addEventListener"],
            followUp: "How can you stop event propagation?"
        },
        // ... (adding more JavaScript questions)
        
        // React Questions
        {
            question: "What are React Hooks and why were they introduced?",
            expectedAnswer: ["functional components", "state management", "lifecycle", "useEffect", "useState"],
            followUp: "Can you explain the rules of Hooks?"
        },
        {
            question: "Explain the Virtual DOM concept in React.",
            expectedAnswer: ["performance", "reconciliation", "diffing algorithm", "actual DOM"],
            followUp: "How does React's diffing algorithm work?"
        },
        
        // Database Questions
        {
            question: "Explain the difference between SQL and NoSQL databases.",
            expectedAnswer: ["schema", "scalability", "structure", "ACID", "flexibility"],
            followUp: "When would you choose one over the other?"
        },
        // ... (adding more database questions)
        
        // System Design Questions
        {
            question: "How would you design a URL shortening service?",
            expectedAnswer: ["hashing", "database", "scalability", "caching", "load balancing"],
            followUp: "How would you handle concurrent requests?"
        },
        {
            question: "What is the difference between let, const, and var in JavaScript?",
            expectedAnswer: ["block scope", "hoisting", "reassignment", "temporal dead zone"],
            followUp: "Can you provide an example of when you would use each?"
        },
        {
            question: "Explain event bubbling and event capturing in JavaScript.",
            expectedAnswer: ["propagation", "parent elements", "target phase", "addEventListener"],
            followUp: "How can you stop event propagation?"
        },
        // React Questions
        {
            question: "What are React Hooks and why were they introduced?",
            expectedAnswer: ["functional components", "state management", "lifecycle", "useEffect", "useState"],
            followUp: "Can you explain the rules of Hooks?"
        },
        // Database Questions
        {
            question: "Explain the difference between SQL and NoSQL databases.",
            expectedAnswer: ["schema", "scalability", "structure", "ACID", "flexibility"],
            followUp: "When would you choose one over the other?"
        },
        // System Design Questions
        {
            question: "How would you design a URL shortening service?",
            expectedAnswer: ["hashing", "database", "scalability", "caching", "load balancing"],
            followUp: "How would you handle concurrent requests?"
        },
        // Python Questions
        {
            question: "What are Python decorators, and how are they used?",
            expectedAnswer: ["higher-order functions", "wrapping", "modifying behavior", "reuse"],
            followUp: "Can you provide an example of creating a custom decorator?"
        },
        {
            question: "Explain Python's GIL (Global Interpreter Lock).",
            expectedAnswer: ["thread safety", "CPython", "multi-threading", "performance"],
            followUp: "How does the GIL affect multi-threaded applications?"
        },
        {
            question: "What is the difference between shallow copy and deep copy in Python?",
            expectedAnswer: ["mutable objects", "copy module", "nested objects", "references"],
            followUp: "Can you demonstrate using the `copy` module for both?"
        },
        // C++ Questions
        {
            question: "What are smart pointers in C++?",
            expectedAnswer: ["memory management", "std::unique_ptr", "std::shared_ptr", "RAII"],
            followUp: "When would you use a shared pointer over a unique pointer?"
        },
        {
            question: "Explain the concept of virtual functions in C++.",
            expectedAnswer: ["polymorphism", "runtime behavior", "vtable", "overriding"],
            followUp: "What is the difference between a virtual function and a pure virtual function?"
        },
        // Data Structures Questions
        {
            question: "What is the difference between a stack and a queue?",
            expectedAnswer: ["LIFO", "FIFO", "push", "pop", "enqueue", "dequeue"],
            followUp: "Can you describe real-world use cases for each?"
        },
        {
            question: "What are binary search trees (BST), and why are they useful?",
            expectedAnswer: ["sorted data", "logarithmic search", "in-order traversal", "balanced trees"],
            followUp: "What happens when a BST becomes unbalanced?"
        },
        // Algorithm Questions
        {
            question: "What is the time complexity of quicksort, and why?",
            expectedAnswer: ["divide and conquer", "pivot", "O(n log n)", "worst-case O(n^2)"],
            followUp: "How can you avoid the worst-case scenario?"
        },
        {
            question: "Explain Dijkstra's algorithm and its applications.",
            expectedAnswer: ["shortest path", "graph traversal", "priority queue", "weights"],
            followUp: "What are the limitations of Dijkstra's algorithm?"
        },
        // Cloud Computing Questions
        {
            question: "What is the difference between IaaS, PaaS, and SaaS?",
            expectedAnswer: ["infrastructure", "platform", "software", "cloud services"],
            followUp: "Can you give examples of providers for each model?"
        },
        {
            question: "How does a load balancer work in a cloud environment?",
            expectedAnswer: ["traffic distribution", "auto-scaling", "availability", "latency"],
            followUp: "What are the benefits of using a cloud-based load balancer?"
        },
        // Machine Learning Questions
        {
            question: "What is the difference between supervised and unsupervised learning?",
            expectedAnswer: ["labeled data", "patterns", "classification", "clustering"],
            followUp: "Can you give examples of algorithms for each type?"
        },
        {
            question: "What is overfitting in machine learning, and how can it be prevented?",
            expectedAnswer: ["high variance", "regularization", "cross-validation", "simpler models"],
            followUp: "What are some trade-offs when applying regularization techniques?"
        },
        // Additional General Technical Questions
        {
            question: "What is the difference between REST and GraphQL APIs?",
            expectedAnswer: ["resource-based", "query language", "flexibility", "data fetching"],
            followUp: "When would you prefer GraphQL over REST?"
        },
        {
            question: "Explain the concept of containerization with Docker.",
            expectedAnswer: ["isolation", "images", "containers", "orchestration"],
            followUp: "What is the role of Docker Compose in managing containers?"
        }
        // ... (continuing with 50 total technical questions)
    ],

    behavioral: [
        // Leadership Questions
        {
            question: "Tell me about a time when you had to lead a project with a difficult team member.",
            expectedKeywords: ["leadership", "conflict resolution", "communication", "outcome", "strategy"],
            followUp: "What would you do differently next time?"
        },
        {
            question: "Describe a situation where you had to make an unpopular decision.",
            expectedKeywords: ["decision-making", "reasoning", "impact", "stakeholders", "results"],
            followUp: "How did you handle the aftermath?"
        },
        
        // Problem-Solving Questions
        {
            question: "Tell me about a time when you faced a significant technical challenge.",
            expectedKeywords: ["analysis", "solution", "implementation", "learning", "outcome"],
            followUp: "What key lessons did you learn?"
        },
        {
            question: "Tell me about a time when you had to lead a project with a difficult team member.",
            expectedKeywords: ["leadership", "conflict resolution", "communication", "outcome", "strategy"],
            followUp: "What would you do differently next time?"
        },
        {
            question: "Describe a situation where you had to make an unpopular decision.",
            expectedKeywords: ["decision-making", "reasoning", "impact", "stakeholders", "results"],
            followUp: "How did you handle the aftermath?"
        },
        {
            question: "Can you share an example of when you motivated a team during a challenging project?",
            expectedKeywords: ["motivation", "teamwork", "goals", "challenges", "results"],
            followUp: "What strategies worked best?"
        },
        {
            question: "Tell me about a time you delegated tasks effectively.",
            expectedKeywords: ["delegation", "trust", "team", "responsibility", "outcome"],
            followUp: "How did you ensure success?"
        },

        // Problem-Solving Questions
        {
            question: "Tell me about a time when you faced a significant technical challenge.",
            expectedKeywords: ["analysis", "solution", "implementation", "learning", "outcome"],
            followUp: "What key lessons did you learn?"
        },
        {
            question: "Describe a situation where you solved a problem creatively.",
            expectedKeywords: ["innovation", "thinking outside the box", "strategy", "impact", "outcome"],
            followUp: "What made your approach successful?"
        },
        {
            question: "Share an example of a decision you made under time pressure.",
            expectedKeywords: ["time management", "critical thinking", "decision-making", "outcome"],
            followUp: "Would you approach it differently now?"
        },
        {
            question: "Have you ever had to troubleshoot an issue with incomplete information?",
            expectedKeywords: ["problem-solving", "uncertainty", "analysis", "decision-making"],
            followUp: "How did you prioritize your actions?"
        },

        // Teamwork Questions
        {
            question: "Tell me about a time you collaborated with someone whose working style was different from yours.",
            expectedKeywords: ["collaboration", "adaptability", "team dynamics", "communication"],
            followUp: "What did you learn from the experience?"
        },
        {
            question: "Describe a situation where you resolved a conflict within a team.",
            expectedKeywords: ["conflict resolution", "mediation", "communication", "results"],
            followUp: "How did you ensure lasting harmony?"
        },
        {
            question: "Can you share an example of working on a team where you took a supportive role?",
            expectedKeywords: ["teamwork", "support", "collaboration", "impact", "success"],
            followUp: "What was your biggest takeaway?"
        },
        {
            question: "Tell me about a time when your team failed to meet a goal.",
            expectedKeywords: ["failure", "lessons", "teamwork", "improvement", "reflection"],
            followUp: "What changes did you implement afterward?"
        },

        // Adaptability Questions
        {
            question: "Describe a situation where you had to adjust quickly to a major change.",
            expectedKeywords: ["adaptability", "flexibility", "response", "outcome"],
            followUp: "What steps did you take to adapt effectively?"
        },
        {
            question: "Tell me about a time when you had to learn a new skill quickly.",
            expectedKeywords: ["learning", "adaptability", "time management", "results"],
            followUp: "How did this experience prepare you for future challenges?"
        },
        {
            question: "Can you provide an example of handling unexpected obstacles in a project?",
            expectedKeywords: ["problem-solving", "adaptability", "creativity", "outcome"],
            followUp: "What did you learn from managing the situation?"
        },
        {
            question: "Share an experience where you took on a role outside of your comfort zone.",
            expectedKeywords: ["growth", "risk-taking", "adaptability", "results"],
            followUp: "How did this impact your career?"
        },

        // Conflict Resolution Questions
        {
            question: "Tell me about a time when you disagreed with a colleague.",
            expectedKeywords: ["disagreement", "resolution", "communication", "compromise"],
            followUp: "How did you maintain a positive relationship afterward?"
        },
        {
            question: "Describe a situation where you had to mediate a dispute between team members.",
            expectedKeywords: ["mediation", "neutrality", "resolution", "team harmony"],
            followUp: "What strategies were most effective?"
        },
        {
            question: "Can you share an example of dealing with a difficult client or customer?",
            expectedKeywords: ["customer service", "conflict resolution", "communication", "results"],
            followUp: "How did you turn the situation around?"
        },
        {
            question: "Tell me about a time you had to address underperformance in a team.",
            expectedKeywords: ["feedback", "coaching", "improvement", "results"],
            followUp: "What was the outcome, and what did you learn?"
        },

        // Initiative Questions
        {
            question: "Tell me about a time you identified a process that could be improved.",
            expectedKeywords: ["initiative", "efficiency", "problem-solving", "results"],
            followUp: "What was the outcome of your improvement efforts?"
        },
        {
            question: "Describe a situation where you went beyond your responsibilities to complete a task.",
            expectedKeywords: ["initiative", "dedication", "results", "impact"],
            followUp: "What motivated you to take the extra step?"
        },
        {
            question: "Can you share an example of a time when you proposed a new idea to your team?",
            expectedKeywords: ["innovation", "proposal", "team collaboration", "results"],
            followUp: "How was your idea implemented, and what was its impact?"
        },

        // Time Management Questions
        {
            question: "Describe a time when you had to manage multiple priorities.",
            expectedKeywords: ["time management", "prioritization", "deadlines", "results"],
            followUp: "How did you determine what to prioritize?"
        },
        {
            question: "Tell me about a time you missed a deadline and how you handled it.",
            expectedKeywords: ["accountability", "time management", "lessons", "improvement"],
            followUp: "What steps have you taken to avoid similar situations in the future?"
        },
        {
            question: "Can you provide an example of a time you successfully met a tight deadline?",
            expectedKeywords: ["time management", "efficiency", "strategy", "results"],
            followUp: "What strategies helped you stay on track?"
        },
        // ... (continuing with 50 total behavioral questions)
    ],

    coding: [
        // Array/String Manipulation
        {
            question: "Implement a function to find all pairs in an array that sum to a given target.",
            expectedSolution: `function findPairs(arr, target) {
                const pairs = [];
                const seen = new Set();
                for(let num of arr) {
                    if(seen.has(target - num)) {
                        pairs.push([num, target - num]);
                    }
                    seen.add(num);
                }
                return pairs;
            }`,
            testCases: [
                { input: "[1, 5, 6, 1, 0, 1], 6", output: "[[1,5], [0,6]]" },
                { input: "[3, 3], 6", output: "[[3,3]]" }
            ]
        },
        {
            question: "Implement a function to find all pairs in an array that sum to a given target.",
            expectedSolution: `function findPairs(arr, target) {
                const pairs = [];
                const seen = new Set();
                for(let num of arr) {
                    if(seen.has(target - num)) {
                        pairs.push([num, target - num]);
                    }
                    seen.add(num);
                }
                return pairs;
            }`,
            testCases: [
                { input: "[1, 5, 6, 1, 0, 1], 6", output: "[[1,5], [0,6]]" },
                { input: "[3, 3], 6", output: "[[3,3]]" }
            ]
        },
        {
            question: "Write a function to reverse a string without using built-in methods.",
            expectedSolution: `function reverseString(str) {
                let reversed = '';
                for (let i = str.length - 1; i >= 0; i--) {
                    reversed += str[i];
                }
                return reversed;
            }`,
            testCases: [
                { input: '"hello"', output: '"olleh"' },
                { input: '"world"', output: '"dlrow"' }
            ]
        },

        // Sorting
        {
            question: "Implement the quicksort algorithm.",
            expectedSolution: `function quickSort(arr) {
                if (arr.length <= 1) return arr;
                const pivot = arr[arr.length - 1];
                const left = [];
                const right = [];
                for (let i = 0; i < arr.length - 1; i++) {
                    if (arr[i] < pivot) left.push(arr[i]);
                    else right.push(arr[i]);
                }
                return [...quickSort(left), pivot, ...quickSort(right)];
            }`,
            testCases: [
                { input: "[3, 1, 4, 1, 5, 9]", output: "[1, 1, 3, 4, 5, 9]" },
                { input: "[5, 4, 3, 2, 1]", output: "[1, 2, 3, 4, 5]" }
            ]
        },

        // Linked Lists
        {
            question: "Write a function to detect a cycle in a linked list.",
            expectedSolution: `function hasCycle(head) {
                let slow = head;
                let fast = head;
                while (fast && fast.next) {
                    slow = slow.next;
                    fast = fast.next.next;
                    if (slow === fast) return true;
                }
                return false;
            }`,
            testCases: [
                { input: "head = [3,2,0,-4], pos = 1", output: "true" },
                { input: "head = [1,2], pos = -1", output: "false" }
            ]
        },

        // Dynamic Programming
        {
            question: "Find the length of the longest increasing subsequence in an array.",
            expectedSolution: `function lengthOfLIS(nums) {
                const dp = Array(nums.length).fill(1);
                for (let i = 1; i < nums.length; i++) {
                    for (let j = 0; j < i; j++) {
                        if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
                    }
                }
                return Math.max(...dp);
            }`,
            testCases: [
                { input: "[10, 9, 2, 5, 3, 7, 101, 18]", output: "4" },
                { input: "[0, 1, 0, 3, 2, 3]", output: "4" }
            ]
        },

        // Binary Trees
        {
            question: "Find the maximum depth of a binary tree.",
            expectedSolution: `function maxDepth(root) {
                if (!root) return 0;
                return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
            }`,
            testCases: [
                { input: "root = [3,9,20,null,null,15,7]", output: "3" },
                { input: "root = [1,null,2]", output: "2" }
            ]
        },

        // Graphs
        {
            question: "Implement a function to check if a graph is bipartite.",
            expectedSolution: `function isBipartite(graph) {
                const colors = Array(graph.length).fill(-1);
                const dfs = (node, color) => {
                    if (colors[node] !== -1) return colors[node] === color;
                    colors[node] = color;
                    for (const neighbor of graph[node]) {
                        if (!dfs(neighbor, 1 - color)) return false;
                    }
                    return true;
                };
                for (let i = 0; i < graph.length; i++) {
                    if (colors[i] === -1 && !dfs(i, 0)) return false;
                }
                return true;
            }`,
            testCases: [
                { input: "graph = [[1,3],[0,2],[1,3],[0,2]]", output: "true" },
                { input: "graph = [[1,2,3],[0,2],[0,1,3],[0,2]]", output: "false" }
            ]
        },

        // Recursion
        {
            question: "Write a function to compute the nth Fibonacci number using recursion.",
            expectedSolution: `function fibonacci(n) {
                if (n <= 1) return n;
                return fibonacci(n - 1) + fibonacci(n - 2);
            }`,
            testCases: [
                { input: "5", output: "5" },
                { input: "10", output: "55" }
            ]
        },
        // ... (continuing with 50 total coding questions)
    ]
};

// Function to get random questions for each interview type
function getRandomQuestions(type, count = 5) {
    const questions = interviewQuestions[type];
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

let currentInterview = {
    type: null,
    questions: [],
    currentQuestionIndex: 0,
    scores: {
        technical: 0,
        communication: 0,
        problemSolving: 0
    }
};

// Modified startInterview function to use random questions
function startInterview(type) {
    currentInterview.type = type;
    currentInterview.questions = getRandomQuestions(type);
    currentInterview.currentQuestionIndex = 0;
    currentInterview.scores = {
        technical: 0,
        communication: 0,
        problemSolving: 0
    };

    clearChat();
    appendMessage('ai', `Starting ${type} interview. You will be asked ${currentInterview.questions.length} questions.`);
    setTimeout(askQuestion, 1000);
}

function clearChat() {
    document.getElementById('chat-messages').innerHTML = '';
    document.getElementById('feedback-content').innerHTML = '';
    updateScores(0, 0, 0);
}

function askQuestion() {
    if (currentInterview.currentQuestionIndex < currentInterview.questions.length) {
        const question = currentInterview.questions[currentInterview.currentQuestionIndex].question;
        appendMessage('ai', question);
    } else {
        endInterview();
    }
}

function submitResponse() {
    const userInput = document.getElementById('user-response').value;
    if (!userInput.trim()) return;

    appendMessage('user', userInput);
    document.getElementById('user-response').value = '';

    // Analyze response and provide feedback
    const feedback = analyzeResponse(userInput);
    setTimeout(() => {
        appendMessage('ai', feedback.message);
        updateScores(feedback.technical, feedback.communication, feedback.problemSolving);
        
        // Move to next question or follow-up
        currentInterview.currentQuestionIndex++;
        setTimeout(askQuestion, 1000);
    }, 1000);
}

// Enhanced analyzeResponse function with more sophisticated scoring
function analyzeResponse(response) {
    const question = currentInterview.questions[currentInterview.currentQuestionIndex];
    let feedback = {
        message: "",
        technical: 0,
        communication: 0,
        problemSolving: 0
    };

    if (currentInterview.type === 'technical' || currentInterview.type === 'behavioral') {
        const keywords = question.expectedAnswer || question.expectedKeywords;
        const matchedKeywords = keywords.filter(keyword => 
            response.toLowerCase().includes(keyword.toLowerCase())
        );

        // Enhanced scoring system
        const keywordScore = (matchedKeywords.length / keywords.length) * 100;
        const lengthScore = Math.min(100, (response.length / 100) * 20); // Encourages detailed responses
        const structureScore = response.includes('because') || response.includes('therefore') ? 100 : 50;

        feedback.technical = currentInterview.type === 'technical' ? keywordScore : lengthScore;
        feedback.communication = (lengthScore + structureScore) / 2;
        feedback.problemSolving = keywordScore;

        // Detailed feedback based on response analysis
        if (keywordScore > 80) {
            feedback.message = "Excellent answer! Your response was comprehensive and well-structured.";
        } else if (keywordScore > 50) {
            feedback.message = "Good answer. Consider elaborating on: " + 
                keywords.filter(k => !matchedKeywords.includes(k)).join(", ");
        } else {
            feedback.message = "Your answer could be improved. Key points to cover: " + 
                keywords.filter(k => !matchedKeywords.includes(k)).join(", ");
        }

        // Add follow-up question if score is high
        if (keywordScore > 70) {
            feedback.message += "\n\n" + question.followUp;
        }
    } else if (currentInterview.type === 'coding') {
        // Enhanced code evaluation
        const hasFunction = response.includes('function');
        const hasReturn = response.includes('return');
        const hasComments = response.includes('//') || response.includes('/*');
        const hasLoops = response.includes('for') || response.includes('while');
        const hasConditions = response.includes('if') || response.includes('switch');

        feedback.technical = calculateTechnicalScore(hasFunction, hasReturn, hasLoops, hasConditions);
        feedback.problemSolving = calculateProblemSolvingScore(response, question.expectedSolution);
        feedback.communication = hasComments ? 90 : 50;

        feedback.message = generateCodingFeedback(feedback.technical, hasComments, question.testCases);
    }

    // Update running average scores
    updateRunningScores(feedback);
    return feedback;
}

// Helper functions for enhanced code evaluation
function calculateTechnicalScore(hasFunction, hasReturn, hasLoops, hasConditions) {
    let score = 0;
    if (hasFunction) score += 25;
    if (hasReturn) score += 25;
    if (hasLoops) score += 25;
    if (hasConditions) score += 25;
    return score;
}

function calculateProblemSolvingScore(response, expectedSolution) {
    // Basic similarity check (can be enhanced with more sophisticated comparison)
    const similarity = response.length / expectedSolution.length;
    return Math.min(100, similarity * 100);
}

function generateCodingFeedback(technicalScore, hasComments, testCases) {
    let feedback = "";
    if (technicalScore >= 90) {
        feedback = "Excellent solution! Your code is well-structured.";
    } else if (technicalScore >= 70) {
        feedback = "Good attempt! Consider optimizing your solution.";
    } else {
        feedback = "Your solution needs improvement. Consider adding proper function structure and error handling.";
    }

    if (!hasComments) {
        feedback += "\nTip: Adding comments would make your code more readable.";
    }

    return feedback;
}

function updateRunningScores(feedback) {
    currentInterview.scores.technical = (currentInterview.scores.technical + feedback.technical) / 2;
    currentInterview.scores.communication = (currentInterview.scores.communication + feedback.communication) / 2;
    currentInterview.scores.problemSolving = (currentInterview.scores.problemSolving + feedback.problemSolving) / 2;
}

function appendMessage(sender, message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function updateScores(technical, communication, problemSolving) {
    document.getElementById('technical-score').style.width = `${technical}%`;
    document.getElementById('communication-score').style.width = `${communication}%`;
    document.getElementById('problem-solving-score').style.width = `${problemSolving}%`;
}

function endInterview() {
    const averageScore = (
        currentInterview.scores.technical + 
        currentInterview.scores.communication + 
        currentInterview.scores.problemSolving
    ) / 3;

    const feedback = `Interview Complete!\n
        Overall Score: ${averageScore.toFixed(1)}%\n
        Key Strengths: ${getStrengths()}\n
        Areas for Improvement: ${getImprovementAreas()}`;

    appendMessage('ai', feedback);
}

function getStrengths() {
    const scores = currentInterview.scores;
    const strengths = [];
    if (scores.technical > 70) strengths.push("Technical Knowledge");
    if (scores.communication > 70) strengths.push("Communication");
    if (scores.problemSolving > 70) strengths.push("Problem Solving");
    return strengths.join(", ") || "Keep practicing!";
}

function getImprovementAreas() {
    const scores = currentInterview.scores;
    const areas = [];
    if (scores.technical < 70) areas.push("Technical Knowledge");
    if (scores.communication < 70) areas.push("Communication");
    if (scores.problemSolving < 70) areas.push("Problem Solving");
    return areas.join(", ") || "Great job overall!";
} 