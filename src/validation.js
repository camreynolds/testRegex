const inputs = document.querySelectorAll('input');

const patterns = {
	username: /^[a-z\d\.]{8,20}$/,
	firstName: /^[a-z\d]{5,12}$/i,
	email: /^([a-z\d\.]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
	password: /^[\w@-]{8,20}$/,
	telephone : /^[0-9]{10}$/,
};

function validate(field, regex){
	// console.log(regex.test(field.value)); -> Returns "true" or "false".
	if (regex.test(field.value)) {
		field.className = "valid";
	} else {
		field.className = "invalid";
	};
};

inputs.forEach( (input) => {
	input.addEventListener("keyup", e =>{
		// console.log(e.target.attributes.name.value);
		// console.log(e.target);
		validate(e.target, patterns[e.target.attributes.name.value]);
	});
});

