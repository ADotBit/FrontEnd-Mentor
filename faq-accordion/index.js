const faq = document.querySelectorAll('.faq');
const answer = document.querySelectorAll('.answer');

faq.forEach((questions) => {
  questions.addEventListener('click', () => {
    const img = questions.querySelector('img');

    if (img.style.transform === 'rotateX(0deg)') {
      img.style.transform = 'rotateX(180deg)';
    } else {
      img.style.transform = 'rotateX(0deg)';
    }

    const body = questions.nextElementSibling;
    if (body.style.display === 'block') {
      body.style.display = 'none';
      questions.style.color = 'var(--darkGrey)';
      questions.style.fontWeight = '400';
    } else {
      body.style.display = 'block';
      questions.style.color = 'var(--questions)';
      questions.style.fontWeight = '700';
    }
  });
});
