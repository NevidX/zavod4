// PACKAGES
const { src, dest } = require("gulp");
// ==================

// CONFIG
const path = require("../config/path.js")
const app = require("../config/app.js")
// PLUGINS
const plumber = require("gulp-plumber"); // error catcher
const notify = require("gulp-notify"); // notification about error
const imagemin = require("gulp-imagemin"); // optimize img
const newer = require("gulp-newer"); // watch for already optimized files
const webp = require("gulp-webp"); // webP
const gulpif = require("gulp-if"); // webP



// ==================

// Optimaze img

const img = () => {
	return src(path.img.src)
		// ERROR CATCHER
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: "Image",
				message: error.message
			}))
		}))
		// PLUGINS
		.pipe(newer(path.img.dest))
		.pipe(webp())
		.pipe(dest(path.img.dest))
		.pipe(src(path.img.src))
		.pipe(newer(path.img.dest))
		.pipe(gulpif(app.isProd, imagemin(app.imagemin)))
		.pipe(dest(path.img.dest))
}
// ==================


module.exports = img;
