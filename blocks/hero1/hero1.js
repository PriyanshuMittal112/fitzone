export default function decorate(block) {
  const rows = [...block.children];
  const data = {};

  rows.forEach((row) => {
    const cols = row.querySelectorAll('div');

    if (cols.length === 2) {
      const key = cols[0].textContent.trim().toLowerCase();

      if (key === 'background image') {
        const img = cols[1].querySelector('img');
        data[key] = img ? img.src : '';
      } else {
        data[key] = cols[1].textContent.trim();
      }
    }
  });

  const bgImage = data['background image'] || '';

  block.innerHTML = `
    <div class="hero-content">
      <div class="hero-left">
        <span class="hero-tag">FITNESS & WELLNESS</span>

        <h1>
          ${data.title || 'Transform Your Fitness Journey'}
        </h1>

        <p>
          ${
            data.description ||
            'Join thousands of members achieving their goals with expert trainers and modern facilities.'
          }
        </p>

        <div class="hero-buttons">
          #membership
            ${data['primary cta'] || 'Start Today'}
          </a>

          #programs
            ${data['secondary cta'] || 'Explore Programs'}
          </a>
        </div>
      </div>

      <div class="hero-right">
        ${
          bgImage
            ? `${bgImage}`
            : ''
        }
      </div>
    </div>
  `;
}
