const express = require("express");
const app = express();

const PORT = process.env.PORT || 4001;

app.get("/expenses", (req, res, next) => {
	const reqBody = req.body;
	console.log("REQUEST BODY", reqBody);
	res.status(200).send(console.log("Communication between client-side and server is working"));
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});