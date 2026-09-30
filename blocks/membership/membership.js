export default function decorate(block) {
  const rows = [...block.children];

  const wrapper = document.createElement('div');
  wrapper.className = 'membership-wrapper';

  rows.slice(1).forEach((row, index) => {
    const cols = [...row.children];

    if (cols.length < 3) return;

    const plan = cols[0].textContent.trim();
    const price = cols[1].textContent.trim();
    const features = cols[2].textContent.trim();

    const card = document.createElement('div');
    card.className = 'membership-card';

    if (plan.toLowerCase() === 'premium') {
      card.classList.add('featured');
    }

    card.innerHTML = `
      <h3>${plan}</h3>
      <div class="price">${price}</div>
      <p>${features}</p>
      <aontactJoin Now</a>
    `;

    wrapper.append(card);
  });

  block.innerHTML = '';
  block.append(wrapper);
}
