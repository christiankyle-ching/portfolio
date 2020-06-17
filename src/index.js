// Main CSS import
require("./style/main.css");

// Swiper JS import
import Swiper from "swiper";
require("swiper/css/swiper.min.css");

// Import images

// Budget Planner images
import budget_logo from "./images/budget-planner/logo.png";
import budget_dark from "./images/budget-planner/dark.png";
import budget_summary from "./images/budget-planner/summary.png";
import budget_toplist from "./images/budget-planner/toplist.png";
import budget_savings from "./images/budget-planner/savings.png";
import budget_help from "./images/budget-planner/help.png";
import budget_backup from "./images/budget-planner/backup.png";

// Edzer images
import edzer_logo from "./images/edzer/logo.png";
import edzer_add from "./images/edzer/add.png";
import edzer_dashboard from "./images/edzer/dashboard.png";
import edzer_instruments from "./images/edzer/instruments.png";
import edzer_login from "./images/edzer/login.png";
import edzer_schedules from "./images/edzer/schedules.png";

// SchoolCMS
import schoolcms_login from './images/schoolcms/login.png';
import schoolcms_courses from './images/schoolcms/courses.png';
import schoolcms_lessons from './images/schoolcms/lessons.png';
import schoolcms_subjects from './images/schoolcms/subjects.png';

var works = [
  {
    title: "Budget Planner",
    date_dev: "2020",
    stack: "Ionic, Angular",
    description: `
          A simple budget planner that I made using <a href="https://ionicframework.com/" class="underline">Ionic</a>
          / <a href="https://angular.io/" class="underline">Angular</a> stack. While starting to learn about Ionic, 
          it has come to my idea to make a relatively simple budget planner/tracking app targeted for highschool
          students that hopefully, they can use to track their allowances and expenses, and might encourage them
          to save some of their money.
        `,
    features: [
      "Day-to-day tracking of allowances and expenses",
      "Generate monthly summary, provide basic insight of expenditures and income",
      "Able to backup data to a file for later recovery",
      "Has a Help & Feedback feature that answers FAQs and provides an email box for suggestions",
    ],
    prefix: "budget",
    images: [
      {
        url: budget_logo,
        label: "Swipe to right for more images!",
      },
      {
        url: budget_dark,
        label: "Supports dark mode",
      },
      {
        url: budget_summary,
        label: "Generate montly overview",
      },
      {
        url: budget_toplist,
        label: "View your expenses",
      },
      {
        url: budget_savings,
        label: "Track your savings",
      },
      {
        url: budget_help,
        label: "Never feel clueless! I'm here.",
      },
      {
        url: budget_backup,
        label: "Even supports local backup!",
      },
    ],
    links: [
      {
        site: "github",
        url: "#",
        disabled: true,
      },
      {
        site: "open",
        url: "#",
        disabled: true,
      },
    ],
  },
  {
    title: "School Online Content System",
    date_dev: "2020",
    stack: "Django, Python",
    description: `
        A yet another simple website using <a href="https://www.djangoproject.com/" class="underline">Django</a>
        / <a href="https://www.python.org/" class="underline">Python</a> stack. As I have been eager to learn Python, 
        I have stumbled upon the Django framework and has integrated it with 
        <a href="https://django-googledrive-storage.readthedocs.io/en/latest/" class="underline">Google Drive API</a> 
        to host uploaded files by the users.
    `,
    features: [
      "Has basic user registration",
      "Also supports email password reset through Gmail's SMTP",
      "Supports uploads of files online using Google Drive API (using a service account)",
      "Limits access of students signed up to access only those lessons they are enrolled to",
      "Targeted for use on small-scale schools only",
    ],
    prefix: "schoolcms",
    images: [
      {
        url: schoolcms_login,
        label: "Login Page",
      },
      {
        url: schoolcms_courses,
        label: "Responsive design",
      },
      {
        url: schoolcms_lessons,
        label: "Download lessons hosted online",
      },
      {
        url: schoolcms_subjects,
        label: "View your subjects depending on your course",
      },
    ],
    links: [
      {
        site: "github",
        url: "#",
        disabled: true,
      },
    ],
  },
  {
    title: "Edzer Studio Schedule Management System",
    date_dev: "2019",
    stack: "C#, MySQL",
    description: `
        This is a group project that I made together with a team, as a requirement for one of my 
        database-related subjects on my 2nd year. Along with a planned database schema, an interview 
        with <a href="https://www.facebook.com/EDZERSTUDIO/" class="underline">Edzer Music Studio</a>, this WPF application (C# and MySQL served on XAMPP) features a scheduling 
        system with fees computation based on hours and intrument rentals, intrument management, and a 
        user panel for the administrator to assign other users with less privileges to the system.
    `,
    features: [
      "Schedule management that enables system user to create, update, and delete schedule records",
      "Notifies the system user (admin or an employee), on upcoming schedules about to start",
      "Able to calculate rental fee based on duration of rent, as well as add-ons (instrument rentals)",
      "Management of instruments available for rental",
      "User account control with two (2) levels of privileges (administrator and basic user).",
    ],
    prefix: "edzer",
    images: [
      {
        url: edzer_logo,
        label: "A Recording Studio Scheduling System",
      },
      {
        url: edzer_login,
        label: "Login",
      },
      {
        url: edzer_dashboard,
        label: "Dashboard Overview",
      },
      {
        url: edzer_add,
        label: "Add Schedules",
      },
      {
        url: edzer_schedules,
        label: "Be reminded of who's next",
      },
      {
        url: edzer_instruments,
        label: "Manage Instruments",
      },
    ],
    links: [
      {
        site: "github",
        url: "#",
        disabled: true,
      },
    ],
  },
];

