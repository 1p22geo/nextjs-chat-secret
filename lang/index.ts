import { redirect } from "next/navigation";
import en from "./en";
import pl from "./pl";
export const dict = {
	en: en,
	pl: pl,
};
export const defaultLang = "en";
export function translate(lang: string) {
	switch (lang) {
		case "en":
			return dict.en;
		case "pl":
			return dict.pl;
		default:
			redirect("/en");
	}
}
