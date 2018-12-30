const express = require("express");
const app = express();
//var cors = require('cors');

const PORT = process.env.PORT || 4001;

//app.use(cors({origin: 'http://localhost:8080'}));

app.post("/expenses", (req, res) => {
	console.log("SSSSSSSSSSSSSSSSSSSSSS")

	const requestIn = req;
	console.log("REQ", requestIn);

	const reqBody = req.body;
	console.log("REQUEST BODY", reqBody);

	//var origin = req.headers.origin;

	res.status(200)
		.setHeader("Access-Control-Allow-Origin", "http://localhost:8080/")
		//.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
		//.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
		.setHeader('Access-Control-Allow-Credentials', true)
		.send(console.log("Communication between client-side and server is working"));
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});