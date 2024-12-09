jQuery(document).ready(function($) {

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

   if ($('.ds-testimonials-section').length) {
		$('.ds-testimonials-slider').slick({
		  	infinite: true,
		  	arrows: true,
		  	autoplay: true,
		  	autoplaySpeed: 4000,
		  	prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='ri-arrow-left-line'></i></button>",
		  	nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='ri-arrow-right-line'></i></button>"
		});
    }
   

});
