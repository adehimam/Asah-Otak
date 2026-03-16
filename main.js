// =============================================
//  BELAJAR CLAUDE — main.js
//  Progress tracker + Quiz logic
// =============================================

// ── PROGRESS TRACKER ──
function initChecklist(faseKey) {
  const items = document.querySelectorAll('.check-item');
  if (!items.length) return;

  // Load saved state dari localStorage
  items.forEach((item, i) => {
    const cb = item.querySelector('input[type="checkbox"]');
    const saved = localStorage.getItem(`${faseKey}_item_${i}`);
    if (saved === 'true') {
      cb.checked = true;
      item.classList.add('done');
    }

    cb.addEventListener('change', () => {
      localStorage.setItem(`${faseKey}_item_${i}`, cb.checked);
      item.classList.toggle('done', cb.checked);
      updateProgressBar(faseKey);
    });
  });

  updateProgressBar(faseKey);
}

function updateProgressBar(faseKey) {
  const items = document.querySelectorAll('.check-item');
  const total = items.length;
  const done = [...items].filter(i => i.querySelector('input').checked).length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  const fill = document.querySelector('.progress-bar-fill');
  const txt  = document.querySelector('.progress-text');
  if (fill) fill.style.width = pct + '%';
  if (txt)  txt.textContent = `${done} dari ${total} poin selesai (${pct}%)`;

  // Update top progress bar
  const topFill = document.querySelector('.top-progress-fill');
  if (topFill) topFill.style.width = pct + '%';
}

// ── QUIZ ──
function initQuiz() {
  const questions = document.querySelectorAll('.quiz-q');
  if (!questions.length) return;

  let answered = new Array(questions.length).fill(null);

  questions.forEach((q, qi) => {
    const opts = q.querySelectorAll('.quiz-opt');
    const correctIdx = parseInt(q.dataset.correct);

    opts.forEach((opt, oi) => {
      opt.addEventListener('click', () => {
        if (answered[qi] !== null) return; // sudah dijawab
        answered[qi] = oi;

        opts.forEach((o, i) => {
          // Selalu tandai jawaban benar dengan hijau
          if (i === correctIdx) o.classList.add('correct');
          // Tandai jawaban yang dipilih salah dengan merah
          if (i === oi && oi !== correctIdx) o.classList.add('wrong');
          o.disabled = true;
        });

        checkAllAnswered(questions.length, answered);
      });
    });
  });
}

function checkAllAnswered(total, answered) {
  const doneCount = answered.filter(a => a !== null).length;
  if (doneCount < total) return;

  // Hitung skor
  const questions = document.querySelectorAll('.quiz-q');
  let correct = 0;
  questions.forEach((q, i) => {
    if (answered[i] === parseInt(q.dataset.correct)) correct++;
  });

  const result = document.querySelector('.quiz-result');
  const scoreEl = result?.querySelector('.quiz-score');
  const msgEl   = result?.querySelector('.quiz-msg');

  if (!result) return;

  const pct = Math.round((correct / total) * 100);
  scoreEl.textContent = `${correct}/${total} Benar (${pct}%)`;

  if (pct === 100)     msgEl.textContent = "Sempurna! Kamu ngerti betul, sob! 🔥";
  else if (pct >= 60)  msgEl.textContent = "Lumayan! Review dikit yang salah ya sob 👍";
  else                 msgEl.textContent = "Santai, baca ulang materinya terus coba lagi 💪";

  result.classList.add('show');
  result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ── AUTO INIT ──
document.addEventListener('DOMContentLoaded', () => {
  // Ambil fase key dari body data attribute
  const faseKey = document.body.dataset.fase || 'fase1';
  initChecklist(faseKey);
  initQuiz();
});
