// Function to handle resume upload
function uploadResume() {
    const fileInput = document.getElementById('resume-upload');
    const file = fileInput.files[0];
    const message = document.getElementById('upload-message');
    const evaluateBtn = document.getElementById('evaluate-btn');

    if (file) {
        message.textContent = `Uploaded: ${file.name}`;
        message.style.color = 'green';
        evaluateBtn.style.display = 'block'; // Show evaluate button
    } else {
        message.textContent = 'No file selected';
        message.style.color = 'red';
        evaluateBtn.style.display = 'none'; // Hide evaluate button
    }
}

// Function to toggle between tabs (Upload and Create)
function toggleTab(tab) {
    const uploadTab = document.getElementById('upload');
    const createTab = document.getElementById('create');
    
    if (tab === 'upload') {
        uploadTab.style.display = 'block';
        createTab.style.display = 'none';
    } else {
        uploadTab.style.display = 'none';
        createTab.style.display = 'block';
    }
}

// Function to evaluate resume
function evaluateResume() {
    const feedback = document.getElementById('evaluation-feedback');

    // Mock feedback for uploaded resume
    feedback.innerHTML = `
        <h3>Resume Evaluation Feedback:</h3>
        <ul>
            <li><strong>Clarity:</strong> Ensure section headers are clearly labeled.</li>
            <li><strong>Formatting:</strong> Use consistent font sizes and styles.</li>
            <li><strong>Keywords:</strong> Include industry-relevant terms (e.g., "team leadership", "data analysis").</li>
            <li><strong>Achievements:</strong> Highlight quantifiable accomplishments (e.g., "Increased sales by 20%").</li>
            <li><strong>Structure:</strong> Rearrange content to prioritize relevant experience.</li>
        </ul>
        <p>Consider using our professional templates for better presentation!</p>
    `;
    feedback.style.marginTop = '20px';
}

// Function to handle resume creation
document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;
    const skills = document.getElementById('skills').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const projects = document.getElementById('projects').value;
    const certifications = document.getElementById('certifications').value;

    const resumeContent = `
        <div class="resume-header">
            <h2>${name}</h2>
            <p>${email} | ${phone}</p>
        </div>

        <div class="resume-section">
            <h3>Career Summary</h3>
            <p>${summary}</p>
        </div>

        <div class="resume-section">
            <h3>Skills</h3>
            <ul>
                ${skills.split('\n').map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        </div>

        <div class="resume-section">
            <h3>Education</h3>
            <p>${education}</p>
        </div>

        <div class="resume-section">
            <h3>Work Experience</h3>
            <p>${experience}</p>
        </div>

        <div class="resume-section">
            <h3>Projects</h3>
            <p>${projects}</p>
        </div>

        <div class="resume-section">
            <h3>Certifications</h3>
            <p>${certifications}</p>
        </div>
    `;

    document.getElementById('generated-resume').innerHTML = resumeContent;
});
