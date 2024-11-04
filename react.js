
			function showSpinner() {
				document.getElementById('spinner').style.display = 'block';
			}

			function hideSpinner() {
				document.getElementById('spinner').style.display = 'none';
			}

			function navigate(event, url) {
				event.preventDefault();
				showSpinner();
				setTimeout(() => {
					window.location.href = url;
				}, 1000);
			}