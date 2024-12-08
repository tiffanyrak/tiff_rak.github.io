window.onscroll = () => {
    document.querySelector(".mountain").style.marginTop = scrollY + "px";

    document.querySelector(".trees").style.marginTop = scrollY / 1.5 + "px";

    document.querySelector(".stars").style.marginTop = scrollY * 2 + "px";

    document.querySelector(".stars").style.marginRight = scrollY / 2 + "px";

    document.querySelector(".moon").style.transform = "rotate(-" + (scrollY / 5.5) + "deg)";

    document.querySelector(".Home h1").style.marginTop = scrollY + "px";

    document.querySelector(".Home h1").style.opacity = (200 - scrollY) / 200;
};

const aboutTextElement = document.getElementById('about-text');
const aboutText = `Hi! I’m Tiffany, originally from Madagascar, and I’m a prospective Interactive Media and Social Research and Public Policy major at New York University Abu Dhabi. My focus is on using interactive media as a tool to explore identity, culture, and social change. I believe in the power of interactivity to not just inform, but to transform how people see themselves and the world around them. If you share a passion for creative digital storytelling or are curious about how technology can reshape public conversations, let’s connect! I’m excited to collaborate, learn, and push boundaries together.`;

let index = 0;

function typeAboutText() {
    if (index < aboutText.length) {
        aboutTextElement.textContent += aboutText.charAt(index);
        index++;
        setTimeout(typeAboutText, 50); // Adjust speed here (in milliseconds)
    }
}

document.addEventListener('DOMContentLoaded', typeAboutText);
