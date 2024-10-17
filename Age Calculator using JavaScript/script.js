const form = document.getElementById('ageForm');
const result = document.getElementById('result');
const ageDisplay = document.getElementById('ageDisplay');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const day = document.getElementById('day').value;
  const month = document.getElementById('month').value;
  const year = document.getElementById('year').value;

  if (day && month && year) {
    const today = new Date();
    const birthDate = new Date(`${year}-${month}-${day}`);

    let age = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += 30;
    }

    if (months < 0) {
      age--;
      months += 12;
    }

    ageDisplay.textContent = `You are ${age} years, ${months} months, and ${days} days old.`;
    result.style.display = 'block';
  }
});
