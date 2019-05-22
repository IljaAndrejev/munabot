'use strict';
const 
  request = require('request'),
  express = require('express'),
	body_parser = require('body-parser'),
	config = require('config'),
  bot = require('./lib/bot'),
	payloads = require('./lib/payloads'),
	app = express().use(body_parser.json()),
	
	 PAGE_ACCESS_TOKEN = config.access_token,
	 VERIFY_TOKEN = config.verify_token;


app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));
bot.persistent_menu();
bot.greetingtext();


app.post('/webhook', (req, res) => { 

  let body = req.body;
  
  if (body.object === 'page') {
		
	body.entry.forEach(function(entry) {	
		if (!entry.messaging) return;

	  let webhook_event = entry.messaging[0];
   console.log(webhook_event);	  
   
	  let sender_psid = webhook_event.sender.id;
	  console.log('Sender ID: ' + sender_psid);	  

		if (webhook_event.postback) {        
		handlePostback(sender_psid, webhook_event.postback);
		}	
 
	});

	res.status(200).send('EVENT_RECEIVED');

  } else {
	
	res.sendStatus(404);
  }

});


app.get('/webhook', (req, res) => {
  

  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
	
 
  if (mode && token) {
  
	if (mode === 'subscribe' && token === VERIFY_TOKEN) {
	  
	  
	  console.log('WEBHOOK_VERIFIED');
	  res.status(200).send(challenge);
	  
	
	} else {
	 
	  res.sendStatus(403);      
	}
  }
});
function handlePostback(sender_psid, received_postback) {
  let response;  
  let payload = received_postback.payload;
  switch(payload){
	//Get started
 	case 'GET_STARTED_PAYLOAD' : payloads.GetStarted(sender_psid);
 	break;

	//menu load
	case 'МЕНЮ' : response = bot.Menu('RU');
	callSendAPI(sender_psid, response);
	break;
	case 'MENU' : response = bot.Menu('EN');
	callSendAPI(sender_psid, response);
	break;
	case 'MENÜÜ' : response = bot.Menu('ET');
	callSendAPI(sender_psid, response);
	break;
	// Сafe contacts
	case 'КАФЕ' : response = bot.Cafe(sender_psid,'RU');
	callSendAPI(sender_psid, response);
	break;
	case 'CAFE' :  response = bot.Cafe(sender_psid,'EN');
	callSendAPI(sender_psid, response);
	break;
	case 'KOHVIK' : response = bot.Cafe(sender_psid,'ET');
	callSendAPI(sender_psid, response);
	break;
	//Catering contacts	
	case 'КЕЙТЕРИНГ' :response =  bot.Catering(sender_psid,'RU');
	callSendAPI(sender_psid, response);
	break;
	case 'CATERING' : response =  bot.Catering(sender_psid,'EN');
	callSendAPI(sender_psid, response);
	break;
	case 'KATERING' : response = bot.Catering(sender_psid,'ET');
	callSendAPI(sender_psid, response);
	break;
	// Lunch of day load
	case 'ЛАНЧ' : payloads.Lunch(sender_psid,'RU');
	break;
	case 'LUNCH' :  payloads.Lunch(sender_psid,'EN');
	break;
	case 'PRAAD' : payloads.Lunch(sender_psid,'ET');
	break;
	// starters load
	case 'ЗАКУСКИ' :  payloads.Starters(sender_psid,'RU');
	break;
	case 'STARTERS' : payloads.Starters(sender_psid,'EN');
	break;
	case 'EELROAD' : payloads.Starters(sender_psid,'ET');
	break;
	// Soups load
	case 'СУПЫ' : payloads.Soups(sender_psid,'RU');
	break;

	case 'SOUPS' : payloads.Soups(sender_psid,'EN');
	break;
	case 'SUPID' : payloads.Soups(sender_psid,'ET');
	break;
	//Main courses load
	case 'ОСНОВНЫЕ':  payloads.MainCourses(sender_psid,'RU');
	break;
	case 'MAINCOURSES':  payloads.MainCourses(sender_psid,'EN');
	break;
	case 'PEAROAD':  payloads.MainCourses(sender_psid,'ET');
	break;
	//Desserts load
	case 'ДЕСЕРТЫ':  payloads.Desserts(sender_psid,'RU');
	break;
	case 'DESSERTS':  payloads.Desserts(sender_psid,'EN');
	break;
	case 'DESSERDID':  payloads.Desserts(sender_psid,'ET');
	break;
  }
}

	function callSendAPI(sender_psid, response) {
 
		let request_body = {
		"recipient": {
			"id": sender_psid
		},
		"message": response
		}
		console.log(response);
		
		request({
		"uri": "https://graph.facebook.com/v2.6/me/messages",
		"qs": { "access_token": PAGE_ACCESS_TOKEN },
		"method": "POST",
		"json": request_body
		}, (err, res, body) => {
		if (!err) {
			console.log('message sent!')
		} else {
			console.error("Unable to send message:" + err);
		}
		}); 
	
	}



