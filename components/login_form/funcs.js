export function hideAll() {
	document.querySelector("#wait")?.classList.remove("flex");
	document.querySelector("#wait")?.classList.add("hidden");
	document.querySelector("#wrong")?.classList.remove("flex");
	document.querySelector("#wrong")?.classList.add("hidden");
	document.querySelector("#required")?.classList.remove("flex");
	document.querySelector("#required")?.classList.add("hidden");
	document.querySelector("#error")?.classList.remove("flex");
	document.querySelector("#error")?.classList.add("hidden");
}
export function errOut() {
	document.querySelector("#wait")?.classList.remove("flex");
	document.querySelector("#wait")?.classList.add("hidden");
	document.querySelector("#wrong")?.classList.add("flex");
	document.querySelector("#wrong")?.classList.remove("hidden");
}
export function validateUnamePass(uname, passwd) {
    if(uname == '' || passwd == ''){
        document.querySelector("#required")?.classList.add("flex")
        document.querySelector("#required")?.classList.remove("hidden")
        return true
    }
}