/** @format */

import Home from "./pages/Home.svelte"
import Documentation from "./pages/Documentation.svelte"

export const routes = {
    "/": Home,
    "/home": Home,
    "/documentation": Documentation,
    "*": Home
}
