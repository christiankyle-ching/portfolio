// Main CSS import
// require("./style/main.scss");
import './style/main.scss'

// Swiper JS import
import Swiper from "swiper";
require("swiper/css/swiper.min.css");



// #region images

// Budget Planner images
import budget_logo from "./images/budget-planner/logo.webp";
import budget_dark from "./images/budget-planner/dark.webp";
import budget_summary from "./images/budget-planner/summary.webp";
import budget_toplist from "./images/budget-planner/toplist.webp";
import budget_savings from "./images/budget-planner/savings.webp";
import budget_help from "./images/budget-planner/help.webp";
import budget_backup from "./images/budget-planner/backup.webp";

// RoomFiles
import roomfiles_logo from "./images/roomfiles/logo.webp";
import roomfiles_files from "./images/roomfiles/files.webp";
import roomfiles_announcements from "./images/roomfiles/announcements.webp";
import roomfiles_notifications from "./images/roomfiles/notifications.webp";
import roomfiles_people from "./images/roomfiles/people.webp";
import roomfiles_room from "./images/roomfiles/room.webp";

// Edzer images
import edzer_logo from "./images/edzer/logo.webp";
import edzer_add from "./images/edzer/add.webp";
import edzer_dashboard from "./images/edzer/dashboard.webp";
import edzer_instruments from "./images/edzer/instruments.webp";
import edzer_login from "./images/edzer/login.webp";
import edzer_schedules from "./images/edzer/schedules.webp";

// #endregion



