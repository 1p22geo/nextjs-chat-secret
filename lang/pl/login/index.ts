import shared from "../shared";
export default {
	title: "Zaloguj się",
	username: shared.usernamePrompt,
	password: shared.passwordPrompt,
	submit: "Zaloguj się",
	warnings: {
		wrong: "Niepoprawne hasło lub nazwa użytkownika",
		nopass: "Wpisz hasło i nazwę użytkownika",
		err: shared.warning_err,
		wait:shared.wait
	},
};
