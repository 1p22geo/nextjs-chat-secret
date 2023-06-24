import { redirect } from "next/navigation";
import en from "./en";
export const dict = {
	en: en,
};
export const defaultLang = "en";
export function translate(lang: string) {
	switch (lang) {
		case "en":
			return dict.en;
		default:
			redirect("/en")
	}
}
