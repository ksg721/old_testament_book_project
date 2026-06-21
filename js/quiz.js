export function initQuiz(quizData) {
  const form = document.querySelector("#quiz-form");

  if (!form || !quizData) return;

  form.innerHTML = "";

  quizData.forEach((q, index) => {
    const fieldset = document.createElement("fieldset");

    fieldset.innerHTML = `
            <legend>${q.question}</legend>
            ${q.answers
              .map(
                (a, i) => `
                <label>
                    <input type="radio" name="q${index}" value="${i}">
                    ${a}
                </label>
            `,
              )
              .join("")}
        `;

    form.appendChild(fieldset);
  });

  const button = document.createElement("button");
  button.textContent = "Submit Quiz";

  form.appendChild(button);

  const result = document.createElement("p");
  result.id = "quiz-result";

  form.appendChild(result);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let score = 0;

    quizData.forEach((q, i) => {
      const selected = form.querySelector(`input[name="q${i}"]:checked`);

      if (selected && Number(selected.value) === q.correct) {
        score++;
      }
    });

    result.textContent = `You scored ${score} / ${quizData.length}`;
  });
}
