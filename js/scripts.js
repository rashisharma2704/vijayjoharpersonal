const counters = document.querySelectorAll('.counter');
  const speed = 200; // Lower is faster

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.innerText;
      const count = +counter.getAttribute('data-count') || 0;
      const inc = target / speed;

      if (count < target) {
        counter.setAttribute('data-count', count + inc);
        counter.innerText = Math.ceil(count + inc).toLocaleString();
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    counter.innerText = "0";
    updateCount();
  });