

var slideIndex = 0;

carousel();


function carousel() {
	var i;
	// get the array of sliders
	var slides = document.getElementsByClassName("carousel-item");
	
	// get the array of indicators
	var dots = document.getElementsByClassName("carousel-indicators");

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	// increase by 1 global variable
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	for (i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active"," ");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active ";
	// change the image every 5 seconds
	setTimeout(carousel, 5000);
}




(function ($) {
	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function (event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});

})(jQuery);
	
// fc1ef7f0d8ba45688bfe39be80c4aa58

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches('.dropdown-toggle')) {
		var dropdowns = document.getElementsByClassName("scrollable-menu");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
};
