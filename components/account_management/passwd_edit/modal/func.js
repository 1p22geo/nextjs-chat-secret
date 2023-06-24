export default function submitHandler(lang) {
	document.querySelector("#warning_repeat")?.classList.remove("flex");
	document.querySelector("#warning_repeat")?.classList.add("hidden");
	document.querySelector("#warning_len")?.classList.remove("flex");
	document.querySelector("#warning_len")?.classList.add("hidden");
	document.querySelector("#nopass")?.classList.remove("flex");
	document.querySelector("#nopass")?.classList.add("hidden");
	const elem1 = document.querySelector("#newPassword");
	const elem2 = document.querySelector("#repeatPass");
	if (
		elem1 &&
		elem2 &&
		elem1.value &&
		elem2.value &&
		elem1.value == elem2.value &&
		elem1.value.length >= 8 &&
		elem2.value.length >= 8
	)
		window.location.replace("/" + lang + "/in/manage");
	else {
		if (!(elem1.value && elem2.value)) {
			document.querySelector("#nopass")?.classList.add("flex");
			document.querySelector("#nopass")?.classList.remove("hidden");
			return;
		}
		if (!(elem1.value == elem2.value)) {
			document.querySelector("#warning_repeat")?.classList.add("flex");
			document.querySelector("#warning_repeat")?.classList.remove("hidden");
			return;
		}
		if (!(elem1.value.length >= 8 && elem2.value.length >= 8)) {
			document.querySelector("#warning_len")?.classList.add("flex");
			document.querySelector("#warning_len")?.classList.remove("hidden");
			return;
		}
	}
}
