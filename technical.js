// Technical Interview Questions Dataset from various open sources
const technicalQuestions = {
    javascript: [
        {
            question: "Explain event delegation in JavaScript.",
            answer: "Event delegation is a technique where you attach an event listener to a parent element to handle events on its children, even those added dynamically. It works because of event bubbling.",
            difficulty: "intermediate"
        },
        {
            question: "What are Promises in JavaScript and how do they work?",
            answer: "Promises are objects representing the eventual completion/failure of an asynchronous operation. They have three states: pending, fulfilled, and rejected.",
            difficulty: "intermediate"
        },
        {
            question: "What is the Event Loop in JavaScript?",
            answer: "The Event Loop is a mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded. It monitors the call stack and callback queue, pushing callbacks to the stack when it's empty.",
            difficulty: "advanced"
        },
        {
            question: "Explain Prototypal Inheritance in JavaScript",
            answer: "Prototypal inheritance is JavaScript's mechanism for sharing properties and methods between objects. Objects can inherit properties and methods from other objects through their prototype chain.",
            difficulty: "advanced"
        }
        // ... more JavaScript questions
    ],
    react: [
        {
            question: "What is the Virtual DOM and how does it work?",
            answer: "Virtual DOM is a lightweight copy of the actual DOM. React uses it to improve performance by minimizing direct manipulation of the DOM.",
            difficulty: "intermediate"
        },
        {
            question: "Explain the lifecycle methods in React.",
            answer: "Lifecycle methods are special methods that automatically get called as your component achieves certain milestones. Common ones include componentDidMount, componentDidUpdate, and componentWillUnmount.",
            difficulty: "advanced"
        },
        {
            question: "Explain React Fiber Architecture",
            answer: "React Fiber is a complete reimplementation of React's core algorithm. It enables incremental rendering, splitting rendering work into chunks and spreading it out over multiple frames.",
            difficulty: "advanced"
        }
        // ... more React questions
    ],
    python: [
        {
            question: "What is the difference between list and tuple in Python?",
            answer: "Lists are mutable and can be modified after creation, while tuples are immutable. Lists use square brackets [], tuples use parentheses ().",
            difficulty: "beginner"
        }
        // ... more Python questions
    ],
    'data analysis': [
        {
            question: "What is the difference between mean, median, and mode?",
            answer: "Mean is the average of all values, median is the middle value when data is ordered, and mode is the most frequently occurring value.",
            difficulty: "beginner"
        },
        {
            question: "Explain the concept of data normalization.",
            answer: "Data normalization is the process of scaling data to a fixed range, typically 0-1 or -1 to 1, to ensure all features contribute equally to the analysis.",
            difficulty: "intermediate"
        },
        {
            question: "What is the purpose of exploratory data analysis (EDA)?",
            answer: "EDA helps understand data patterns, identify outliers, check assumptions, and determine relationships between variables before formal modeling.",
            difficulty: "intermediate"
        },
        {
            question: "What is the difference between correlation and causation?",
            answer: "Correlation indicates a relationship between variables, while causation implies that one variable directly causes changes in another. Correlation does not always imply causation.",
            difficulty: "beginner"
        }
    ],
    "c": [
        {
            "question": "What is a pointer in C?",
            "answer": "A pointer is a variable that stores the memory address of another variable.",
            "difficulty": "beginner"
        },
        {
            "question": "What is the difference between malloc() and calloc() in C?",
            "answer": "malloc() allocates a block of memory, but it doesn't initialize it, while calloc() allocates memory and initializes it to zero.",
            "difficulty": "intermediate"
        },
        {
            "question": "What is the purpose of the `sizeof()` operator in C?",
            "answer": "The `sizeof()` operator returns the size, in bytes, of a data type or a variable.",
            "difficulty": "beginner"
        },
        {
            "question": "Explain the concept of recursion in C.",
            "answer": "Recursion in C is a process where a function calls itself to solve a smaller instance of the same problem.",
            "difficulty": "intermediate"
        },
        {
            "question": "What is the use of the `static` keyword in C?",
            "answer": "The `static` keyword in C is used to maintain the value of a variable between function calls and also restrict its scope to the current function or file.",
            "difficulty": "intermediate"
        },
        {
            "question": "What are the different types of storage classes in C?",
            "answer": "Storage classes in C are `auto`, `static`, `extern`, and `register`. They define the scope, lifetime, and visibility of variables.",
            "difficulty": "intermediate"
        },
        {
            "question": "What is the purpose of a `break` statement in C?",
            "answer": "The `break` statement is used to exit from a loop or switch statement prematurely.",
            "difficulty": "beginner"
        },
        {
            "question": "How do you define a structure in C?",
            "answer": "A structure in C is defined using the `struct` keyword and is used to group different data types together.",
            "difficulty": "beginner"
        },
        {
            "question": "What is a function pointer in C?",
            "answer": "A function pointer in C is a pointer that points to a function rather than a data variable. It allows for dynamic function calls.",
            "difficulty": "advanced"
        },
        {
            "question": "What is the difference between `++i` and `i++` in C?",
            "answer": "`++i` is the pre-increment operator, which increments the value of `i` before it is used in an expression, while `i++` is the post-increment operator, which increments `i` after it is used.",
            "difficulty": "beginner"
        },
        {
            "question": "What is an array in C?",
            "answer": "An array in C is a collection of variables of the same type stored in contiguous memory locations.",
            "difficulty": "beginner"
        },
        {
            "question": "What is a union in C?",
            "answer": "A union in C is a special data type that allows storing different data types in the same memory location, but only one at a time.",
            "difficulty": "intermediate"
        },
        {
            "question": "What is the role of the `main()` function in a C program?",
            "answer": "The `main()` function is the entry point of a C program. It is the first function that gets called when the program is executed.",
            "difficulty": "beginner"
        },
        {
            "question": "Explain the difference between `struct` and `union` in C.",
            "answer": "A `struct` allows multiple data types to coexist simultaneously, whereas a `union` allows only one data type to occupy memory at a time.",
            "difficulty": "intermediate"
        },
        {
            "question": "What is a macro in C?",
            "answer": "A macro in C is a preprocessor directive used to define a constant or a function-like code fragment that gets expanded during preprocessing.",
            "difficulty": "beginner"
        },
        {
            "question": "What is a segmentation fault in C?",
            "answer": "A segmentation fault occurs when a program tries to access restricted or invalid memory areas.",
            "difficulty": "advanced"
        },
        {
            "question": "What is the difference between call by value and call by reference in C?",
            "answer": "In call by value, a copy of the variable's value is passed to the function, while in call by reference, the address of the variable is passed, allowing direct modification of the variable's value.",
            "difficulty": "intermediate"
        },
        {
            "question": "What are macros and `#define` in C?",
            "answer": "`#define` is used to define macros in C, which are constants or expressions that are replaced by the preprocessor before the code is compiled.",
            "difficulty": "beginner"
        },
        {
            "question": "What is a segmentation fault in C?",
            "answer": "A segmentation fault happens when the program tries to access memory that it is not allowed to, typically due to pointer errors.",
            "difficulty": "advanced"
        }
    ],
    SQL: [
        {
            "question": "What is a primary key in SQL?",
            "answer": "A primary key is a unique identifier for a record in a database table. It ensures that no two records have the same value in this column.",
            "difficulty": "beginner"
        },
        {
            "question": "What is the difference between `INNER JOIN` and `LEFT JOIN`?",
            "answer": "`INNER JOIN` returns records that have matching values in both tables, while `LEFT JOIN` returns all records from the left table and matching records from the right table, filling in NULLs where there is no match.",
            "difficulty": "intermediate"
        },
        {
            "question": "What is the purpose of the `GROUP BY` clause in SQL?",
            "answer": "The `GROUP BY` clause is used to group rows that have the same values in specified columns into summary rows, such as finding the sum or average.",
            "difficulty": "intermediate"
        },
        {
            "question": "What is the difference between `DELETE` and `TRUNCATE` in SQL?",
            "answer": "`DELETE` removes rows from a table with an option to filter rows, while `TRUNCATE` removes all rows from a table without the possibility of filtering.",
            "difficulty": "beginner"
        },
        {
            "question": "What is a foreign key in SQL?",
            "answer": "A foreign key is a column that creates a relationship between two tables, referring to the primary key of another table.",
            "difficulty": "beginner"
        },
        {
            "question": "What is normalization in SQL?",
            "answer": "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity by dividing large tables into smaller, related tables.",
            "difficulty": "intermediate"
        },
        {
            "question": "What is an index in SQL?",
            "answer": "An index in SQL is a data structure that improves the speed of data retrieval operations on a table by providing faster access to rows.",
            "difficulty": "intermediate"
        },
        {
            "question": "What is a subquery in SQL?",
            "answer": "A subquery is a query nested inside another query. It can be used to retrieve data that will be used in the main query.",
            "difficulty": "intermediate"
        },
        {
            "question": "What is a view in SQL?",
            "answer": "A view in SQL is a virtual table that stores the result of a query. It provides an abstraction layer for simplifying complex queries.",
            "difficulty": "intermediate"
        },
        {
            "question": "What is a stored procedure in SQL?",
            "answer": "A stored procedure is a precompiled set of one or more SQL statements that can be executed as a single unit.",
            "difficulty": "advanced"
        },
        {
            "question": "What is the difference between `HAVING` and `WHERE` in SQL?",
            "answer": "`WHERE` filters rows before aggregation, while `HAVING` filters groups after aggregation.",
            "difficulty": "intermediate"
        },
        {
            "question": "What is a constraint in SQL?",
            "answer": "A constraint is a rule applied to a column or a table to ensure data integrity, such as `NOT NULL`, `UNIQUE`, `CHECK`, or `DEFAULT`.",
            "difficulty": "beginner"
        },
        {
            "question": "What is the `DISTINCT` keyword in SQL?",
            "answer": "The `DISTINCT` keyword is used to remove duplicate records from the result set of a query.",
            "difficulty": "beginner"
        },
        {
            "question": "What is a transaction in SQL?",
            "answer": "A transaction is a sequence of SQL queries that are executed as a single unit of work, ensuring data integrity by committing or rolling back all changes if necessary.",
            "difficulty": "intermediate"
        },
        {
            "question": "What is an aggregate function in SQL?",
            "answer": "An aggregate function performs a calculation on a set of values and returns a single value. Examples include `COUNT()`, `SUM()`, `AVG()`, `MAX()`, and `MIN()`.",
            "difficulty": "beginner"
        },
        {
            "question": "What is the difference between `UNION` and `UNION ALL` in SQL?",
            "answer": "`UNION` returns unique records by removing duplicates, while `UNION ALL` returns all records, including duplicates.",
            "difficulty": "intermediate"
        },
        {
            "question": "What is the `LIKE` operator in SQL?",
            "answer": "The `LIKE` operator is used to search for a specified pattern in a column, typically with wildcard characters `%` and `_`.",
            "difficulty": "beginner"
        },
        {
            "question": "What is the `ALTER TABLE` statement in SQL?",
            "answer": "The `ALTER TABLE` statement is used to modify the structure of an existing table, such as adding or deleting columns.",
            "difficulty": "intermediate"
        },
        {
            "question": "What is the `LIMIT` clause in SQL?",
            "answer": "The `LIMIT` clause is used to specify the number of records to return in a query result.",
            "difficulty": "beginner"
        },
        {
            "question": "What is the difference between `CHAR` and `VARCHAR` in SQL?",
            "answer": "`CHAR` is a fixed-length string, while `VARCHAR` is a variable-length string that only uses as much storage as required by the value.",
            "difficulty": "beginner"
        }
    ]
};

