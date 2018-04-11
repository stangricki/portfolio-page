$(document).ready(function() {

	const links = Array.from(document.querySelectorAll('.tabnav'));
	$('.tabcontent-active').fadeIn();
	links.forEach(link => link.addEventListener('click', function () {
		const activeLink = document.querySelector('.tabnav-active')
		activeLink.classList.remove('tabnav-active') // searches for class 'active' in activeLink Array and removes it
		if(!link.classList.contains("tabnav-active")) {
			link.classList.add('tabnav-active');
			$('.tabcontent').fadeOut(0);

		} // adds class 'active' to clicked
		
	    const currentTab = document.querySelector('.tabcontent-active');
	    if (currentTab) currentTab.classList.remove('tabcontent-active');
	    document.getElementById(link.dataset.target).classList.add('tabcontent-active'); 
			$('.tabcontent-active').fadeIn();
	}));



});
    // Init tooltips
    $('[data-toggle="tooltip"]').tooltip();

	// Init map
function initMap() {
  var jozefow = {lat: 52.195518, lng: 20.696024};
  var warsaw = {lat: 52.231634, lng: 21.005885};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: warsaw
  });
  var marker = new google.maps.Marker({
    position: jozefow,
    map: map
  });
}