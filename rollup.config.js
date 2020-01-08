/** @format */

import svelte from "rollup-plugin-svelte"
import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"
import serve from "rollup-plugin-serve"
import html from "rollup-plugin-bundle-html"
import css from "rollup-plugin-css-porter"
import typescript from "rollup-plugin-typescript2"
import typescriptCompiler from "typescript"
import { terser } from "rollup-plugin-terser"
import livereload from "rollup-plugin-livereload"
import sveltePreprocessor from "svelte-preprocess"
import sass from "rollup-plugin-sass"
import url from "rollup-plugin-url"
import image from "rollup-plugin-image"
import copy from "rollup-plugin-copy"

import * as path from "path"

const plugins = [
    svelte({
        dev: process.env.NODE_ENV === "development",
        extensions: [".svelte"],
        preprocess: sveltePreprocessor()
    }),
    html({
        template: "src/index.html",
        dest: "dist",
        filename: "index.html"
    }),
    css({ output: "dist/index.css" }),
    sass({ output: "dist/bundle_theme.css" }),
    typescript({ typescript: typescriptCompiler, objectHashIgnoreUnknownHack: true }),
    commonjs({ include: "node_modules/**" }),
    resolve(),
    url(),
    copy({
        targets: [
            { src: ["src/assets/fonts"], dest: "dist" },
            { src: ["src/assets/images"], dest: "dist" }
        ]
    }),
    image()
]
if (process.env.NODE_ENV === "development") {
    plugins.push(
        serve({
            contentBase: "./dist",
            open: false
        }),
        livereload({ watch: "./dist" })
    )
} else {
    plugins.push(terser({ sourcemap: true }))
}

module.exports = {
    input: "src/index.ts",
    output: {
        file: "dist/index.js",
        sourcemap: true,
        format: "iife"
    },
    plugins
}
