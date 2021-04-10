import db, { storage } from "./firebase";
import {
  initSwiper,
  initToggle,
  setLoadingVisibility,
  asyncScrollTo,
} from "./utils";

if ("content" in document.createElement("template")) {
  const worksContainer = document.querySelector("#works-container");
  const template = document.querySelector("#work-template");

  var projectsRef = db.collection("projects");
  projectsRef
    .orderBy("date_dev", "desc")
    .get()
    .then((snapshot) => {
      snapshot.forEach((project) => {
        const itemTemplate = template.content.cloneNode(true);
        worksContainer.appendChild(buildWorkItem(project, itemTemplate));
        initSwiper(project.id, true);
      });
      setLoadingVisibility("worksLoading", false);
      asyncScrollTo();
    });
}

// Builder Functions
const buildWorkItem = (project, itemTemplate) => {
  const data = project.data();

  // Set id for reference in homepage
  itemTemplate.querySelector(".work").id = `${project.id}`;

  // Set Values
  const title = itemTemplate.querySelector(".title");
  const stack = itemTemplate.querySelector(".stack");
  const date = itemTemplate.querySelector(".date");
  const description = itemTemplate.querySelector(".description");

  title.innerText = data.title;
  stack.innerText = data.stack;
  date.innerText = data.date_dev.toDate().getFullYear();
  description.innerHTML = data.descriptionHtml;

  // Build Templated Items
  const swiperWrapper = itemTemplate.querySelector(".swiper-wrapper");
  buildImageSlides(swiperWrapper, data);

  const work_list = itemTemplate.querySelector(".links");
  buildLinkIconList(work_list, data);

  const featuresList = itemTemplate.querySelector(".features");
  if (!data.features)
    itemTemplate.querySelector(".list-header").classList.add("d-none");
  else buildFeaturesList(featuresList, data);

  // INITIALIZATIONS

  // For Swiper init after append
  const swiperContainer = itemTemplate.querySelector(".swiper-container");
  const swiperPagination = itemTemplate.querySelector(".swiper-pagination");
  swiperContainer.id = `${project.id}-swiper`;
  swiperPagination.id = `${project.id}-pagination`;
  // Toggle
  const toggle = itemTemplate.querySelector(".collapsible-toggle");
  const target = itemTemplate.querySelector(".collapsible");
  initToggle(toggle, target);

  return itemTemplate;
};

const buildImageSlides = (parent, data) => {
  // Image Slides Template
  const swiperSlideTemplate = document.createElement("div");
  swiperSlideTemplate.classList.add(
    "swiper-slide",
    "swiper-slide-center" /* TODO: Center */
  );
  // Slide - <img>
  swiperSlideTemplate
    .appendChild(document.createElement("img"))
    .classList.add("swiper-slide-image");
  // Slide - label
  swiperSlideTemplate
    .appendChild(document.createElement("span"))
    .classList.add("swiper-slide-label");

  // Set Images
  data.images.forEach((image) => {
    const slideElement = swiperSlideTemplate.cloneNode(true);
    const imageLabel = slideElement.querySelector("span");
    const imageElement = slideElement.querySelector("img");

    storage
      .ref(image.url)
      .getDownloadURL()
      .then((url) => (imageElement.src = url));
    imageElement.alt = image.label;
    imageLabel.innerText = image.label;

    parent.appendChild(slideElement);
  });
};

const buildFeaturesList = (parent, data) => {
  if (data.features) {
    data.features.forEach((feature) => {
      const featureElement = document.createElement("li");
      featureElement.innerText = feature;
      parent.appendChild(featureElement);
    });
  }
};

const buildLinkIconList = (parent, data) => {
  const work_list_li = document.createElement("li");
  // <li> -> <a>
  work_list_li
    .appendChild(document.createElement("a"))
    // <a> -> <img>
    .appendChild(document.createElement("img"))
    .classList.add("icon-sm");

  // Set Links
  if (data.links) {
    data.links.forEach((link) => {
      const linkItem = work_list_li.cloneNode(true);
      linkItem.querySelector("a").href = link.url;
      linkItem.querySelector("img").classList.add(`icon-${link.site}`);

      parent.appendChild(linkItem);
    });
  }
};
