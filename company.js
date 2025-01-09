
    function toggleQuestions() {
      const questionsDiv = document.getElementById('questions');
      if (questionsDiv.style.display === 'none' || questionsDiv.style.display === '') {
        questionsDiv.style.display = 'block';
      } else {
        questionsDiv.style.display = 'none';
      }
    }

    function showCompanyQuestions(company) {
      const tabs = document.querySelectorAll('.tab');
      tabs.forEach(tab => tab.classList.remove('active'));

      const companyQuestions = document.querySelectorAll('.company-questions');
      companyQuestions.forEach(section => section.style.display = 'none');

      document.getElementById(`${company}-questions`).style.display = 'block';
      document.querySelector(`.tab[onclick="showCompanyQuestions('${company}')"]`).classList.add('active');
    }
  