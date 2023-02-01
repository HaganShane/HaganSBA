/**
* Loop / eventlistener / collection requirement
* Will use the table rows, will highlight the ones that are hovered over
* Once they are done being moused over, they wll return to their original white color
 */
window.onload = function() {
	var rows = document.querySelectorAll("tr");
	for (var i = 0; i < rows.length; i++) {
		rows[i].addEventListener("mouseover", function() {
			this.style.backgroundColor = "yellow";
		});
		rows[i].addEventListener("mouseout", function() {
			this.style.backgroundColor = "white";
		});
	}
}

/**
* Uses regex to check the email address input in the newsletter form
* Validates the email is actually a valid email
* Used in our validation function below
 */
function validateEmailForNewsLetter() {
	var emailID = document.newsletterForm.emailAddress.value;
	atpos = emailID.indexOf("@");
	dotpos = emailID.lastIndexOf(".");
	let check1 = true;
	let check2 = true;
	let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (atpos < 1 || (dotpos - atpos < 2)) {
		check1 = false;
	}
	else {
		check1 = true;
	}

	if (emailRegex.test(emailID)) {
		check2 = true;
	}
	else {
		check2 = false;
	}

	if (check1 && check2) {
		return true;
	}
	else {
		return false;
	}

}

/**
* Uses regex to check the email address input in the contact form
* Validates the email is actually a valid email
* Used in our validation function below
 */
function validateEmailForContact() {
	var emailID = document.contactForm.contactEmailAddress.value;
	atpos = emailID.indexOf("@");
	let check1 = true;
	let check2 = true;
	let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (atpos < 1 || (dotpos - atpos < 2)) {
		check1 = false;
	}
	else {
		check1 = true;
	}

	if (emailRegex.test(emailID)) {
		check2 = true;
	}
	else {
		check2 = false;
	}

	if (check1 && check2) {
		return true;
	}
	else {
		return false;
	}
}

/**
* Will check the entire newsletter form on the home page to make sure values are not null
 */
function validateFormOne() {
	/**
	* Checks the first name for null value
	* If it is null, will alert the user using the alert, puts a red border around the input box until it is fixed
	* Once it is fixed, resets the box border back to white
	 */
	if (document.newsletterForm.firstName.value == "") {
		alert("Please enter a first name!");
		document.newsletterForm.firstName.focus();
		document.getElementById("firstName").style.borderColor = "red";
	}
	else {
		document.getElementById("firstName").style.borderColor = "white";
	}

	/**
	* Checks the last name for null value
	* If it is null, will alert the user using the alert, puts a red border around the input box until it is fixed
	* Once it is fixed, resets the box border back to white
	 */
	if (document.newsletterForm.lastName.value == "") {
		alert("Please enter a last name!");
		document.newsletterForm.lastName.focus();
		document.getElementById("lastName").style.borderColor = "red";
	}
	else {
		document.getElementById("lastName").style.borderColor = "white";
	}

	/**
	* Checks the address for null value
	* If it is null, will alert the user using the alert, puts a red border around the input box until it is fixed
	* Once it is fixed, resets the box border back to white
	 */
	if (document.newsletterForm.address.value == "") {
		alert("Please enter an address!");
		document.newsletterForm.address.focus();
		document.getElementById("address").style.borderColor = "red";
	}
	else {
		document.getElementById("address").style.borderColor = "white";
	}

	/**
	* Checks the email for null value
	* If it is null, will alert the user using the alert, puts a red border around the input box until it is fixed
	* Once it is fixed, resets the box border back to white
	* Also utilizes the validate email function to ensure it is a proper email with the @ symbol
	 */
	if (document.newsletterForm.emailAddress.value != "") {
		if (validateEmailForNewsLetter() != true) {
			alert("Please enter an valid email!");
			document.newsletterForm.emailAddress.focus();
			document.getElementById("emailAddress").style.borderColor = "red";
		}
		else {
			document.getElementById("emailAddress").style.borderColor = "white";
		}
	}
	else {
		alert("Please enter an email!");
	}

	/**
	* Checks the city for null value
	* If it is null, will alert the user using the alert, puts a red border around the input box until it is fixed
	* Once it is fixed, resets the box border back to white
	 */
	if (document.newsletterForm.city.value == "") {
		alert("Please enter a city!");
		document.newsletterForm.city.focus();
		document.getElementById("city").style.borderColor = "red";
	}
	else {
		document.getElementById("city").style.borderColor = "white";
	}

	/**
	* Checks the state for null value
	* If it is null, will alert the user using the alert, puts a red border around the input box until it is fixed
	* Once it is fixed, resets the box border back to white
	 */
	if (document.newsletterForm.state.value == "") {
		alert("Please enter a state!");
		document.newsletterForm.state.focus();
		document.getElementById("state").style.borderColor = "red";
	}
	else {
		document.getElementById("state").style.borderColor = "white";
	}

	/**
	* Checks the zip code for null value, if it is not a number, and if it is not 5 digits
	* If it is any of the above, will alert the user using the alert, puts a red border around the input box until it is fixed
	* Once it is fixed, resets the box border back to white
	 */
	if (document.newsletterForm.zipCode.value == "" || isNaN(document.newsletterForm.zipCode.value) || document.newsletterForm.zipCode.value.length != 5) {
		alert("Please enter zip code in the format: #####");
		document.newsletterForm.zipCode.focus();
		document.getElementById("zipCode").style.borderColor = "red";
	}
	else {
		document.getElementById("zipCode").style.borderColor = "white";
	}


}

