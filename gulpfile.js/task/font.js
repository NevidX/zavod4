// PACKAGES
const { src, dest } = require("gulp");
// ==================

// CONFIG
const path = require("../config/path.js")
const app = require("../config/app.js")
// PLUGINS
const plumber = require("gulp-plumber"); // error catcher
const notify = require("gulp-notify"); // notification about error
const newer = require("gulp-newer"); // watch for already optimized files
const fonter = require("gulp-fonter"); // 
const ttf2woff2 = require("gulp-ttf2woff2"); // 




// ==================

// Font

const font = () => {
	return src(path.font.src)
		// ERROR CATCHER
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: "Font",
				message: error.message
			}))
		}))
		// PLUGINS
		.pipe(newer(path.font.dest))
		.pipe(fonter(app.fonter))
		.pipe(dest(path.font.dest))
		.pipe(ttf2woff2())
		.pipe(dest(path.font.dest))
}
// ==================


module.exports = font;
