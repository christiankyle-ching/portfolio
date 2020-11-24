"use strict";

import db, { storage } from './firebase';
import Swiper from "swiper";

import firebase from 'firebase/app';
require("firebase/storage");
require("firebase/firestore");

// Works / Projects template items
if ("content" in document.createElement("template")) {
    // works.html template
    if (document.querySelector("#work-template") != null) {
        var worksContainer = document.querySelector("#works");
        var template = document.querySelector("#work-template");

        // Fetch Works
        var projectsRef = db.collection("projects");
        projectsRef.orderBy('date_dev', 'desc').get()
            .then((snapshot) => {
                snapshot.forEach((project) => {
                    let rowItem = template.content.cloneNode(true);
                    worksContainer.appendChild(_buildWorkItem(project, rowItem));
                    initSwiper(project.id);
                });

                setLoadingProgress(false);
            })
            .catch((error) => {
                console.error(`Error fetching collection: ${error}`);
            })
    }


} else {
    // TODO: Unsupported template tag
}

// Slider Options
const sliderOpts = {
    direction: "horizontal",
    slidesPerView: 1,
    freeMode: true,
    freeModeMomentum: true,
    freeModeMomentumRatio: 0.3,
};

// BUILDER FUNCTIONS
const _buildWorkItem = (work, itemTemplate) => {
    const workData = work.data();

    // Inject id to w-col
    itemTemplate.querySelector(".w-col").id = `${workData.prefix}`;

    // Get swiper-container
    let swiperContainer = itemTemplate.querySelector(".swiper-container");

    // Inject {prefix}-slider class for identifying slider (Swiper.js requirement)
    swiperContainer.classList.add(`${work.id}-slider`);

    // Slide Template
    let tmpSlide = document.createElement("div");
    tmpSlide.classList.add("swiper-slide");
    let imgObj = document.createElement("img");
    let imgLabel = document.createElement("div");
    imgLabel.classList.add("img-label");
    tmpSlide.appendChild(imgObj);
    tmpSlide.appendChild(imgLabel);

    // Set Slider Images
    let swiperWrapper = swiperContainer.querySelector(".swiper-wrapper");
    
    workData.images.forEach((img, index) => {
        let slide = tmpSlide.cloneNode(true);

        let divImg = slide.querySelector("img");
        storage.ref(img.url).getDownloadURL().then(url => divImg.src = url);

        let divLabel = slide.querySelector(".img-label");
        divLabel.innerText = img.label;

        swiperWrapper.appendChild(slide);
    });

    

    // Inject pagination class
    let pagination = swiperContainer.querySelector(".swiper-pagination");
    pagination.classList.add(`${workData.prefix}-pagination`);

    // Inject Title, Stack
    let title = itemTemplate.querySelector(".w-title");
    title.innerText = `${workData.title}`;
    let stack = itemTemplate.querySelector(".w-stack");

    // Inject Date DEBUG
    const date_dev = new Date(workData.date_dev.toDate());
    stack.innerText = `${workData.stack} | ${date_dev.getFullYear()}`;

    // Inject id={prefix}-p, Description
    let divDescContainer = itemTemplate.querySelector(".w-p");
    let divDescription = divDescContainer.querySelector("div");
    divDescription.innerHTML = workData.descriptionHtml;
    divDescription.querySelectorAll('a').forEach((e) => {
        e.classList.add('underline');
        e.target = '_blank';
    });

    // Features
    let featureHeader = document.createElement('h4')
    featureHeader.classList.add('list-header')
    featureHeader.innerText = 'Features'

    // Inject features list
    if (workData.features) {
        let featuresList = document.createElement("ul");
        featuresList.classList.add('features-list')

        featuresList.appendChild(featureHeader)

        workData.features.forEach((f) => {
            let featureItem = document.createElement("li");
            featureItem.innerText = f;
            featuresList.append(featureItem);
        });


        divDescription.appendChild(featuresList);
    }

    // Project Links
    let divLinks = itemTemplate.querySelector(".w-links");
    // Project Link Template - Buttons
    let tmpLinkItem = document.createElement("li");
    tmpLinkItem
        .appendChild(document.createElement("a"))
        .appendChild(document.createElement("img"));

    workData.links.forEach((l) => {
        let linkItem = tmpLinkItem.cloneNode(true);

        let linkA = linkItem.querySelector("a")
        linkA.href = l.url;
        linkA.target = '_blank';
        linkItem.querySelector("img").classList.add('link-icon');
        linkItem.querySelector("img").classList.add(l.site);

        if (l.disabled) {
            linkItem.querySelector("a").classList.add("disabled");
        } else {
            if (l.site === 'open' || l.site === 'download') {
                let _openlink = document.createElement('a')
                _openlink.href = l.url
                _openlink.target = '_blank'

                let _img = document.createElement('img')
                _img.classList.add('link-icon-sm', l.site)
                _openlink.appendChild(_img)

                title.appendChild(_openlink)
            }
        }

        divLinks.appendChild(linkItem);
    });

    // Show / Hide Button
    let toggle = itemTemplate.querySelector(".w-toggle");

    toggle.addEventListener("click", () => {
        if (divDescContainer.classList.contains("show-p")) {
            divDescContainer.classList.remove("show-p");
            toggle.innerText = "Show More";
        } else {
            divDescContainer.classList.add("show-p");
            toggle.innerText = "Hide";
        }
    });

    return itemTemplate;
}

const initSwiper = (id) => {
    new Swiper(`.${id}-slider`, {
        ...sliderOpts,
        pagination: {
            el: `.${id}-pagination`,
            type: "bullets",
        },
    });
}

const setLoadingProgress = (enabled) => {
    const loadingOverlay = document.querySelector('#works').querySelector('.loadingOverlay');

    loadingOverlay.style.opacity = (enabled) ? 1.0 : 0.0;
    setTimeout(() => {
        loadingOverlay.style.display = (enabled) ? 'flex' : 'none';
    }, 500);
}
