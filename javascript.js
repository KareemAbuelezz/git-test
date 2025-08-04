const questions = document.querySelectorAll('.question');

questions.forEach((q) => {
  const btn = q.querySelector('.q1');
  const answer = q.querySelector('.answer');
  const arrow = q.querySelector('.arrow');

  btn.addEventListener('click', () => {
    const isOpen = answer.style.maxHeight;
    document.querySelectorAll('.answer').forEach((a) => {
      a.style.maxHeight = null;
      a.style.paddingTop = 0;
      a.style.paddingBottom = 0;
    });
    document.querySelectorAll('.arrow').forEach((arr) => {
      arr.style.transform = 'rotate(0deg)';
    });
    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      answer.style.paddingTop = '10px';
      answer.style.paddingBottom = '10px';
      arrow.style.transform = 'rotate(90deg)';
    }
  });
});