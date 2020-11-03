window.addEventListener('DOMContentLoaded', () => {
	setCookie(); 
}); 

const setCookie = () => {
	console.log('setCookie!'); 

	document.cookie = `user=david; SameSite=None; secure`;

	console.log('cookie: ', document.cookie); 
}
