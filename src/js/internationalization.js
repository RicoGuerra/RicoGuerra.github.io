// <button onclick="changeLanguage('de')">Change to German</button>

// Create a function to change
// the hash value of the page
function changeLanguage(lang) {
	location.hash = lang;
	location.reload();
}

// Define the language reload anchors
var language = {
	eng: {
		cv: "CV"
	},
	de: {
		cv: "Lebenslauf"
	}
};

// Check if a hash value exists in the URL
if (window.location.hash) {
	// Set the content of the webpage
	// depending on the hash value
	if (window.location.hash == "#en") {
		siteContent.textContent =
			language.en.cv;
	}
	else if (window.location.hash == "#de") {
		education_listing.textContent = language.de.cv;
	}
}