"use strict";

import db from './firebase'
require('firebase/firestore');

const _skills = db.collection('skills').get()

function _buildSkillItem(skillData, itemTemplate) {
  // Inject skill-name and a.href
  let skillNameDiv = itemTemplate.querySelector(".skill-name");
  let skillLink = skillNameDiv.querySelector("a");
  skillLink.innerText = skillData.name;
  if (skillData.projectExample) {
    skillLink.href = `./works.html#${skillData.projectExample}`
    skillLink.classList.add('underline')
  }

  // Inject skill percentage id
  let skillPercentage = skillNameDiv.querySelector("span");
  skillPercentage.id = `${skillData.language}-value`;

  // Set width according to progress
  let progressbar = itemTemplate.querySelector(".progress-bar-container");
  progressbar.style.width = `${skillData.progress}%`;

  return itemTemplate;
}

function _animatePercentage(skillData) {
  const indexIntroDuration = 500;
  const animDurationms = indexIntroDuration + 100;

  const delay = indexIntroDuration + 500;

  setTimeout(() => {
    animateValue(`${skillData.language}-value`, skillData.progress, animDurationms);
  }, delay);

  function animateValue(id, end, durationms) {
    var obj = document.getElementById(id);
    var stepms = Math.floor(durationms / end);

    var start = 0;
    
    let timer = setInterval(() => {
      try {
        obj.innerText = `${start}%`;

        if (start + 1 <= end) {
          start += 1;
        } else {
          console.log('Animation finished');
          clearInterval(timer);
        }
      } catch {
        console.error('Error while animating progress');
        clearInterval(timer);
      }
      
    }, stepms);
  }
}

// index.html template
if ("content" in document.createElement("template")) {
  if (document.querySelector("#skill-template") != null) {
    const skillsList = document.querySelector("#ul-skillset");

    const template = document.querySelector("#skill-template");

    const skillsRef = db.collection('skills');
    skillsRef.get()
      .then((skills) => {
        skills.forEach((skill) => {
          const item = template.content.cloneNode(true);
          const skillData = skill.data();
          skillsList.appendChild(_buildSkillItem(skillData, item));
          _animatePercentage(skillData);
        })
      })
      .catch((error) => {
        console.error('Failed to fetch skills: ' + error);
      })

  }
} else {
  // TODO: Unsupported template tag
}

