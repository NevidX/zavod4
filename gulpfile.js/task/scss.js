// PACKAGES
const { src, dest } = require("gulp");
// ==================

// CONFIG
const path = require("../config/path.js")
const app = require("../config/app.js")
// PLUGINS
const plumber = require("gulp-plumber"); // error catcher
const notify = require("gulp-notify"); // notification about error
const autoprefixer = require("gulp-autoprefixer"); // Autoprefix for old versions of browsers
const csso = require("gulp-csso"); // Optimize and minimize css files
const rename = require("gulp-rename"); // Renames mimimizated version of css
const shorthand = require("gulp-shorthand"); // Mimimize css property 
const groupCssMediaQueries = require("gulp-group-css-media-queries");
const sass = require("gulp-sass")(require("sass"));
const sassGlob = require("gulp-sass-glob");
const webpCss = require("gulp-webp-css");
// ==================

// SCSS

const scss = () => {
	return src(path.scss.src, { sourcemaps: app.isDev })
		// ERROR CATCHER
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: "SCSS",
				message: error.message
			}))
		}))
		// PLUGINS
		// =======
		.pipe(sassGlob())
		.pipe(sass())
		.pipe(webpCss())
		.pipe(autoprefixer())
		.pipe(shorthand())
		.pipe(groupCssMediaQueries())
		.pipe(dest(path.scss.dest, { sourcemaps: app.isDev }))
		.pipe(rename({ suffix: ".min" }))
		.pipe(csso())
		.pipe(dest(path.scss.dest, { sourcemaps: app.isDev }))
}
// ==================


module.exports = scss;
