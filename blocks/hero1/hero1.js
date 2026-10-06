
export default function decorate(block) {
  const rows = [...block.children];
  const data = {};

  rows.forEach((row) => {
    const cols = row.querySelectorAll('div');

    if (cols.length === 2) {
      const key = cols[0].textContent.trim().toLowerCase();
      const value = cols[1].textContent.trim();
      data[key] = value;
    }
  });

  block.innerHTML = `
    <div class="hero-content">

      <div class="hero-left">

        <span class="hero-tag">FITNESS & WELLNESS</span>

        <h1>${data.title || 'Transform Your Fitness Journey'}</h1>

        <p>
          ${
            data.description ||
            'Join thousands of members achieving their goals with expert trainers and modern facilities.'
          }
        </p>

      <div class="hero-buttons">
<a href="#membership" class="ry cta'] || 'Start Today'}
</a>
 
#programs
${data['secondary cta'] || 'Explore Programs'}
</a>
</div>

    </div>
  `;
}
