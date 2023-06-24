import shared from "../shared"
export default {
    title:"Sign in to SkyChat",
    username:shared.usernamePrompt,
    password:shared.passwordPrompt,
    email:"E-mail address:",
    rpass:"Repeat password:",
    warnings:{
        rpass:"The repeated password must be the same as the original password",
        nopick:"You need to pick a username and a password",
        len:"A good password is at least 8 characters long.",
        err:shared.warning_err,
        conflict:["A user with this username already exists", "Pick a different one or add a digit at the end or smth idk."],
        ready:[
            "Account created",
            "You can now log in",
            "here"
        ],
        wait:shared.wait

    },
    submit:"Sign in"
}