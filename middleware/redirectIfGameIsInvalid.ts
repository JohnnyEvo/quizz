import {useRedirectIfGameInvalid} from "@/composables/router/redirectIfGameInvalid";
import {defineNuxtRouteMiddleware} from "nuxt/app";

export default defineNuxtRouteMiddleware(() => {
    useRedirectIfGameInvalid();
});
