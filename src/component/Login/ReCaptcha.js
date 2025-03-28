import ReCAPTCHA from "./ReCaptchaWrapper";
import makeAsyncScriptLoader from "react-async-script";

const callbackName = "onloadcallback";
const globalName = "grecaptcha";

export const ReCaptcha = makeAsyncScriptLoader(`https://recaptcha.net/recaptcha/api.js?onload=${callbackName}&render=explicit`, {
        callbackName,
        globalName,
    })(ReCAPTCHA);

export const Turnstile = makeAsyncScriptLoader(`https://challenges.cloudflare.com/turnstile/v0/api.js?onload=${callbackName}&render=explicit&compat=recaptcha`, {
    callbackName,
    globalName,
})(ReCAPTCHA);
