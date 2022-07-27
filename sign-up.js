const passwd_again = document.querySelector('input[id=password-again]');

function onChange() {
	const passwd = document.querySelector("#password");
	if (passwd.value == passwd_again.value) {
		passwd_again.setCustomValidity('');
		passwd_again.style.border = "3px solid #596D48";
	} else if (passwd.value != passwd_again.value) {
		passwd_again.setCustomValidity('Passwords do not match');
		passwd_again.style.border = "3px solid #c41212";
	};
};

