import Swiper from 'swiper';
require('swiper/css/swiper.min.css');

require ('./style/main.css');

// Import images

// Budget Planner images
import budget_logo from './images/budget-planner/logo.png';
import budget_dark from './images/budget-planner/dark.png';
import budget_summary from './images/budget-planner/summary.png';
import budget_toplist from './images/budget-planner/toplist.png';
import budget_savings from './images/budget-planner/savings.png';
import budget_help from './images/budget-planner/help.png';
import budget_backup from './images/budget-planner/backup.png';

// Edzer images
import edzer_logo from './images/edzer/logo.png';
import edzer_add from './images/edzer/add.png';
import edzer_dashboard from './images/edzer/dashboard.png';
import edzer_instruments from './images/edzer/instruments.png';
import edzer_login from './images/edzer/login.png';
import edzer_schedules from './images/edzer/schedules.png';

var works = [
    {
        title: "Budget Planner",
        stack: 'Ionic, Angular',
        description: 'loremloremlorem',
        features: [
            'Feature 1',
            'Feature 2',
            'Feature 3',
        ],
        prefix: "budget",
        images: [
            {
                url: budget_logo, 
                label: 'Swipe to right for more images!'
            },
            {
                url: budget_dark,
                label: 'Supports dark mode'
            },
            {
                url: budget_summary,
                label: 'Generate montly overview'
            },
            {
                url: budget_toplist,
                label: 'View your expenses'
            },
            {
                url: budget_savings,
                label: 'Track your savings'
            },
            {
                url: budget_help,
                label: "Never feel clueless! I'm here."
            },
            {
                url: budget_backup,
                label: 'Even supports local backup!'
            },
        ],
        links: [
            {
                site: 'github',
                url: '#'
            },
            {
                site: 'open',
                url: '#'
            }
        ]

    },
    {
        title: "School Online Content System",
        stack: 'Django, Python',
        description: 'loremloremlorem',
        prefix: "schoolcms",
        images: [
            {
                url: edzer_dashboard,
                label: 'TEMP'
            }
        ],
        links: [
            {
                site: 'github',
                url: '#'
            }
        ]

    },
    {
        title: "Edzer Studio Schedule Management System",
        stack: 'C#, MySQL',
        description: 'loremloremlorem',
        prefix: "edzer",
        images: [
            {
                url: edzer_logo,
                label: 'A Recording Studio Scheduling System'
            },
            {
                url: edzer_login,
                label: 'Login'
            },
            {
                url: edzer_dashboard,
                label: 'Dashboard Overview'
            },
            {
                url: edzer_add,
                label: 'Add Schedules'
            },
            {
                url: edzer_schedules,
                label: "Be reminded of who's next"
            },
            {
                url: edzer_instruments,
                label: 'Manage Instruments'
            },
            
        ],
        links: [
            {
                site: 'github',
                url: '#'
            }
        ]

    },
]

// Check if template is supported
var worksDiv = document.querySelector('.works');

if ('content' in document.createElement('template')) {

    var template = document.querySelector('#work-template');

    works.forEach(e => {
        
        // Clone template content
        let row = template.content.cloneNode(true);

        // Get swiper-container
        let swiperContainer = row.querySelector('.swiper-container');
        // Inject {prefix}-slider class for identifying slider (Swiper.js requirement)
        swiperContainer.classList.add(`${e.prefix}-slider`);

        // Get swiperWrapper
        let swiperWrapper = swiperContainer.querySelector('.swiper-wrapper');

        // Create slide template
        let tmpSlide = document.createElement('div'); tmpSlide.classList.add('swiper-slide');
        let imgObj = document.createElement('img');
        let imgLabel = document.createElement('div'); imgLabel.classList.add('img-label')
        tmpSlide.appendChild(imgObj); tmpSlide.appendChild(imgLabel);

        // For each image, clone slide template and assign values
        e.images.forEach(img => {
            // Clone swiper slide template
            let slide = tmpSlide.cloneNode(true);

            // Get img tag and assign src
            let divImg = slide.querySelector('img');
            divImg.src = img.url;

            // Get img-label and assign label
            let divLabel = slide.querySelector('.img-label');
            divLabel.innerText = img.label;

            // Append to swiper wrapper
            swiperWrapper.appendChild(slide);
        });

        // Inject pagination class
        let pagination = swiperContainer.querySelector('.swiper-pagination');
        pagination.classList.add(`${e.prefix}-pagination`);
        
        // Inject Title, Stack
        let title = row.querySelector('.w-title');
        title.innerText = e.title;
        let stack = row.querySelector('.w-stack');
        stack.innerText = e.stack;

        // Inject id={prefix}-p, Description
        let divDesc = row.querySelector('.w-p');
        let divDescP = divDesc.querySelector('p');
        divDescP.innerText = e.description;

        // Inject features list
        if (e.features) {
            let featuresList = document.createElement('ul');

            e.features.forEach(f => {
                let featureItem = document.createElement('li')
                featureItem.innerText = f;
                featuresList.append(featureItem)
            })

            divDescP.appendChild(featuresList);
        }

        // Get ul links
        let divLinks = row.querySelector('.w-links');

        // Create li link template
        let tmpLinkItem = document.createElement('li');
        tmpLinkItem.appendChild(document.createElement('a')).appendChild(document.createElement('img'));
        
        // For each link, clone link item template then append to divLinks
        e.links.forEach(l => {
            // Clone template first
            let linkItem = tmpLinkItem.cloneNode(true);

            // Inject Links with url and class (for image) 
            linkItem.querySelector('a').href = l.url;
            linkItem.querySelector('img').classList.add(l.site);

            divLinks.appendChild(linkItem);
        })

        // Show / Hide Button
        // let description = row.querySelector(`#${e.prefix}-p`);
        let toggle = row.querySelector('.w-toggle');

        toggle.addEventListener('click', () => {
            if (divDesc.classList.contains('show-p')) {
                divDesc.classList.remove('show-p');
                toggle.innerText = 'Show More'
            } else {
                divDesc.classList.add('show-p');
                toggle.innerText = 'Hide'
            }
        })

        console.log(row);

        worksDiv.appendChild(row);
    });


} else {
    // Callback function
    
}

// Swiper JS init Swipers
var sliderOpts = {
    direction: 'horizontal',
    slidesPerView: 1,
    freeMode: true,
    freeModeMomentum: true,
    freeModeMomentumRatio: 0.3,
}

var budgetSwiper = new Swiper('.budget-slider', {
    ...sliderOpts,
    pagination: {
        el: '.budget-pagination',
        type: 'bullets'
    },
});
var schoolcmsSwiper = new Swiper('.schoolcms-slider', {
    ...sliderOpts,
    pagination: {
        el: '.schoolcms-pagination',
        type: 'bullets'
    },

});
var edzerSwiper = new Swiper('.edzer-slider', {
    ...sliderOpts,
    pagination: {
        el: '.edzer-pagination',
        type: 'bullets'
    },

});