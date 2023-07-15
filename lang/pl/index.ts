import index from "./main_page";
import login from "./login";
import signup from "./signup";
import navbar from "./navbar";
import dropdown_menu from "./components/dropdown_menu";
import message_bar from "./components/message_bar";
import manage from "./manage";
import settings from "./settings";
import admin from "./admin";
import misc from "./misc";
import messages from "./messages";
export default {
	index: index,
	login: login,
	signup: signup,
	navbar: navbar,
	dropdown_menu: dropdown_menu,
	message_bar: message_bar,
	messages:messages,
	manage: manage,
	settings: settings,
	admin:admin,
	...misc
};
