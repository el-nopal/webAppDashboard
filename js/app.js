// --- VARIABLES ---
const alertBanner = document.getElementById('alert');
const hide = document.getElementById('close');

const search = document.getElementById('searchUser');
const message = document.getElementById('messageUser');
const sendButton = document.getElementById('send');

// hide alert
hide.addEventListener ('click', () => {
  alertBanner.style.display = 'none';
});

// message users
sendButton.addEventListener('click', () => {
		if(search.value === "" || message.value === "") {
		  alert("Error: Fill both fields to send message");
		} else {
			alert("Message sent");
		}
});
