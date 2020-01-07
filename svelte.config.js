/** @format */

const sveltePreprocess = require("svelte-preprocess")

module.exports = {
    preprocess: sveltePreprocess({
        extensions: [".svelte"],
        transpileOnly: true
    })
}
