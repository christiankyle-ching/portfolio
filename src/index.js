"use strict";

// Import variables
import Global from './globals';

function _buildSkillItem(skill, itemTemplate) {
  // Inject skill-name and a.href
  let skillNameDiv = itemTemplate.querySelector(".skill-name");
  let skillLink = skillNameDiv.querySelector("a");
  skillLink.innerText = skill.name;
  if (skill.projectExample) {
    skillLink.href = `./works.html#${skill.projectExample}`
    skillLink.classList.add('underline')
  }

  // Inject skill percentage id
  let skillPercentage = skillNameDiv.querySelector("span");
  skillPercentage.id = `${skill.language}-value`;

  // Set width according to progress
  let progressbar = itemTemplate.querySelector(".progress-bar-container");
  progressbar.style.width = `${skill.progress}%`;

  return itemTemplate;
}

function _animatePercentages() {
  
  const indexIntroDuration = 500;
  const animDurationms = indexIntroDuration + 100;

  const delay = indexIntroDuration + 500;

  setTimeout(() => {
    Global.skills.forEach((s) => {
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

// index.html template
if ("content" in document.createElement("template")) {
  if (document.querySelector("#skill-template") != null) {
    const skillsList = document.querySelector("#ul-skillset");

    const template = document.querySelector("#skill-template");
    
    Global.skills.forEach((skill) => {
      const item = template.content.cloneNode(true);

      skillsList.appendChild(_buildSkillItem(skill, item));
    });

    _animatePercentages();

  }
} else {
  // TODO: Unsupported template tag
}

