const capsule = document.querySelector(".capsule-section");
const heroSection = document.querySelector(".hero-section");

window.addEventListener("resize", () => {
  const position = capsule.getBoundingClientRect();
  const parent_container_size = heroSection.getBoundingClientRect();
  if (!width || !height) return;
  const x_position = Math.abs(parent_container_size.width - position.x);
  const y_position = Math.abs(parent_container_size.height - position.y);
  capsule.style.backgroundPosition = `${x_position}px ${y_position}px`;
});
