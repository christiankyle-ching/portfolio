"use strict";

// Import variables
import Global from './globals';

// Import swiper
import Swiper from "swiper";

function _buildWorkItem(work, itemTemplate) {
    // Inject id to w-col
    itemTemplate.querySelector(".w-col").id = `${work.prefix}`;

    // Get swiper-container
    let swiperContainer = itemTemplate.querySelector(".swiper-container");
    // Inject {prefix}-slider class for identifying slider (Swiper.js requirement)
    swiperContainer.classList.add(`${work.prefix}-slider`);

    // Get swiperWrapper
    let swiperWrapper = swiperContainer.querySelector(".swiper-wrapper");

    // Create slide template
    let tmpSlide = document.createElement("div");
    tmpSlide.classList.add("swiper-slide");
    let imgObj = document.createElement("img");
    let imgLabel = document.createElement("div");
    imgLabel.classList.add("img-label");
    tmpSlide.appendChild(imgObj);
    tmpSlide.appendChild(imgLabel);

    // For each image, clone slide template and assign values
    work.images.forEach((img, index) => {
        // Clone swiper slide template
        let slide = tmpSlide.cloneNode(true);

        // Get img tag and assign src
        let divImg = slide.querySelector("img");
        divImg.src = img.url;

        // Get img-label and assign label
        let divLabel = slide.querySelector(".img-label");
        divLabel.innerText = img.label;

        // Append to swiper wrapper
        swiperWrapper.appendChild(slide);
    });

    // Inject pagination class
    let pagination = swiperContainer.querySelector(".swiper-pagination");
    pagination.classList.add(`${work.prefix}-pagination`);

    // Inject Title, Stack
    let title = itemTemplate.querySelector(".w-title");
    title.innerText = `${work.title}`;
    let stack = itemTemplate.querySelector(".w-stack");
    stack.innerText = `${work.stack} | ${work.date_dev}`;

    // Inject id={prefix}-p, Description
    let divDescContainer = itemTemplate.querySelector(".w-p");
    let divDescription = divDescContainer.querySelector("div");
    divDescription.innerHTML = work.description;
    divDescription.querySelectorAll('a').forEach((e) => {
        e.classList.add('underline');
        e.target = '_blank';
    });

    let featureHeader = document.createElement('h4')
    featureHeader.classList.add('list-header')
    featureHeader.innerText = 'Features'
    // Inject features list
    if (work.features) {
        let featuresList = document.createElement("ul");
        featuresList.classList.add('features-list')

        featuresList.appendChild(featureHeader)

        work.features.forEach((f) => {
            let featureItem = document.createElement("li");
            featureItem.innerText = f;
            featuresList.append(featureItem);
        });


        divDescription.appendChild(featuresList);
    }

    // Get ul links
    let divLinks = itemTemplate.querySelector(".w-links");

    // Create li link template
    let tmpLinkItem = document.createElement("li");
    tmpLinkItem
        .appendChild(document.createElement("a"))
        .appendChild(document.createElement("img"));

    // For each link, clone link item template then append to divLinks
    work.links.forEach((l) => {
        // Clone template first
        let linkItem = tmpLinkItem.cloneNode(true);

        // Inject Links with url and class (for image)
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

// Works / Projects template items
if ("content" in document.createElement("template")) {
    // works.html template
    if (document.querySelector("#work-template") != null) {
        var worksContainer = document.querySelector("#works");

        var template = document.querySelector("#work-template");

        Global.works.forEach((work) => {
            // Clone template content
            let rowItem = template.content.cloneNode(true);

            worksContainer.appendChild(_buildWorkItem(work, rowItem));
        });
    }


} else {
    // TODO: Unsupported template tag
}

// Works - init Swipers
var sliderOpts = {
    direction: "horizontal",
    slidesPerView: 1,
    freeMode: true,
    freeModeMomentum: true,
    freeModeMomentumRatio: 0.3,
};

let sliderPrefixes = Global.works.map((work) => work.prefix)

for (let prefix of sliderPrefixes) {
    new Swiper(`.${prefix}-slider`, {
        ...sliderOpts,
        pagination: {
            el: `.${prefix}-pagination`,
            type: "bullets",
        },
    });
}