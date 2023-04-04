// PACKAGES
const { src, dest } = require("gulp");
// ==================

// CONFIG
const path = require("../config/path.js")
// PLUGINS
const plumber = require("gulp-plumber"); // error catcher
const notify = require("gulp-notify"); // notification about error
const fileinclude = require('gulp-file-include'); // inculde files from different HTML
const concat = require("gulp-concat"); // Connets all CSS files into one
const cssimport = require("gulp-cssimport"); // Import files from/into CSS
const autoprefixer = require("gulp-autoprefixer"); // Autoprefix for old versions of browsers
const csso = require("gulp-csso"); // Optimize and minimize css files
const rename = require("gulp-rename"); // Renames mimimizated version of css
const shorthand = require("gulp-shorthand"); // Mimimize css property 
const groupCssMediaQueries = require("gulp-group-css-media-queries");
const webpCss = require("gulp-webp-css");
// ==================

// CSS

const css = () => {
	return src(path.css.src, { sourcemaps: true })
		// ERROR CATCHER
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: "CSS",
				message: error.message
			}))
		}))
		// PLUGINS
		.pipe(fileinclude())
		// =======
		.pipe(concat("main.css"))
		.pipe(cssimport())
		.pipe(webpCss())
		.pipe(autoprefixer())
		.pipe(shorthand())
		.pipe(groupCssMediaQueries())
		.pipe(dest(path.css.dest, { sourcemaps: true }))
		.pipe(rename({ suffix: ".min" }))
		.pipe(csso())
		.pipe(dest(path.css.dest, { sourcemaps: true }))
}
// ==================


module.exports = css;
