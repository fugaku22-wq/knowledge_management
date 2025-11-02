document.addEventListener("DOMContentLoaded", () => {
  const paras = document.querySelectorAll("p, div");

  paras.forEach((el) => {
    const marginLeft = parseInt(window.getComputedStyle(el).marginLeft) || 0;
    if (marginLeft >= 20) {
      el.classList.add("indent-foldable");
      el.addEventListener("click", () => {
        el.classList.toggle("collapsed");
        let next = el.nextElementSibling;
        while (next) {
          const nextMargin = parseInt(window.getComputedStyle(next).marginLeft) || 0;
          if (nextMargin <= marginLeft) break;
          next.classList.toggle("indent-hidden");
          next = next.nextElementSibling;
        }
      });
    }
  });
});
