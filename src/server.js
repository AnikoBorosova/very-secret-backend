
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const cors = require('cors');
const express = require("express");
let app = express();



const corsObj = cors({
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
});

app.options('*', corsObj);
app.use(corsObj);


const PORT = process.env.PORT || 4001;

//app.use(cors({origin: 'http://localhost:8080'}));

/*app.all('/*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});*/

app.use(bodyParser.json({
	limit: "10mb" 
}));



//require("./routes/registration")({ app });
//app.use("/expenses", cors({origin: 'http://localhost:8080'}));

app.post("/registration", (req, res) => {
	const userData = req.body;
	console.log("USERDATA", userData);

	res.status(200).json({
		result: "USERDATA ARRIVED SUCCESSFULLY", userData
	});

});

app.post("/registration/checkDuplicateUsername", (req, res) => {
	const username = req.body;

	res.status(200).send({
		userExists: false
	});
});

app.post("/registration/checkDuplicateEmail", (req, res) => {
	const email = req.body;

	res.status(200).send({
		emailExists: false
	})
});


app.post("/expenses", (req, res) => {
	const reqBody = req.body;
	console.log("REQUEST BODY", reqBody);

	//var origin = req.headers.origin;

	res.status(200).json({
		result: "Communication between client-side and server is working"
	});
});

app.listen(PORT, err => {
	if (err) {
		return console.error("Error while starting server:", err);
	}

	console.log(`Server is listening on PORT ${PORT}`);
});