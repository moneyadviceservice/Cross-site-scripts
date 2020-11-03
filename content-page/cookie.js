window.addEventListener('DOMContentLoaded', () => {
	setCookie(); 
}); 

const setCookie = () => {
	console.log('setCookie!'); 

	document.cookie = `user=david; SameSite=None; secure`;

	queryAccess(); 
}

const queryAccess = () => {
	console.log('queryAccess!'); 

	if (document.hasStorageAccess === undefined) {
		return; 
	} else {
		document.hasStorageAccess().then(
			function(hasAccess) {
				console.log('hasAccess: ', hasAccess); 

				if (hasAccess) {
					return; 
				} else {
					// request access
					console.log('You need to request access!'); 

					// showPrompt(); 
					
					window.confirm('Do you wanna continue?', () => {
					// 	promptAccepted(); 
					// }

					// function promptAccepted() {
						document.requestStorageAccess().then(
							() => {
								console.log('user says yes!'); 								
							}
						).catch(e => {
								console.log('user says no!');
						})
				// 	}
					})
				}
			// function(reason) {
			// 	console.log('reason: ', reason); 
			}
		// );
		)
	}
}

const showPrompt = () => {
	if (window.confirm('Do you wanna continue?')) {
		promptAccepted(); 
	}
}
