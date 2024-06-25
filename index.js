const capsule = document.querySelector(".capsule-section");
const heroSection = document.querySelector(".hero-section");

function setPosition() {
  const position = capsule.getBoundingClientRect();
  const parent_container_size = heroSection.getBoundingClientRect();
  const x_position = Math.abs(parent_container_size.width - position.x);
  const y_position = Math.abs(parent_container_size.height - position.y);
  heroSection.style.backgroundSize = `${parent_container_size.width}px ${parent_container_size.height}px`;
  capsule.style.backgroundPosition = `${x_position}px ${y_position}px`;
}

window.addEventListener("resize", setPosition);

setPosition();
