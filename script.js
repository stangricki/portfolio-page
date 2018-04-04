
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

const links = Array.from(document.querySelectorAll('.tabnav'));

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
