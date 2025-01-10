// Company-specific Interview Questions Dataset
const companyQuestions = {
  amazon: [
    {
        question: "Tell me about a time when you had to deal with a difficult customer/situation.",
        category: "Leadership Principles",
        expectedPoints: ["Customer Obsession", "Ownership", "Problem Resolution"]
    },
    {
        question: "Describe a time when you had to make a decision without all the information you needed.",
        category: "Decision Making",
        expectedPoints: ["Bias for Action", "Good Judgment", "Deliver Results"]
    },
    {
        question: "Give an example of a time you took ownership of a project and delivered it successfully.",
        category: "Ownership",
        expectedPoints: ["Accountability", "Leadership", "Deliver Results"]
    },
    {
        question: "How have you influenced others to achieve a difficult goal?",
        category: "Influence and Leadership",
        expectedPoints: ["Collaboration", "Persuasion", "Leadership"]
    },
    {
        question: "Describe a time you went above and beyond for a customer.",
        category: "Customer Obsession",
        expectedPoints: ["Customer-Centric Thinking", "Empathy", "Proactive Solutions"]
    },
    {
        question: "Tell me about a time you had conflicting priorities and how you managed them.",
        category: "Time Management",
        expectedPoints: ["Prioritization", "Efficiency", "Focus"]
    },
    {
        question: "Share an example of how you handled failure.",
        category: "Resilience",
        expectedPoints: ["Learning from Mistakes", "Adaptability", "Growth Mindset"]
    },
    {
        question: "Describe a time you had to innovate to solve a challenging problem.",
        category: "Innovation",
        expectedPoints: ["Creative Thinking", "Problem-Solving", "Execution"]
    },
    {
        question: "How have you ensured quality in your work under tight deadlines?",
        category: "Quality Assurance",
        expectedPoints: ["Attention to Detail", "Time Management", "Commitment to Excellence"]
    },
    {
        question: "Tell me about a time when you managed ambiguity successfully.",
        category: "Decision Making",
        expectedPoints: ["Adaptability", "Problem-Solving", "Confidence"]
    },
    {
        question: "Describe a situation where you had to lead a team to success.",
        category: "Leadership",
        expectedPoints: ["Team Management", "Inspiration", "Results"]
    },
    {
        question: "Share an instance where you disagreed with a team member and how you resolved it.",
        category: "Conflict Resolution",
        expectedPoints: ["Listening", "Negotiation", "Empathy"]
    },
    {
        question: "What is the most significant risk you’ve taken, and what was the outcome?",
        category: "Risk Management",
        expectedPoints: ["Calculated Risks", "Learning", "Outcomes"]
    },
    {
        question: "Describe a time when you had to deliver a project with limited resources.",
        category: "Resourcefulness",
        expectedPoints: ["Innovation", "Efficiency", "Collaboration"]
    },
    {
        question: "Tell me about a time when you mentored someone successfully.",
        category: "Mentorship",
        expectedPoints: ["Support", "Teaching Skills", "Empathy"]
    },
    {
        question: "Explain how you used data to make a critical decision.",
        category: "Data-Driven Decision Making",
        expectedPoints: ["Analytics", "Logic", "Impact"]
    },
    {
        question: "Tell me about a time you implemented a process improvement.",
        category: "Efficiency",
        expectedPoints: ["Streamlining Processes", "Impact", "Team Benefits"]
    },
    {
        question: "Describe a situation where you took on more responsibility than required.",
        category: "Ownership",
        expectedPoints: ["Initiative", "Leadership", "Accountability"]
    },
    {
        question: "Share an experience where you had to balance multiple stakeholders’ expectations.",
        category: "Stakeholder Management",
        expectedPoints: ["Communication", "Conflict Resolution", "Results"]
    },
    {
        question: "Tell me about a time when you advocated for a customer’s needs within your team.",
        category: "Customer Obsession",
        expectedPoints: ["Advocacy", "Empathy", "Team Collaboration"]
    }
    // Add 10 more questions similarly
],
        // ... more Amazon questions
    
        google: [
          {
              question: "How would you improve Google’s Gmail product?",
              category: "Product Design",
              expectedPoints: ["User-Centric Thinking", "Innovation", "Technical Feasibility"]
          },
          {
              question: "Describe a time you optimized a process for better performance.",
              category: "Process Optimization",
              expectedPoints: ["Efficiency", "Impact", "Technical Skills"]
          },
          {
              question: "Explain how you’ve approached a challenging algorithmic problem.",
              category: "Algorithmic Thinking",
              expectedPoints: ["Problem-Solving", "Optimization", "Execution"]
          },
          {
              question: "What is your process for designing a scalable software architecture?",
              category: "Scalability",
              expectedPoints: ["Modularity", "Performance", "Reliability"]
          },
          {
              question: "Share a time when you worked on a cross-functional team.",
              category: "Team Collaboration",
              expectedPoints: ["Communication", "Adaptability", "Conflict Resolution"]
          }
        ],
        
          intel: [
              {
                  "question": "How would you improve Intel's CPU performance?",
                  "category": "Product Design",
                  "expectedPoints": ["User-Centric Thinking", "Innovation", "Technical Feasibility"]
              },
              {
                  "question": "Describe a time you optimized a process for better performance in hardware engineering.",
                  "category": "Process Optimization",
                  "expectedPoints": ["Efficiency", "Impact", "Technical Skills"]
              },
              {
                  "question": "Explain how you’ve approached designing a new semiconductor chip architecture.",
                  "category": "Algorithmic Thinking",
                  "expectedPoints": ["Problem-Solving", "Optimization", "Execution"]
              },
              {
                  "question": "What is your approach to designing energy-efficient hardware systems?",
                  "category": "Scalability",
                  "expectedPoints": ["Modularity", "Performance", "Reliability"]
              },
              {
                  "question": "Share a time when you worked with a cross-functional team to improve hardware design.",
                  "category": "Team Collaboration",
                  "expectedPoints": ["Communication", "Adaptability", "Conflict Resolution"]
              },
              {
                  "question": "How do you prioritize competing technical needs in a hardware product?",
                  "category": "Product Design",
                  "expectedPoints": ["Decision-Making", "Trade-offs", "Customer Focus"]
              },
              {
                  "question": "Describe a situation where you dealt with a critical hardware failure.",
                  "category": "Problem Solving",
                  "expectedPoints": ["Quick Thinking", "Troubleshooting", "Problem Resolution"]
              },
              {
                  "question": "How do you approach testing and validation of new hardware products?",
                  "category": "Quality Assurance",
                  "expectedPoints": ["Precision", "Thoroughness", "Risk Management"]
              },
              {
                  "question": "How would you optimize power consumption in Intel’s chips?",
                  "category": "Process Optimization",
                  "expectedPoints": ["Efficiency", "Sustainability", "Innovation"]
              },
              {
                  "question": "Explain a scenario where you had to resolve a compatibility issue between different hardware systems.",
                  "category": "Troubleshooting",
                  "expectedPoints": ["Problem-Solving", "Communication", "Technical Skills"]
              },
              {
                  "question": "How do you ensure that a new chip design is both scalable and cost-effective?",
                  "category": "Scalability",
                  "expectedPoints": ["Budget Management", "Performance", "Sustainability"]
              },
              {
                  "question": "Describe your experience with high-performance computing and parallel processing.",
                  "category": "Algorithmic Thinking",
                  "expectedPoints": ["Technical Expertise", "Optimization", "Efficiency"]
              },
              {
                  "question": "How would you improve Intel’s AI accelerator chip?",
                  "category": "Product Design",
                  "expectedPoints": ["Innovation", "Technical Feasibility", "Market Impact"]
              },
              {
                  "question": "Describe a time when you worked on a team to design a highly reliable system.",
                  "category": "Team Collaboration",
                  "expectedPoints": ["Communication", "Collaboration", "Accountability"]
              },
              {
                  "question": "What are the most important factors to consider when designing a chip for mobile devices?",
                  "category": "Product Design",
                  "expectedPoints": ["Power Efficiency", "Size Constraints", "Performance"]
              },
              {
                  "question": "How do you approach troubleshooting performance bottlenecks in hardware systems?",
                  "category": "Problem Solving",
                  "expectedPoints": ["Analysis", "Technical Expertise", "Optimizing Solutions"]
              },
              {
                  "question": "Explain your approach to incorporating feedback from stakeholders into hardware design.",
                  "category": "Product Design",
                  "expectedPoints": ["Customer Focus", "Iterative Development", "Adaptability"]
              },
              {
                  "question": "How do you keep up with the latest advancements in hardware engineering?",
                  "category": "Continuous Learning",
                  "expectedPoints": ["Research", "Innovation", "Industry Awareness"]
              },
              {
                  "question": "Describe a time when you improved the reliability of a hardware system under challenging conditions.",
                  "category": "Process Optimization",
                  "expectedPoints": ["Troubleshooting", "Innovation", "Reliability"]
              },
              {
                  "question": "What role do automation and AI play in your hardware development process?",
                  "category": "Innovation",
                  "expectedPoints": ["Automation", "AI Integration", "Efficiency"]
              }
          ],
      
          microsoft: [
              {
                  "question": "How would you improve Microsoft’s Office 365 suite for better user collaboration?",
                  "category": "Product Design",
                  "expectedPoints": ["User-Centric Thinking", "Innovation", "Technical Feasibility"]
              },
              {
                  "question": "Describe a time when you automated a manual task to increase productivity.",
                  "category": "Process Optimization",
                  "expectedPoints": ["Efficiency", "Automation", "Impact"]
              },
              {
                  "question": "Explain a challenging technical problem you solved while working with cloud computing.",
                  "category": "Algorithmic Thinking",
                  "expectedPoints": ["Problem-Solving", "Optimization", "Execution"]
              },
              {
                  "question": "What is your approach to designing a cloud-based software architecture?",
                  "category": "Scalability",
                  "expectedPoints": ["Cloud Services", "Performance", "Reliability"]
              },
              {
                  "question": "Describe a time when you worked on a team to deliver a critical software update.",
                  "category": "Team Collaboration",
                  "expectedPoints": ["Communication", "Collaboration", "Accountability"]
              },
              {
                  "question": "How do you ensure the security and privacy of user data in a Microsoft product?",
                  "category": "Security",
                  "expectedPoints": ["Risk Management", "Security Best Practices", "User Trust"]
              },
              {
                  "question": "How would you approach designing a scalable Azure solution for a global enterprise?",
                  "category": "Scalability",
                  "expectedPoints": ["Cloud Architecture", "Global Scalability", "Performance"]
              },
              {
                  "question": "Explain how you optimize performance in large-scale distributed systems.",
                  "category": "Algorithmic Thinking",
                  "expectedPoints": ["Optimization", "Big Data", "Execution"]
              },
              {
                  "question": "Describe a situation where you faced a critical bug in production and how you resolved it.",
                  "category": "Problem Solving",
                  "expectedPoints": ["Critical Thinking", "Troubleshooting", "Resolution"]
              },
              {
                  "question": "How do you balance the need for innovation and risk management in software development?",
                  "category": "Risk Management",
                  "expectedPoints": ["Innovation", "Risk Assessment", "Impact"]
              },
              {
                  "question": "How do you stay updated on emerging technologies in cloud computing and AI?",
                  "category": "Continuous Learning",
                  "expectedPoints": ["Research", "AI Integration", "Industry Awareness"]
              },
              {
                  "question": "How would you redesign Microsoft Teams to improve user engagement and productivity?",
                  "category": "Product Design",
                  "expectedPoints": ["User-Centric Design", "Innovation", "Practical Feasibility"]
              },
              {
                  "question": "Describe a time when you integrated a new AI/ML feature into a product.",
                  "category": "Product Design",
                  "expectedPoints": ["AI/ML Integration", "Innovation", "Execution"]
              },
              {
                  "question": "How would you improve the performance of Microsoft’s Visual Studio?",
                  "category": "Process Optimization",
                  "expectedPoints": ["Efficiency", "User Experience", "Technical Feasibility"]
              },
              {
                  "question": "What are the most important factors when designing a secure cloud infrastructure?",
                  "category": "Security",
                  "expectedPoints": ["Encryption", "User Privacy", "Compliance"]
              },
              {
                  "question": "How do you manage technical debt in a large-scale software product?",
                  "category": "Process Optimization",
                  "expectedPoints": ["Code Quality", "Refactoring", "Long-term Scalability"]
              },
              {
                  "question": "Explain how you’ve optimized a machine learning model for real-time performance.",
                  "category": "Algorithmic Thinking",
                  "expectedPoints": ["Optimization", "AI", "Performance"]
              },
              {
                  "question": "What strategies do you use to ensure the reliability of cloud services?",
                  "category": "Scalability",
                  "expectedPoints": ["Reliability", "Monitoring", "Continuous Improvement"]
              },
              {
                  "question": "How do you ensure that a software product is easy to maintain and extend?",
                  "category": "Product Design",
                  "expectedPoints": ["Maintainability", "Scalability", "Quality Assurance"]
              }
          ],
      
          meta: [
              {
                  "question": "How would you improve Meta’s Messenger app for better user engagement?",
                  "category": "Product Design",
                  "expectedPoints": ["User-Centric Thinking", "Innovation", "Technical Feasibility"]
              },
              {
                  "question": "Describe a time when you optimized a process to scale social media engagement.",
                  "category": "Process Optimization",
                  "expectedPoints": ["Efficiency", "User Engagement", "Impact"]
              },
              {
                  "question": "How would you tackle the challenge of reducing the latency in a real-time messaging platform?",
                  "category": "Algorithmic Thinking",
                  "expectedPoints": ["Problem-Solving", "Optimization", "Execution"]
              },
              {
                  "question": "What is your process for ensuring a scalable infrastructure for millions of active users?",
                  "category": "Scalability",
                  "expectedPoints": ["Scalability", "Load Balancing", "User Growth"]
              },
              {
                  "question": "Share a time when you collaborated with a cross-functional team to improve a Meta product.",
                  "category": "Team Collaboration",
                  "expectedPoints": ["Communication", "Adaptability", "Conflict Resolution"]
              },
              {
                  "question": "How would you approach designing a new feature for Meta’s virtual reality platforms?",
                  "category": "Product Design",
                  "expectedPoints": ["Innovation", "User-Centric Design", "Technical Feasibility"]
              },
              {
                  "question": "What strategies do you use to handle and analyze big data from social media platforms?",
                  "category": "Data Analysis",
                  "expectedPoints": ["Big Data", "Analysis", "Optimization"]
              },
              {
                  "question": "How would you ensure data privacy and security for users on a Meta platform?",
                  "category": "Security",
                  "expectedPoints": ["Privacy", "Risk Management", "Security Best Practices"]
              },
              {
                  "question": "Describe a situation where you improved the user experience of a mobile app.",
                  "category": "Product Design",
                  "expectedPoints": ["User-Centric Design", "Innovation", "Optimization"]
              },
              {
                  "question": "How do you ensure the performance of social media platforms under heavy user load?",
                  "category": "Scalability",
                  "expectedPoints": ["Performance", "Optimization", "Reliability"]
              },
              {
                  "question": "Explain how you would optimize the recommendation algorithm for Meta’s platforms.",
                  "category": "Algorithmic Thinking",
                  "expectedPoints": ["Optimization", "AI", "Execution"]
              },
              {
                  "question": "How would you improve the search functionality across Meta’s services?",
                  "category": "Product Design",
                  "expectedPoints": ["Search Optimization", "User Experience", "Relevance"]
              },
              {
                  "question": "How do you approach testing for millions of concurrent users on social media platforms?",
                  "category": "Quality Assurance",
                  "expectedPoints": ["Load Testing", "Automation", "Scalability"]
              },
              {
                  "question": "Describe a time when you worked on integrating a new technology into a platform.",
                  "category": "Product Design",
                  "expectedPoints": ["Innovation", "Integration", "Execution"]
              },
              {
                  "question": "How would you design a feature to improve user retention on a social media platform?",
                  "category": "Product Design",
                  "expectedPoints": ["User Retention", "Engagement", "Innovation"]
              },
              {
                  "question": "What methods do you use to monitor and improve platform security?",
                  "category": "Security",
                  "expectedPoints": ["Risk Management", "Privacy", "Encryption"]
              },
              {
                  "question": "How do you handle feedback from users while developing new features?",
                  "category": "Product Design",
                  "expectedPoints": ["Customer Focus", "Iterative Development", "Adaptability"]
              },
              {
                  "question": "How do you optimize the performance of a mobile app with high traffic?",
                  "category": "Process Optimization",
                  "expectedPoints": ["Performance", "Efficiency", "Optimization"]
              },
              {
                  "question": "Describe a challenging situation where you improved collaboration between teams.",
                  "category": "Team Collaboration",
                  "expectedPoints": ["Communication", "Adaptability", "Leadership"]
              }
          ],
      
          phonepe: [
              {
                  "question": "How would you improve the user experience of the PhonePe app?",
                  "category": "Product Design",
                  "expectedPoints": ["User-Centric Thinking", "Innovation", "Technical Feasibility"]
              },
              {
                  "question": "Describe a time you optimized the process of payment transaction handling.",
                  "category": "Process Optimization",
                  "expectedPoints": ["Efficiency", "Impact", "Technical Skills"]
              },
              {
                  "question": "How would you approach designing a scalable mobile payment system?",
                  "category": "Algorithmic Thinking",
                  "expectedPoints": ["Problem-Solving", "Optimization", "Execution"]
              },
              {
                  "question": "What is your process for ensuring the security and reliability of digital transactions?",
                  "category": "Security",
                  "expectedPoints": ["Encryption", "Privacy", "Risk Management"]
              },
              {
                  "question": "Share a time when you worked with a cross-functional team to launch a new feature.",
                  "category": "Team Collaboration",
                  "expectedPoints": ["Communication", "Adaptability", "Leadership"]
              },
              {
                  "question": "How would you approach the challenge of reducing payment transaction latency?",
                  "category": "Process Optimization",
                  "expectedPoints": ["Latency Reduction", "Efficiency", "User Experience"]
              },
              {
                  "question": "How would you design PhonePe’s system to handle a large volume of transactions during peak times?",
                  "category": "Scalability",
                  "expectedPoints": ["High Availability", "Load Balancing", "Performance"]
              },
              {
                  "question": "Describe a time when you improved the performance of an existing mobile application.",
                  "category": "Process Optimization",
                  "expectedPoints": ["Efficiency", "Optimization", "Impact"]
              },
              {
                  "question": "How would you ensure PhonePe's mobile app is highly secure while maintaining speed?",
                  "category": "Security",
                  "expectedPoints": ["Encryption", "Privacy", "Speed"]
              },
              {
                  "question": "What strategies would you use to improve the UX of PhonePe’s payment system?",
                  "category": "Product Design",
                  "expectedPoints": ["User-Centric Design", "Innovation", "Usability"]
              },
              {
                  "question": "Explain your approach to integrating new features in a live payment app.",
                  "category": "Product Design",
                  "expectedPoints": ["Integration", "Execution", "Testing"]
              },
              {
                  "question": "Describe your experience with designing features for mobile payments and digital wallets.",
                  "category": "Product Design",
                  "expectedPoints": ["User-Centric", "Security", "Innovation"]
              },
              {
                  "question": "How would you optimize PhonePe's backend to handle large transaction volumes?",
                  "category": "Scalability",
                  "expectedPoints": ["Optimization", "Performance", "Reliability"]
              },
              {
                  "question": "How do you ensure that digital payments systems comply with regulatory standards?",
                  "category": "Compliance",
                  "expectedPoints": ["Legal Knowledge", "Security", "Regulation"]
              },
              {
                  "question": "How do you monitor and improve the stability of payment gateways in mobile apps?",
                  "category": "Process Optimization",
                  "expectedPoints": ["Reliability", "Monitoring", "Optimization"]
              },
              {
                  "question": "Describe a time when you optimized an existing digital payment flow for better customer retention.",
                  "category": "Product Design",
                  "expectedPoints": ["Customer Retention", "Innovation", "User Experience"]
              },
              {
                  "question": "What would be your strategy for improving fraud detection in mobile payments?",
                  "category": "Security",
                  "expectedPoints": ["Fraud Prevention", "Machine Learning", "Security"]
              },
              {
                  "question": "How do you handle challenges related to mobile app performance during high traffic events?",
                  "category": "Scalability",
                  "expectedPoints": ["Performance", "Traffic Management", "Optimization"]
              }
          ]
      };

let selectedCompany = null;
let askedQuestions = new Set();

function selectCompany(company) {
    selectedCompany = company;
    askedQuestions.clear();
    loadNextQuestion();
}

function loadNextQuestion() {
    if (!selectedCompany) {
        return;
    }

    const questions = companyQuestions[selectedCompany];
    let availableQuestions = questions.filter(q => !askedQuestions.has(q.question));

    if (availableQuestions.length === 0) {
        askedQuestions.clear();
        availableQuestions = questions;
    }

    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const question = availableQuestions[randomIndex];
    askedQuestions.add(question.question);

    document.getElementById('question-container').innerHTML = `
        <div class="question-card">
            <div class="category-badge">${question.category}</div>
            <h3>${question.question}</h3>
            <div class="expected-points hidden">
                <h4>Key Points to Cover:</h4>
                <ul>
                    ${question.expectedPoints.map(point => `<li>${point}</li>`).join('')}
                </ul>
            </div>
            <button onclick="togglePoints()" class="hint-btn">Show Hints</button>
        </div>
    `;
}

function togglePoints() {
    const pointsDiv = document.querySelector('.expected-points');
    pointsDiv.classList.toggle('hidden');
}
  