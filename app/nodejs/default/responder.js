
exports.connect = function(req, res, next) {
	res.writeHead(404, "Not Found");
	return res.end("Page not found (no route matched)!");
}
