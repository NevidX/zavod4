// PACKAGES
const { watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();
// ==================

// CONFIG
const path = require("./config/path.js")
const app = require("./config/app.js")
// TASKS
const clear = require("./task/clear.js")
const html = require("./task/html.js")
// const css = require("./task/css.js")
const scss = require("./task/scss.js")
const js = require("./task/js.js")
const img = require("./task/img.js")
const font = require("./task/font.js")

// ==================


// SERVER BROWSER-SYNC
const server = () => {
	browserSync.init({
		server: {
			baseDir: "./docs"
		}
	});
}


// ==================


// GULP WATCH
const watcher = () => {
	watch(path.html.watch, html).on("all", browserSync.reload);
	// watch(path.css.watch, css).on("all", browserSync.reload);
	watch(path.scss.watch, scss).on("all", browserSync.reload);
	watch(path.js.watch, js).on("all", browserSync.reload);
	watch(path.img.watch, img).on("all", browserSync.reload);
	watch(path.font.watch, font).on("all", browserSync.reload);
}

// ==================

// BUILD
const build = series(
	clear,
	parallel(html, scss, js, img, font),
);
// ==================

// DEV
const dev = series(
	build,
	parallel(watcher, server)
)
// ===============================

// TASKS
exports.html = html; // Modules of HTMl
exports.watch = watcher; // Watcher for changes in HTML files
exports.clear = clear; // Clears public derictory, and keep in in actual state
// exports.css = css;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.font = font;
// ==================



// =================
exports.default = app.isProd
	? build
	: dev;
// =================

