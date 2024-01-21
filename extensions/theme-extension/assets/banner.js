let banner = document.getElementById("banner");
let changeImage = document.getElementById("change-image");

banner.style.backgroundImage = `url(${banner.dataset.image})`;

changeImage.addEventListener("click", function () {
  let temp = banner.style.backgroundImage;
  banner.style.backgroundImage = `url(${banner.dataset.image2})`;
  banner.dataset.image2 = temp;
});
