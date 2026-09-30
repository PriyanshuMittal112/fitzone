export default function decorate(block) {
  const counters = block.querySelectorAll('h2');

  counters.forEach((counter) => {
    const target = Number(counter.textContent);

    let count = 0;

    const updateCount = () => {
      count += target / 100;

      if (count < target) {
        counter.textContent = Math.floor(count);
        requestAnimationFrame(updateCount);
      } else {
        counter.textContent = target;
      }
    };

    updateCount();
  });
}