/**
* Will check the entire contact form on the contact page to make sure values are not null
 */
function validateFormTwo() {
	/**
	* Checks the first name for null value
	* If it is null, will alert the user using the alert, puts a red border around the input box until it is fixed
	* Once it is fixed, resets the box border back to white
	 */
	if (document.contactForm.contactFirstName.value == "") {
		alert("Please enter a first name!");
		document.contactForm.contactFirstName.focus();
		document.getElementById("contactFirstName").style.borderColor = "red";
	}
	else {
		document.getElementById("contactFirstName").style.borderColor = "white";
	}

	/**
	* Checks the last name for null value
	* If it is null, will alert the user using the alert, puts a red border around the input box until it is fixed
	* Once it is fixed, resets the box border back to white
	 */
	if (document.contactForm.contactLastName.value == "") {
		alert("Please enter a last name!");
		document.contactForm.contactLastName.focus();
		document.getElementById("contactLastName").style.borderColor = "red";
	}
	else {
		document.getElementById("contactLastName").style.borderColor = "white";
	}

	/**
	* Checks the address for null value
	* If it is null, will alert the user using the alert, puts a red border around the input box until it is fixed
	* Once it is fixed, resets the box border back to white
	 */
	if (document.contactForm.phoneNumber.value == "") {
		alert("Please enter a phone number!");
		document.contactForm.phoneNumber.focus();
		document.getElementById("phoneNumber").style.borderColor = "red";
	}
	else {
		document.getElementById("phoneNumber").style.borderColor = "white";
	}

	/**
	* Checks the email for null value
	* If it is null, will alert the user using the alert, puts a red border around the input box until it is fixed
	* Once it is fixed, resets the box border back to white
	* Also utilizes the validate email function to ensure it is a proper email with the @ symbol
	 */
	if (document.contactForm.contactEmailAddress.value != "") {
		if (validateEmailForContact() != true) {
			alert("Please enter an valid email!");
			document.contactForm.contactEmailAddress.focus();
			document.getElementById("contactEmailAddress").style.borderColor = "red";
		}
		else {
			document.getElementById("contactEmailAddress").style.borderColor = "white";
		}
	}
	else {
		alert("Please enter an email!");
	}
}




