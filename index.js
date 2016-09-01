var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 9000;

app.set('port', (process.env.PORT || PORT));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res){
	res.send('Welcome to OkoaMama');
	

});

app.post('/ussd', function(req, res){
	console.log(JSON.stringify(req.body));
	console.log("Karibu Afya mama")
	switch (req.body["text"]){

		case "":
			message = "CON KARIBU AFYA MAMA\n";
			message += "Tafadhali andika majina yako" 
			res.send(message);
			break;
		case "":
			message = "END Shukrani. Karibu Tena";
			res.send(message);
			break;

		case "":
			message = "CON Kata Ndogo";
			res.send(message);
			break;
		case "":
			message = "CON Tafadhali chagua Umri wako\n";
			message += "1. Chini ya miaka 18\n"
			message += "2. Miaka 19 hadi 35\n"
			message += "3. Miaka 36 na zaidi"
			res.send(message);
			break;

		case "1":
			message = "CON Andika Kaunti yako";
			res.send(message);
			break;

		case "2":
			message = "CON Andika Kontie yako";
			res.send(message);
			break;
		case "3":
			message = "CON Kontie";
			res.send(message);
			break;

		
			
	}
});


app.listen(app.get('port'), function(){
	console.log('Server running on PORT, %s', app.get('port'));
});