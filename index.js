var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

let education = document.getElementById("Education");
let skills = document.getElementById("Skills");
let experience = document.getElementById("Experience");

const opentab = (tabname) => {
    switch (tabname) {
        case "Skills":
            education.classList.remove("active-tab");
            experience.classList.remove("active-tab");
            skills.classList.add("active-tab");
            break;

        case "Experience":
            education.classList.remove("active-tab");
            skills.classList.remove("active-tab");
            experience.classList.add("active-tab");
            break;

        default:
            skills.classList.remove("active-tab");
            experience.classList.remove("active-tab");
            education.classList.add("active-tab");
            break;
    }
};