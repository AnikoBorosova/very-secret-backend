const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
//var cors = require('cors');

const PORT = process.env.PORT || 4001;

//app.use(cors({origin: 'http://localhost:8080'}));

app.use(bodyParser.json({
	limit: "10mb"
}));
app.use(cookieParser("asd"));

app.post("/expenses", (req, res) => {
	const requestIn = req;
	// console.log("REQ", requestIn);

	const reqBody = req.body;
	console.log("REQUEST BODY", reqBody);

	//var origin = req.headers.origin;

	/* res.status(200) 
    .setHeader("Access-Control-Allow-Origin", "http://localhost:8080/") 
    //.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE') 
    //.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type') 
    .setHeader('Access-Control-Allow-Credentials', true) 
    .send(console.log("Communication between client-side and server is working"));  */

	res.json({
		result: "ASD"
	})
});

app.listen(PORT, err => {
	if (err) {
		return console.error("Error while starting server:", err);
	}

	console.log(`Server is listening on PORT ${PORT}`);
});