import shared from "../../shared";

export default {
	title: "Registered users",
	loading: "Loading data about users",
	error: [
		"An error has occured while loading data",
		"Maybe try refreshing the page?",
	],
	table: {
		headings: ["Type", "Username", "Nickname", "Added", "Actions"],
		actions: ["Delete"],
	},
	deleting: "Deleting user...",
	wait: shared.wait,
	modals: {
		add: {
			title: "Add a new user",
			button: "Add user",
			prompts: {
				username: shared.usernamePrompt,
				password: shared.passwordPrompt,
				email: "E-mail address",
				rpass: "Repeat password",
				type: {
					title: "User priviledges",
					options: ["Regular user", "Community moderator", "Administrator"],
				},
			},
			warnings: {
				rpass:
					"The repeated password needs to be the same as the original one.",
				nopick: "You need to pick a username and a password.",
				len: "A good password is at least 8 characters long.",
				err: ["An error has happened", "This might actually be our fault."],
				conflict: [
					"A user with this username already exists",
					"Pick a different one or just add some digits at the end idk",
				],
				ready: "User added succesfully.",
				wait: "Adding user, please wait...",
			},
			submit: "Add user",
		},
	},
};
