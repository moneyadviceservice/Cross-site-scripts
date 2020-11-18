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
		console.log('hasStorageAccess IS NOT known to this browser!'); 
		console.log('Carrying on the load of the test page without interruption!'); 

		return; 
	} else {
		console.log('hasStorageAccess IS known to this browser!'); 
		console.log('Interrupting the load of the test page to find out if we have access or not!'); 

		const btn = document.querySelector('button'); 

		btn.addEventListener('click', () => {
			showConfirmation();
		}); 

		// document.hasStorageAccess().then(
		// 	hasAccess => {
		// 		if (!hasAccess) {
		// 			console.log('We DO NOT have access!'); 
		// 			console.log('Requesting access!'); 

		// 			return document.requestStorageAccess(); 
		// 		}
		// 	}).then(_ => {				
		// 		console.log('Now we DO have access!'); 
		// 	}).catch(e => {
		// 		console.log('Some kinda shit went on getting access!'); 
		// 		console.log(e); 
		// 	}
		// );  

			// function(hasAccess) {
			// 	console.log('hasAccess: ', hasAccess); 

			// 	if (hasAccess) {
			// 		console.log('We DO have access!'); 

			// 		return; 
			// 	} else {
			// 		console.log('We DO NOT have access!'); 
			// 		console.log('Requesting access!'); 

			// 	}
			// }
		// )
	}
}

const showConfirmation = () => {
	console.log('showConfirmation!'); 

	// if (window.confirm('Do you wanna continue?')) {
		document.hasStorageAccess().then(
			hasAccess => {
				if (!hasAccess) {
					console.log('We DO NOT have access!'); 
					console.log('Requesting access!'); 

					return document.requestStorageAccess(); 
				}
			}).then(_ => {				
				console.log('Now we DO have access!'); 
			}).catch(e => {
				console.log('Some kinda shit went on getting access!'); 
				console.log(e); 
			}
		);  
	// }

	// console.log('btn: ', btn); 

	// document.requestStorageAccess().then(
	// 	() => {
	// 		console.log('Access granted'); 
	// 		// return true; 
	// 	}, 
	// 	() => {
	// 		console.log('Access denied'); 
	// 	}
	// ).catch(e => {
	// 	() => {
	// 		console.log('Some shit went on!'); 
	// 		// return false; 
	// 	}
	// })
}

	// if (window.confirm('Do you wanna continue?')) {
	// 	console.log('User says Yes!'); 
	// 	console.log('We HAVE requested access!'); 

	// 	document.requestStorageAccess().then(
	// 		console.log('result ...')
	// 	).catch(e => {
	// 		console.log('Problem ...'); 
	// 		console.log(e); 
	// 	})
	// } else {
	// 	console.log('User says No!'); 
	// 	console.log('We HAVE NOT requested access!'); 
	// }

