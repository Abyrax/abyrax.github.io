//navbar
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
//mobile
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})
//animation ******** not working
const words = ["CSS3.", "HTML5.", "javascript."];
let i = 0;
let time;

function typword() {
	let word = words[i].split("");
	var looptyp = function() {
		if (word.length > 0) {
			document.getElementById('hero_desc').innerHTML += word.shift();
		} else {
			dltword();
			return false;
		};
		time = setTimeout(looptyp, 500);
	};
	looptyp();
};

function dltword() {
	let word = words[i].split("");
	var loopdlt = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('hero_desc').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		time = setTimeout(loopdlt, 200);
	};
	loopdlt();
};

typword();