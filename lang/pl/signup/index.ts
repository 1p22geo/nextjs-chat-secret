import shared from "../shared";
export default {
	title: "Zarejestruj się",
	username: shared.usernamePrompt,
	password: shared.passwordPrompt,
	email: "Adres e-mail:",
	rpass: "Powtórz hasło:",
	warnings: {
		rpass: "Potwierdź hasło, wpisując je ponownie (takie samo)",
		nopick: "Musisz wybrać nazwę użytkownika i hasło.",
		len: "Hasło powinno mieć co najmniej 8 znaków.",
		err: shared.warning_err,
		conflict: [
            "Istnieje już użytkownik o tej nazwie użytkownika",
            "Wybierz inną albo dodaj jakieś cyfry nie wiem",
        ],
		ready: ["Konto utworzone", "Możesz się teraz zalogować", "tutaj"],
		wait: shared.wait,
	},
	submit: "Zarejestruj się",
};
