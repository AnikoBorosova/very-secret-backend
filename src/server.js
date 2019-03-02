
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const cors = require('cors');
const express = require("express");
let app = express();

app.use(cors());
app.options('*', cors());

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


//app.use("/expenses", cors({origin: 'http://localhost:8080'}));

app.post("/expenses", (req, res) => {
	const requestIn = req;
	console.log("REQ", requestIn);

	const reqBody = req.body;
	console.log("REQUEST BODY", reqBody);

	//var origin = req.headers.origin;

	res.status(200).json({
		result: "Communication between client-side and server is working"
	})
});

app.listen(PORT, err => {
	if (err) {
		return console.error("Error while starting server:", err);
	}

	console.log(`Server is listening on PORT ${PORT}`);
});