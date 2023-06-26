import shared from "../../shared";

export default {
	title: "Zarejestrowani użytkownicy",
	loading: "Ładowanie danych o użytkownikach.",
	error: [
		"Wystąpił problem w czasie ładowania danych.",
		"Spróbuj odświeżyć stronę.",
	],
	table: {
		headings: ["Typ", "Nazwa użytkownika", "Pseudonim", "Dołączył", "Akcje"],
		actions: ["Usuń"],
	},
	deleting: "Usuwanie użytkownika...",
	wait: shared.wait,
	modals: {
		add: {
			title: "Dodaj nowego użytkownika",
			button: "Dodaj użytkownika",
			prompts: {
				username: shared.usernamePrompt,
				password: shared.passwordPrompt,
				email: "Adres e-mail:",
				rpass: "Powtórz hasło:",
				type: {
					title: "Uprawnienia użytkownika",
					options: [
						"Zwykły użytkownik",
						"Moderator społeczności",
						"Administrator",
					],
				},
			},
			warnings: {
				rpass: "Potwierdź hasło, wpisując je ponownie (takie samo)",
				nopick: "Musisz wybrać nazwę użytkownika i hasło.",
				len: "Hasło powinno mieć co najmniej 8 znaków.",
				err: shared.warning_err,
				conflict: [
					"Istnieje już użytkownik o tej nazwie użytkownika",
					"Wybierz inną albo dodaj jakieś cyfry nie wiem",
				],
				ready: "Dodano użytkownika.",
				wait: "Dodawanie użytkownika, proszę czekać...",
			},
			submit: "Dodaj użytkownika",
		},
	},
};
