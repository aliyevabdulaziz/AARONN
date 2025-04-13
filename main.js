const hamburger = document.querySelector('.hamburger-btn');
		const navMenu = document.getElementById('nav-menu');


		hamburger.addEventListener('click', function () {
			navMenu.classList.toggle('active');
		});
