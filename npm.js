const { exec, execSync } = require("child_process");

function version() {
	return execSync("npm --version").toString()
}

function search(arg) {
	return execSync("npm search " + arg).toString()
}

// TODO: add functionality for a async version func
// or use process.versions if possible
function betterVersion() {
	exec("npm --version", (err, out, stderr) => {
		if (err || stderr) throw err

	})
}

module.exports = {
	version, betterVersion, search
}
