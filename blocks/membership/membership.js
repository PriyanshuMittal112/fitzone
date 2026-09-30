export default function decorate(block) {
  const rows = [...block.querySelectorAll(':scope > div')];

  if (rows.length < 4) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'membership-wrapper';

  rows.slice(1).forEach((row, index) => {
    const cols = row.querySelectorAll('div');

    const plan = cols[0]?.textContent.trim();
    const price = cols[1]?.textContent.trim();
    const feature = cols[2]?.textContent.trim();

    const card = document.createElement('div');
    card.className = 'membership-card';

    if (index === 1) {
      card.classList.add('featured');
    }

    card.innerHTML = `
      <div class="membership-plan">${plan}</div>
      <div class="membership-price">${price}</div>
      <div class="membership-feature">${feature}</div>
      <a href="#contact" class="membership-btn">Join Now</);
  });

  block.innerHTML = '';
  block.append(wrapper);
}