// Check if template is supported
var worksDiv = document.querySelector("#works");

if ("content" in document.createElement("template")) {
  if (document.querySelector("#work-template") != null) {
    var template = document.querySelector("#work-template");

    works.forEach((e) => {
      // Clone template content
      let row = template.content.cloneNode(true);

      // Get swiper-container
      let swiperContainer = row.querySelector(".swiper-container");
      // Inject {prefix}-slider class for identifying slider (Swiper.js requirement)
      swiperContainer.classList.add(`${e.prefix}-slider`);

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
      e.images.forEach((img) => {
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
      pagination.classList.add(`${e.prefix}-pagination`);

      // Inject Title, Stack
      let title = row.querySelector(".w-title");
      title.innerText = e.title;
      let stack = row.querySelector(".w-stack");
      stack.innerText = `${e.stack} | ${e.date_dev}`;

      // Inject id={prefix}-p, Description
      let divDesc = row.querySelector(".w-p");
      let divDescP = divDesc.querySelector("p");
      divDescP.innerHTML = e.description;

      // Inject features list
      if (e.features) {
        let featuresList = document.createElement("ul");

        e.features.forEach((f) => {
          let featureItem = document.createElement("li");
          featureItem.innerText = f;
          featuresList.append(featureItem);
        });

        divDescP.appendChild(featuresList);
      }

      // Get ul links
      let divLinks = row.querySelector(".w-links");

      // Create li link template
      let tmpLinkItem = document.createElement("li");
      tmpLinkItem
        .appendChild(document.createElement("a"))
        .appendChild(document.createElement("img"));

      // For each link, clone link item template then append to divLinks
      e.links.forEach((l) => {
        // Clone template first
        let linkItem = tmpLinkItem.cloneNode(true);

        // Inject Links with url and class (for image)
        linkItem.querySelector("a").href = l.url;
        if (l.disabled) linkItem.querySelector("a").classList.add("disabled");
        linkItem.querySelector("img").classList.add(l.site);

        divLinks.appendChild(linkItem);
      });

      // Show / Hide Button
      // let description = row.querySelector(`#${e.prefix}-p`);
      let toggle = row.querySelector(".w-toggle");

      toggle.addEventListener("click", () => {
        if (divDesc.classList.contains("show-p")) {
          divDesc.classList.remove("show-p");
          toggle.innerText = "Show More";
        } else {
          divDesc.classList.add("show-p");
          toggle.innerText = "Hide";
        }
      });

      console.log(row);

      worksDiv.appendChild(row);
    });
  }
} else {
  // Callback function
}

// Swiper JS init Swipers
var sliderOpts = {
  direction: "horizontal",
  slidesPerView: 1,
  freeMode: true,
  freeModeMomentum: true,
  freeModeMomentumRatio: 0.3,
};

var budgetSwiper = new Swiper(".budget-slider", {
  ...sliderOpts,
  pagination: {
    el: ".budget-pagination",
    type: "bullets",
  },
});
var schoolcmsSwiper = new Swiper(".schoolcms-slider", {
  ...sliderOpts,
  pagination: {
    el: ".schoolcms-pagination",
    type: "bullets",
  },
});
var edzerSwiper = new Swiper(".edzer-slider", {
  ...sliderOpts,
  pagination: {
    el: ".edzer-pagination",
    type: "bullets",
  },
});
