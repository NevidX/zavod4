// PACKAGES
const { src, dest } = require("gulp");
// ==================

// CONFIG
const path = require("../config/path.js")
const app = require("../config/app.js")
// PLUGINS
const plumber = require("gulp-plumber"); // error catcher
const notify = require("gulp-notify"); // notification about error
const babel = require("gulp-babel"); // features of JS
const webpack = require("webpack-stream"); // 

// ==================

// JavaScript

const js = () => {
	return src(path.js.src, { sourcemaps: app.isDev })
		// ERROR CATCHER
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: "JavaScript",
				message: error.message
			}))
		}))
		// PLUGINS
		.pipe(babel())
		.pipe(webpack(app.webpack))
		.pipe(dest(path.js.dest, { sourcemaps: app.isDev }))
}
// ==================


module.exports = js;
