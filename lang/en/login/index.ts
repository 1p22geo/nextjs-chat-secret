import shared from "../shared";
export default {
	title: "Log in to SkyChat",
	username: shared.usernamePrompt,
	password: shared.passwordPrompt,
	submit: "Log in",
	warnings: {
		wrong: "Wrong username or password",
		nopass: "Type in your username and password",
		err: shared.warning_err,
		wait:shared.wait
	},
};
