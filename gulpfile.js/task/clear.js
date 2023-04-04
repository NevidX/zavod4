const del = require("del");


// CONFIG
const path = require("../config/path.js")

// CLEAR
const clear = () => {
	return del(path.root)
}

module.exports = clear;