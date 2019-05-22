'use strict';
const request = require('request');
const config = require('config');
const fetch = require('node-fetch');

module.exports = {
  GetStarted(sender_psid){
    const url = `https://graph.facebook.com/v2.6/${sender_psid}?fields=first_name,last_name,locale`;
    request({
      url: url,
      qs: { access_token: config.access_token },
      json: true
  }, function (error, response, body) {
  
      if (!error && response.statusCode === 200) {    
        console.log(body.locale);
        var res;
        if(body.locale == 'ru_RU'){
          res = {'text':'Приветствую тебя '+body.first_name+' '+body.last_name+'\nДля общения воспользуйся меню, которое внизу экрана!\nПриятного аппетита!'};
        }else if(body.locale == 'et_EE'){
          res = {'text':'Tere tulemast '+body.first_name+' '+body.last_name+'\nSuhtlemisel kasutage menüüd ekraani allosas!\nHead isu!'};
        }else {
          res = {'text':'Welcome '+body.first_name+' '+body.last_name+'\nTo communicate please use menu at  bottom of the screen!\nBon appetit!'};
        } 

 
      }else{
        console.log(error);
      }
      callSendAPI(sender_psid, res);
  });
  
  },
  Starters(sender_psid,lang){
    const url = config.db_url+'starter.json';
    if (lang =='RU'){
   return fetch(url).then(res => res.json()).then(json  => {
        var elements = [];
        var sub = {};
        var resp = Object.values(json);
        for(var i=0; i<resp.length;i++){
          if (resp[i].starter.recomendation_ru != null){
            sub = resp[i].starter.ingredients_ru+'\nКоментарии: '+resp[i].starter.recomendation_ru+'\nСтоимость: '+resp[i].starter.price+'€';
        }else{
            sub = resp[i].starter.ingredients_ru+'\nСтоимость: '+resp[i].starter.price+'€';
        }
          var dish = {         
              "title": resp[i].starter.title_ru,
              "subtitle":sub,
              "buttons": [
                {
                  "type": "postback",
                  "title": "К меню!",
                  "payload":"МЕНЮ"
                }
              ]
          }
  
          elements.push(dish);
        }
         var data = {
          "attachment": {
            "type": "template",
            "payload": {
              "template_type": "generic",
              "elements": elements 
            }
          }
        }
        callSendAPI(sender_psid, data);
      });
    }else if (lang =='ET'){
      return fetch(url).then(res => res.json()).then(json  => {
           var elements = [];
           var sub = {};
           var resp = Object.values(json);
           for(var i=0; i<resp.length;i++){
             if (resp[i].starter.recomendation_et != null){
               sub = resp[i].starter.ingredients_et+'\nKommentaar: '+resp[i].starter.recomendation_et+'\nHind: '+resp[i].starter.price+'€';
           }else{
               sub = resp[i].starter.ingredients_et+'\nHind: '+resp[i].starter.price+'€';
           }
             var dish = {         
                 "title": resp[i].starter.title_et,
                 "subtitle":sub,
                 "buttons": [
                   {
                     "type": "postback",
                     "title": "Tagasi",
                     "payload":"MENÜÜ"
                   }
                 ]
             }
     
             elements.push(dish);
           }
            var data = {
             "attachment": {
               "type": "template",
               "payload": {
                 "template_type": "generic",
                 "elements": elements 
               }
             }
           }
           callSendAPI(sender_psid, data);
         });
       }else {
        return fetch(url).then(res => res.json()).then(json  => {
             var elements = [];
             var sub = {};
             var resp = Object.values(json);
             for(var i=0; i<resp.length;i++){
               if (resp[i].starter.recomendation_en != null){
                 sub = resp[i].starter.ingredients_en+'\nComment: '+resp[i].starter.recomendation_et+'\nPrice: '+resp[i].starter.price+'€';
             }else{
                 sub = resp[i].starter.ingredients_en+'\nPrice: '+resp[i].starter.price+'€';
             }
               var dish = {         
                   "title": resp[i].starter.title_en,
                   "subtitle":sub,
                   "buttons": [
                     {
                       "type": "postback",
                       "title": "Back",
                       "payload":"MENU"
                     }
                   ]
               }
       
               elements.push(dish);
             }
              var data = {
               "attachment": {
                 "type": "template",
                 "payload": {
                   "template_type": "generic",
                   "elements": elements 
                 }
               }
             }
             callSendAPI(sender_psid, data);
           });
         }
  },
  Soups(sender_psid,lang){
    const url = config.db_url+'soup.json';
    if (lang =='RU'){
   return fetch(url).then(res => res.json()).then(json  => {
        var elements = [];
        var sub = {};
        var resp = Object.values(json);
        for(var i=0; i<resp.length;i++){
          if (resp[i].soup.recomendation_ru != null){
            sub = resp[i].soup.ingredients_ru+'\nКоментарии: '+resp[i].soup.recomendation_ru+'\nСтоимость: '+resp[i].soup.price+'€';
        }else{
            sub = resp[i].soup.ingredients_ru+'\nСтоимость: '+resp[i].soup.price+'€';
        }
          var dish = {         
              "title": resp[i].soup.title_ru,
              "subtitle":sub,
              "buttons": [
                {
                  "type": "postback",
                  "title": "К меню!",
                  "payload":"МЕНЮ"
                }
              ]
          }
  
          elements.push(dish);
        }
         var data = {
          "attachment": {
            "type": "template",
            "payload": {
              "template_type": "generic",
              "elements": elements 
            }
          }
        }
        callSendAPI(sender_psid, data);
      });
    }else if (lang =='ET'){
      return fetch(url).then(res => res.json()).then(json  => {
           var elements = [];
           var sub = {};
           var resp = Object.values(json);
           for(var i=0; i<resp.length;i++){
             if (resp[i].soup.recomendation_et != null){
               sub = resp[i].soup.ingredients_et+'\nKommentaar: '+resp[i].soup.recomendation_et+'\nHind: '+resp[i].soup.price+'€';
           }else{
               sub = resp[i].soup.ingredients_et+'\nHind: '+resp[i].soup.price+'€';
           }
             var dish = {         
                 "title": resp[i].soup.title_et,
                 "subtitle":sub,
                 "buttons": [
                   {
                     "type": "postback",
                     "title": "Tagasi",
                     "payload":"MENÜÜ"
                   }
                 ]
             }
     
             elements.push(dish);
           }
            var data = {
             "attachment": {
               "type": "template",
               "payload": {
                 "template_type": "generic",
                 "elements": elements 
               }
             }
           }
           callSendAPI(sender_psid, data);
         });
       }else {
        return fetch(url).then(res => res.json()).then(json  => {
             var elements = [];
             var sub = {};
             var resp = Object.values(json);
             for(var i=0; i<resp.length;i++){
               if (resp[i].soup.recomendation_en != null){
                 sub = resp[i].soup.ingredients_en+'\nComment: '+resp[i].soup.recomendation_et+'\nPrice: '+resp[i].soup.price+'€';
             }else{
                 sub = resp[i].soup.ingredients_en+'\nPrice: '+resp[i].soup.price+'€';
             }
               var dish = {         
                   "title": resp[i].soup.title_en,
                   "subtitle":sub,
                   "buttons": [
                     {
                       "type": "postback",
                       "title": "Back",
                       "payload":"MENU"
                     }
                   ]
               }
       
               elements.push(dish);
             }
              var data = {
               "attachment": {
                 "type": "template",
                 "payload": {
                   "template_type": "generic",
                   "elements": elements 
                 }
               }
             }
             callSendAPI(sender_psid, data);
           });
         }
  },
  MainCourses(sender_psid,lang){
    const url = config.db_url+'maincourse.json';
    if (lang =='RU'){
   return fetch(url).then(res => res.json()).then(json  => {
        var elements = [];
        var sub = {};
        var resp = Object.values(json);
        for(var i=0; i<resp.length;i++){
          if (resp[i].maincourse.recomendation_ru != null){
            sub = resp[i].maincourse.ingredients_ru+'\nКоментарии: '+resp[i].maincourse.recomendation_ru+'\nСтоимость: '+resp[i].maincourse.price+'€';
        }else{
            sub = resp[i].maincourse.ingredients_ru+'\nСтоимость: '+resp[i].maincourse.price+'€';
        }
          var dish = {         
              "title": resp[i].maincourse.title_ru,
              "subtitle":sub,
              "buttons": [
                {
                  "type": "postback",
                  "title": "К меню!",
                  "payload":"МЕНЮ"
                }
              ]
          }
  
          elements.push(dish);
        }
         var data = {
          "attachment": {
            "type": "template",
            "payload": {
              "template_type": "generic",
              "elements": elements 
            }
          }
        }
        callSendAPI(sender_psid, data);
      });
    }else if (lang =='ET'){
      return fetch(url).then(res => res.json()).then(json  => {
           var elements = [];
           var sub = {};
           var resp = Object.values(json);
           for(var i=0; i<resp.length;i++){
             if (resp[i].maincourse.recomendation_et != null){
               sub = resp[i].maincourse.ingredients_et+'\nKommentaar: '+resp[i].maincourse.recomendation_et+'\nHind: '+resp[i].maincourse.price+'€';
           }else{
               sub = resp[i].maincourse.ingredients_et+'\nHind: '+resp[i].maincourse.price+'€';
           }
             var dish = {         
                 "title": resp[i].maincourse.title_et,
                 "subtitle":sub,
                 "buttons": [
                   {
                     "type": "postback",
                     "title": "Tagasi",
                     "payload":"MENÜÜ"
                   }
                 ]
             }
     
             elements.push(dish);
           }
            var data = {
             "attachment": {
               "type": "template",
               "payload": {
                 "template_type": "generic",
                 "elements": elements 
               }
             }
           }
           callSendAPI(sender_psid, data);
         });
       }else {
        return fetch(url).then(res => res.json()).then(json  => {
             var elements = [];
             var sub = {};
             var resp = Object.values(json);
             for(var i=0; i<resp.length;i++){
               if (resp[i].maincourse.recomendation_en != null){
                 sub = resp[i].maincourse.ingredients_en+'\nComment: '+resp[i].maincourse.recomendation_et+'\nPrice: '+resp[i].maincourse.price+'€';
             }else{
                 sub = resp[i].maincourse.ingredients_en+'\nPrice: '+resp[i].maincourse.price+'€';
             }
               var dish = {         
                   "title": resp[i].maincourse.title_en,
                   "subtitle":sub,
                   "buttons": [
                     {
                       "type": "postback",
                       "title": "Back",
                       "payload":"MENU"
                     }
                   ]
               }
       
               elements.push(dish);
             }
              var data = {
               "attachment": {
                 "type": "template",
                 "payload": {
                   "template_type": "generic",
                   "elements": elements 
                 }
               }
             }
             callSendAPI(sender_psid, data);
           });
         }
  },
  Desserts(sender_psid,lang){
    const url = config.db_url+'dessert.json';
    if (lang =='RU'){
   return fetch(url).then(res => res.json()).then(json  => {
        var elements = [];
        var sub = {};
        var resp = Object.values(json);
        for(var i=0; i<resp.length;i++){
          if (resp[i].dessert.recomendation_ru != null){
            sub = resp[i].dessert.ingredients_ru+'\nКоментарии: '+resp[i].dessert.recomendation_ru+'\nСтоимость: '+resp[i].dessert.price+'€';
        }else{
            sub = resp[i].dessert.ingredients_ru+'\nСтоимость: '+resp[i].dessert.price+'€';
        }
          var dish = {         
              "title": resp[i].dessert.title_ru,
              "subtitle":sub,
              "buttons": [
                {
                  "type": "postback",
                  "title": "К меню!",
                  "payload":"МЕНЮ"
                }
              ]
          }
  
          elements.push(dish);
        }
         var data = {
          "attachment": {
            "type": "template",
            "payload": {
              "template_type": "generic",
              "elements": elements 
            }
          }
        }
        callSendAPI(sender_psid, data);
      });
    }else if (lang =='ET'){
      return fetch(url).then(res => res.json()).then(json  => {
           var elements = [];
           var sub = {};
           var resp = Object.values(json);
           for(var i=0; i<resp.length;i++){
             if (resp[i].dessert.recomendation_et != null){
               sub = resp[i].dessert.ingredients_et+'\nKommentaar: '+resp[i].dessert.recomendation_et+'\nHind: '+resp[i].dessert.price+'€';
           }else{
               sub = resp[i].dessert.ingredients_et+'\nHind: '+resp[i].dessert.price+'€';
           }
             var dish = {         
                 "title": resp[i].dessert.title_et,
                 "subtitle":sub,
                 "buttons": [
                   {
                     "type": "postback",
                     "title": "Tagasi",
                     "payload":"MENÜÜ"
                   }
                 ]
             }
     
             elements.push(dish);
           }
            var data = {
             "attachment": {
               "type": "template",
               "payload": {
                 "template_type": "generic",
                 "elements": elements 
               }
             }
           }
           callSendAPI(sender_psid, data);
         });
       }else {
        return fetch(url).then(res => res.json()).then(json  => {
             var elements = [];
             var sub = {};
             var resp = Object.values(json);
             for(var i=0; i<resp.length;i++){
               if (resp[i].dessert.recomendation_en != null){
                 sub = resp[i].dessert.ingredients_en+'\nComment: '+resp[i].dessert.recomendation_et+'\nPrice: '+resp[i].dessert.price+'€';
             }else{
                 sub = resp[i].soup.ingredients_en+'\nPrice: '+resp[i].dessert.price+'€';
             }
               var dish = {         
                   "title": resp[i].dessert.title_en,
                   "subtitle":sub,
                   "buttons": [
                     {
                       "type": "postback",
                       "title": "Back",
                       "payload":"MENU"
                     }
                   ]
               }
       
               elements.push(dish);
             }
              var data = {
               "attachment": {
                 "type": "template",
                 "payload": {
                   "template_type": "generic",
                   "elements": elements 
                 }
               }
             }
             callSendAPI(sender_psid, data);
           });
         }
  },
  Lunch(sender_psid,lang){
    const url = config.db_url+'lunch.json';
    if (lang === 'RU'){
      return fetch(url).then(res => res.json()).then(json  => {
        var resp = Object.values(json);
         var data = {
          "text": resp.lunch.lunch_ru+"\n PS: Ланч подаётся с 11:00 до 15:00 по рабочим дням!"
        }
         callSendAPI(sender_psid,data);
      });
     } else if(lang ==='ET'){
      return fetch(url).then(res => res.json()).then(json  => {
        var resp = Object.values(json);
         var data = {
          "text": resp.lunch.lunch_et+"\n PS: Päevapraad serveeritakse tööpäevadel kella 11.00-15.00!"
        }
        callSendAPI(sender_psid, data);
      });
     }else{
      return fetch(url).then(res => res.json()).then(json  => {
        var resp = Object.values(json);
        for(var i=0; i<resp.length;i++){
         var data = {
          "text": resp[i].lunch.lunch_en+"\n PS: Lunch of the day is served from 11.00 to 15.00 on weekdays only!"
        }
      }
        callSendAPI(sender_psid, data);
      });        

          } 
  }

  
}// end modules

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
  "qs": { "access_token": config.access_token },
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
