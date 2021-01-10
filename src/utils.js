import Swiper, { Pagination } from "swiper";

Swiper.use([Pagination]);

// Slider Options
const swiperOpts = {
  direction: "horizontal",
  slidesPerView: 1,
};

const initSwiper = (id, hasPagination) => {
  const optionalOpts = {};
  if (hasPagination)
    optionalOpts.pagination = {
      el: `#${id}-pagination`,
      type: "bullets",
    };

  new Swiper(`#${id}-swiper`, {
    ...swiperOpts,
    ...optionalOpts,
  });
};

const initToggle = (toggle, target) => {
  if (target && toggle) {
    toggle.addEventListener("click", () => {
      toggle.innerText = target.classList.contains("collapsed")
        ? "Hide"
        : "Show More";
      target.classList.toggle("collapsed");
    });
  }
};

const setLoadingVisibility = (id, enabled) => {
  // TODO
  const loadingElement = document.querySelector(`#${id}`);
  if (loadingElement) {
    loadingElement.style.opacity = enabled ? 1.0 : 0.0;
    setTimeout(() => {
      loadingElement.style.display = enabled ? "unset" : "none";
    }, 500);
  }
};

const asyncScrollTo = () => {
  const params = new URLSearchParams(window.location.search);
  const target = document.querySelector(`#${params.get("scrollTo")}`);
  if (target) target.scrollIntoView({ behavior: "smooth" });
};

export { initSwiper, initToggle, setLoadingVisibility, asyncScrollTo };
