const marquees = document.querySelectorAll<HTMLElement>(".marquee");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation(): void {
  marquees.forEach((marquee) => {
    marquee.setAttribute("data-animate", "true");

    const marqueeInner = marquee.querySelector<HTMLElement>(".marquee__inner");
    if (!marqueeInner) return;

    const marqueeContent = Array.from(marqueeInner.children);

    marqueeContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      duplicatedItem.setAttribute("aria-hidden", "true");
      marqueeInner.appendChild(duplicatedItem);
    });
  });
}
