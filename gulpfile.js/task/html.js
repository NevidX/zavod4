// PACKAGES
const { src, dest } = require("gulp");
// ==================

// CONFIG
const path = require("../config/path.js")
// PLUGINS
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileinclude = require('gulp-file-include');
const webphtml = require('gulp-webp-html');
// ==================

// HTML

const html = () => {
	return src(path.html.src)
		// ERROR CATCHER
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: "HTML",
				message: error.message
			}))
		}))
		// PLUGINS
		.pipe(fileinclude())
		.pipe(webphtml())
		// =======
		.pipe(dest(path.html.dest))
}
// ==================


module.exports = html;