// Variables
var works = [
  
  // RoomFiles
  {
    title: "RoomFiles",
    date_dev: "2020",
    stack: "Django, Python",
    description: 
    `
        <p>
        RoomFiles is a small project I made while learning Python and Django. Using 
        <a href="https://developers.google.com/drive" class="underline">Google Drive API</a>,
        this simple web-app provides a place for users to upload files to (primarily lesson files 
        for online learning), make announcements, all in a virtual room. Due to the ongoing 
        (at the time of writing) pandemic situation, online learning is what our educational system
        relies to, and this might help students store their lesson files on the cloud.
        </p>
        
        <p>The web-app is up and available for viewing using the links below.</p>
    `,
    features: [
      "Make a room and invite your colleagues",
      "Upload your lesson files",
      "Make announcements to stay on track",
      "View and manage people in your room",
    ],
    prefix: "roomfiles",
    images: [
      {
        url: roomfiles_logo,
        label: "RoomFiles",
      },
      {
        url: roomfiles_room,
        label: "Create a room with your friends / colleagues!",
      },
      {
        url: roomfiles_files,
        label: "Store and share your lesson files",
      },
      {
        url: roomfiles_announcements,
        label: "Make announcements for everyone to see",
      },
      {
        url: roomfiles_notifications,
        label: "Get notified on recent activities",
      },
      {
        url: roomfiles_people,
        label: "Manage people in your room",
      },
    ],
    links: [
      {
        site: "github",
        url: "https://github.com/christiankyle-ching/roomfiles",
        disabled: false,
      },
      {
        site: "open",
        url: "https://roomfiles.herokuapp.com/",
        disabled: false,
      },
    ],
  },

  // Budget Planner
  {
    title: "Budget Planner",
    date_dev: "2020",
    stack: "Ionic, Angular",
    description: 
    `
      <p>
      A simple budget planner that I made using <a href="https://ionicframework.com/" class="underline">Ionic</a>
      / <a href="https://angular.io/" class="underline">Angular</a> stack. While starting to learn about Ionic, 
      it has come to my idea to make a relatively simple budget planner/tracking app targeted for highschool
      students that hopefully, they can use to track their allowances and expenses, and might encourage them
      to save some of their money.
      </p>
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


  // Edzer
  {
    title: "Edzer Studio Schedule Management System",
    date_dev: "2019",
    stack: "C#, MySQL",
    description:
    `
      <p>
      This is a group project that I made together with a team, as a requirement for one of my 
      database-related subjects on my 2nd year. Along with a planned database schema, an interview 
      with <a href="https://www.facebook.com/EDZERSTUDIO/" class="underline">Edzer Music Studio</a>, 
      this WPF application (C# and MySQL served on XAMPP) features a scheduling system with fees 
      computation based on hours and intrument rentals, intrument management, and a user panel for 
      the administrator to assign other users with less privileges to the system.
      </p>
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

var skills = [
  {
    language: "javascript",
    name: "Javascript",
    progress: 50,
    projectExample: "budget",
  },
  {
    language: "sql",
    name: "SQL",
    progress: 55,
    projectExample: "schoolcms",
  },
  {
    language: "python",
    name: "Python",
    progress: 40,
    projectExample: "schoolcms",
  },
  {
    language: "csharp",
    name: "C#",
    progress: 40,
    projectExample: "edzer",
  },
  {
    language: "java",
    name: "Java",
    progress: 30,
  },
];



// Works / Projects template items
if ("content" in document.createElement("template")) {
  // works.html template
  if (document.querySelector("#work-template") != null) {
    var worksDiv = document.querySelector("#works");

    var template = document.querySelector("#work-template");

    works.forEach((e) => {
      // Clone template content
      let row = template.content.cloneNode(true);

      // Inject id to w-col
      row.querySelector(".w-col").id = `${e.prefix}`;

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
      title.innerText = `${e.title}`;
      let stack = row.querySelector(".w-stack");
      stack.innerText = `${e.stack} | ${e.date_dev}`;

      // Inject id={prefix}-p, Description
      let divDescContainer = row.querySelector(".w-p");
      let divDescription = divDescContainer.querySelector("div");
      divDescription.innerHTML = e.description;

      let featureHeader = document.createElement('h4')
      featureHeader.classList.add('list-header')
      featureHeader.innerText = 'Features'
      // Inject features list
      if (e.features) {
        let featuresList = document.createElement("ul");
        featuresList.classList.add('features-list')
        
        featuresList.appendChild(featureHeader)

        e.features.forEach((f) => {
          let featureItem = document.createElement("li");
          featureItem.innerText = f;
          featuresList.append(featureItem);
        });

        
        divDescription.appendChild(featuresList);
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
        let linkA = linkItem.querySelector("a")
        linkA.href = l.url;
        linkA.target = '_blank';
        linkItem.querySelector("img").classList.add('link-icon');
        linkItem.querySelector("img").classList.add(l.site);

        if (l.disabled) {
          linkItem.querySelector("a").classList.add("disabled");
        } else {
          if (l.site === 'open') {
            let _openlink = document.createElement('a')
            _openlink.href = l.url

            let _img = document.createElement('img')
            _img.classList.add('link-icon-sm', 'open')
            _openlink.appendChild(_img)
            
            title.appendChild(_openlink)
          }
        }

        divLinks.appendChild(linkItem);
      });

      // Show / Hide Button
      let toggle = row.querySelector(".w-toggle");

      toggle.addEventListener("click", () => {
        console.log(divDescContainer);
        if (divDescContainer.classList.contains("show-p")) {
          divDescContainer.classList.remove("show-p");
          toggle.innerText = "Show More";
        } else {
          divDescContainer.classList.add("show-p");
          toggle.innerText = "Hide";
        }
      });

      worksDiv.appendChild(row);
    });
  }

  // index.html template
  if (document.querySelector("#skill-template") != null) {
    var skillsList = document.querySelector("#ul-skillset");

    var template = document.querySelector("#skill-template");

    // Foreach skill, create li, append to #ul-skillset
    skills.forEach((s) => {
      let item = template.content.cloneNode(true);

      // Inject skill-name and a.href
      let skillNameDiv = item.querySelector(".skill-name");
      let skillLink = skillNameDiv.querySelector("a");
      skillLink.innerText = s.name;
      skillLink.href = s.projectExample
        ? `./works.html#${s.projectExample}` : "#";

      // Inject skill percentage id
      let skillPercentage = skillNameDiv.querySelector("span");
      skillPercentage.id = `${s.language}-value`;

      // Set width according to progress
      let progressbar = item.querySelector(".progress-bar-container");
      progressbar.style.width = `${s.progress}%`;

      skillsList.appendChild(item);
    });

    let indexIntroDuration = 500;
    let animDurationms = indexIntroDuration + 100;

    let delay = indexIntroDuration + 500;

    setTimeout(() => {
      skills.forEach((s) => {
        animateValue(`${s.language}-value`, s.progress, animDurationms);
      });
    }, delay);

    function animateValue(id, end, durationms) {
      var obj = document.getElementById(id);
      var stepms = Math.floor(durationms / end);

      var start = 0;
      let timer = setInterval(() => {
        obj.innerText = `${start}%`;

        if (start + 1 <= end) {
          start += 1;
        } else {
          clearInterval(timer);
        }
      }, stepms);
    }
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

let sliderPrefixes = works.map(function (work) {
  return work.prefix
})

for (let prefix of sliderPrefixes) {
  new Swiper(`.${prefix}-slider`, {
    ...sliderOpts,
    pagination: {
      el: `.${prefix}-pagination`,
      type: "bullets",
    },
  });
}

var selfSwiper = new Swiper(".self-swiper", {
  pagination: {
    el: ".self-swiper-pagination",
    type: "bullets",
  },
  initialSlide: 1,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});
