module.exports = ({ app }) => {
	app.get("/registration", (req, res) => {
		console.log("REGISTRATION REQUEST INCOMING");

		/*res.status(200).json({
			result: "REGISTRATION GET REQUEST"
		});*/

		const reqBody = req.body;
		console.log("REQUEST BODY", reqBody);
		
		return res.sendFile(`${__dirname}/index.html`);
	});
};