let currentCategory = null;
let askedQuestions = new Set();

function loadRandomQuestion() {
    if (!currentCategory) {
        return;
    }

    const questions = technicalQuestions[currentCategory];
    let availableQuestions = questions.filter(q => !askedQuestions.has(q.question));

    if (availableQuestions.length === 0) {
        askedQuestions.clear();
        availableQuestions = questions;
    }

    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const question = availableQuestions[randomIndex];
    askedQuestions.add(question.question);

    document.getElementById('question-display').innerHTML = `
        <div class="question-card">
            <h3>${question.question}</h3>
            <button onclick="showAnswer(${randomIndex})" class="show-answer-btn">Show Answer</button>
            <div id="answer-${randomIndex}" class="answer hidden">
                ${question.answer}
            </div>
            <div class="difficulty-badge ${question.difficulty}">
                ${question.difficulty}
            </div>
        </div>
    `;
}

function showAnswer(index) {
    const answerDiv = document.getElementById(`answer-${index}`);
    answerDiv.classList.toggle('hidden');
}

function selectCategory(category) {
    const normalizedCategory = category.toLowerCase();
    
    const actualCategory = Object.keys(technicalQuestions).find(key => 
        key.toLowerCase() === normalizedCategory
    );

    if (actualCategory) {
        currentCategory = actualCategory;
        askedQuestions.clear();
        loadRandomQuestion();
    } else {
        console.error(`Category ${category} not found`);
    }
} 