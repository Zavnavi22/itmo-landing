const badRegex = /^([a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
const safeRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

function runTest(regex, maxN = 30, limitMs = 100) {
  const results = [];

  for (let n = 10; n <= maxN; n += 2) {
    const value = 'a'.repeat(n) + '@' + 'b'.repeat(5) + '.c';

    const start = performance.now();
    regex.test(value);
    const elapsed = performance.now() - start;

    results.push({ n, time: elapsed, stopped: false });

    if (elapsed > limitMs) {
      results[results.length - 1].stopped = true;
      break;
    }
  }

  return results;
}

function renderResults(title, results, variant) {
  const container = document.getElementById('results');

  const old = document.getElementById(`table-${variant}`);
  if (old) old.remove();

  const isVuln = variant === 'vulnerable';
  const titleClass = isVuln ? 'result-title--vulnerable' : 'result-title--safe';
  const cardClass = isVuln ? 'result-card--vulnerable' : 'result-card--safe';
  const barClass = isVuln ? 'bar--vulnerable' : 'bar--safe';

  const maxTime = Math.max(...results.map((r) => r.time), 1);
  const hasStopped = results.some((r) => r.stopped);

  const rows = results
    .map(
      (r) => `
        <tr class="${r.stopped ? 'row-stopped' : 'row-normal'}">
          <td>${r.n}</td>
          <td>${r.time.toFixed(2)}</td>
          <td class="bar-cell">
            <div class="bar ${barClass}" style="width: ${(r.time / maxTime) * 100}%"></div>
          </td>
        </tr>
      `
    )
    .join('');

  const warning = hasStopped
    ? `<p class="warning">Тест остановлен: превышен лимит 100 мс</p>`
    : '';

  const div = document.createElement('div');
  div.id = `table-${variant}`;
  div.className = `result-card ${cardClass}`;
  div.innerHTML = `
    <h3 class="result-title ${titleClass}">${title}</h3>
    <table class="result-table">
      <thead>
        <tr>
          <th>n</th>
          <th>Время (ms)</th>
          <th>Визуализация</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
    ${warning}
  `;
  container.appendChild(div);
}

function runAndRender(btn, regex, title, variant, limitMs = 100) {
  btn.disabled = true;
  const originalText = btn.textContent;
  btn.textContent = 'Выполняется...';

  setTimeout(() => {
    const results = runTest(regex, 30, limitMs);
    renderResults(title, results, variant);

    btn.disabled = false;
    btn.textContent = originalText;
  }, 50);
}

const startTime = performance.now();
const MAX_TICKS = 2000;

let tickCount = 0;
let lastTick = performance.now();
let maxLag = 0;

function monitorLoop() {
  const now = performance.now();
  const gap = now - lastTick;

  if (gap > 50) {
    maxLag = Math.max(maxLag, gap);

    document.getElementById('lagDisplay').hidden = false;
    document.getElementById('lagValue').textContent = gap.toFixed(0);

    document.getElementById('maxLagBlock').hidden = false;
    document.getElementById('maxLagValue').textContent = maxLag.toFixed(0);
  }

  lastTick = now;

  tickCount = (tickCount + 1) % (MAX_TICKS + 1);
  document.getElementById('tickCounter').textContent = tickCount;

  const elapsedSec = (now - startTime) / 1000;
  document.getElementById('uptimeCounter').textContent = elapsedSec.toFixed(1);

  requestAnimationFrame(monitorLoop);
}

document.addEventListener('DOMContentLoaded', () => {
  const btnBad = document.getElementById('btnBad');
  const btnSafe = document.getElementById('btnSafe');
  const btnDangerous = document.getElementById('btnDangerous');

  btnBad.addEventListener('click', () => {
    runAndRender(btnBad, badRegex, 'Результаты уязвимой регулярки', 'vulnerable');
  });

  btnSafe.addEventListener('click', () => {
    runAndRender(btnSafe, safeRegex, 'Результаты безопасной регулярки', 'safe');
  });

  btnDangerous.addEventListener('click', () => {
    maxLag = 0;

    btnDangerous.disabled = true;
    const originalText = btnDangerous.textContent;
    btnDangerous.textContent = 'Браузер завис...';

    setTimeout(() => {
      const results = runTest(badRegex, 28, Infinity);
      renderResults(
        'Результаты уязвимой регулярки (без лимита)',
        results,
        'vulnerable'
      );

      btnDangerous.disabled = false;
      btnDangerous.textContent = originalText;
    }, 50);
  });

  requestAnimationFrame(monitorLoop);
});