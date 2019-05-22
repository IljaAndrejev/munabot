'use strict';
const request = require('request');
const config = require('config');
module.exports ={
persistent_menu() {
   let data = {
      "get_started":{
          "payload":"GET_STARTED_PAYLOAD"
      },
        "persistent_menu":[
          {
            "locale":"default",
            "composer_input_disabled":true,
            "call_to_actions":[
              {
                "title":"Lunch of the day",
                "type":"postback",
                "payload":"LUNCH"
              },
              {
                "title":"A la carte menu",
                "type":"postback",
                "payload":"MENU"
              },
              {
                "title":"Contacts",
                "type":"nested",
                "call_to_actions":[
                  {
                    "title":"Catering",
                    "type":"postback",
                    "payload":"CATERING"
                  },
                  {
                    "title":"Cafe",
                    "type":"postback",
                    "payload":"CAFE"
                  },
                  {
                    "type":"web_url",
                    "title":"Home page",
                    "url":"https://www.kohvikmuna.ee/",
                    "webview_height_ratio":"full"
                  }
                ]
              }

            ]
          },
          {
            "locale":"ru_RU",
            "composer_input_disabled":true,
            "call_to_actions":[
              {
                "title":"Предложение дня",
                "type":"postback",
                "payload":"ЛАНЧ"
              },
              {
                "title":"A la carte меню",
                "type":"postback",
                "payload":"МЕНЮ"
              },
              {
                "title":"Контакты",
                "type":"nested",
                "call_to_actions":[ 
                  {
                    "title":"Кейтеринг",
                    "type":"postback",
                    "payload":"КЕЙТЕРИНГ"
                  },
                  {
                    "title":"Кафе",
                    "type":"postback",
                    "payload":"КАФЕ"
                  },
                  {
                    "type":"web_url",
                    "title":"Страничка",
                    "url":"https://www.kohvikmuna.ee/",
                    "webview_height_ratio":"full"
                  }
                ]
              }
            ]
          },
          {
            "locale":"et_EE",
            "composer_input_disabled":true,
            "call_to_actions":[    
              {
                "title":"Päevapraad",
                "type":"postback",
                "payload":"PRAAD"
              },
              {
                "title":"A la carte menüü",
                "type":"postback",
                "payload":"MENÜÜ"
              },
              {
                "title":"Kontaktid",
                "type":"nested",
                "call_to_actions":[
                  {
                    "title":"Catering",
                    "type":"postback",
                    "payload":"KATERING"
                  },
                  {
                    "title":"Kohvik",
                    "type":"postback",
                    "payload":"KOHVIK"
                  },
                  {
                    "type":"web_url",
                    "title":"Kodu leht",
                    "url":"https://www.kohvikmuna.ee/",
                    "webview_height_ratio":"full"
                  }
                ]
              }
            ]
          },
          ]
          }
          request({
            url: 'https://graph.facebook.com/v2.6/2405098586212585/messenger_profile',
            qs: { access_token: config.access_token },
            method: 'POST',
            json: data
        },
        function (error, response, body) {
          if (!error && response.statusCode == 200) {
              // Print out the response body
              console.log(body);
      
          } else { 
              // TODO: Handle errors
              console.log(body);
          }
        })
console.log('persistent menu is set up');
},
greetingtext(){
    let data ={
        "greeting":[
            {
            "locale":"default",
            "text":"Hello, {{user_full_name}} in the Muna cafe you are always welcome!"
            }, {
            "locale":"ru_RU",
            "text":"Привет, {{user_full_name}} в кафе Муна вам всегда рады!"
            }, {
            "locale":"et_EE",
            "text":"Tere, {{user_full_name}} Muna kohvikus olete alati teretulnud!"
            }
        ] 
    }
    request({
        url: 'https://graph.facebook.com/v2.6/me/messenger_profile',
        qs: { access_token: config.access_token },
        method: 'POST',
        json: data
    })
    console.log('greeting is set up');
},     
Menu(lang) {
  var data;
 if(lang === 'RU'){
     data = {
         "attachment": {
           "type": "template",
           "payload": {
             "template_type": 'list',
             "top_element_style": "compact",
             "elements": [
             {
               "title": "ЗАКУСКИ",
               "subtitle": "Закуски, салаты ...",
               "image_url":"https://www.kohvikmuna.ee/wp-content/uploads/2018/03/Y52A9491.jpg",
               "buttons": [
                 {
                     "title": "Подробнее",
                     "type": "postback",
                     "payload": "ЗАКУСКИ",        
                 }
               ]
               },
               {
                 "title": "СУПЫ",
                 "image_url":"https://www.kohvikmuna.ee/wp-content/uploads/2018/11/supp-suitsune-tomatisupp.jpg",
                 "subtitle": "Супы, крем супы ...",            
                 "buttons": [
                   {
                     "title": "Подробнее",
                     "type": "postback",
                     "payload": "СУПЫ",      
                   }
                 ]
                 },
                 {
                   "title": "ОСНОВНЫЕ БЛЮДА",
                   "image_url":"https://www.kohvikmuna.ee/wp-content/uploads/2018/11/pearoog-k%C3%B6%C3%B6giviljawok.jpg",
                   "subtitle": "Мясо, рыба, паста ...",            
                   "buttons": [
                     {
                         "title": "Подробнее",
                         "type": "postback",
                         "payload": "ОСНОВНЫЕ",        
                     }
                   ]
                   },
                   {
                     "title": "ДЕСЕРТЫ",
                     "image_url":"https://www.kohvikmuna.ee/wp-content/uploads/2018/11/dessert-sorbeevalik.jpg",
                     "subtitle": "Торты, мороженое ...",            
                     "buttons": [
                       {
                         "title": "Подробнее",
                         "type": "postback",
                         "payload": "ДЕСЕРТЫ",        
                       }
                     ]
                     },
             ]
           }
         }
       }
 }else if(lang === 'ET'){
      data = {
         "attachment": {
           "type": "template",
           "payload": {
             "template_type": 'list',
             "top_element_style": "compact",
             "elements": [
             {
               "title": "EELROAD",
               "subtitle": "Salatid, snakid ...",
               "image_url":"https://www.kohvikmuna.ee/wp-content/uploads/2018/03/Y52A9491.jpg",
               "buttons": [
                 {
                     "title": "Vaata",
                     "type": "postback",
                     "payload": "EELROAD",        
                 }
               ]
               },
               {
                 "title": "SUPID",
                 "image_url":"https://www.kohvikmuna.ee/wp-content/uploads/2018/11/supp-suitsune-tomatisupp.jpg",
                 "subtitle": "Supid, püreesupid ...",            
                 "buttons": [
                   {
                     "title": "Vaata",
                     "type": "postback",
                     "payload": "SUPID",      
                   }
                 ]
                 },
                 {
                   "title": "PEAROAD",
                   "image_url":"https://www.kohvikmuna.ee/wp-content/uploads/2018/11/pearoog-k%C3%B6%C3%B6giviljawok.jpg",
                   "subtitle": "Liha, kala, pasta ...",            
                   "buttons": [
                     {
                         "title": "Vaata",
                         "type": "postback",
                         "payload": "PEAROAD",        
                     }
                   ]
                   },
                   {
                     "title": "DESSERDID",
                     "image_url":"https://www.kohvikmuna.ee/wp-content/uploads/2018/11/dessert-sorbeevalik.jpg",
                     "subtitle": "Kookid, jäätis ...",            
                     "buttons": [
                       {
                         "title": "Vaata",
                         "type": "postback",
                         "payload": "DESSERDID",        
                       }
                     ]
                     },
             ]
           }
         }
       }
 }else{
  data = {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": 'list',
          "top_element_style": "compact",
          "elements": [
          {
            "title": "STARTERS",
            "subtitle": "Snaks, salad ...",
            "image_url":"https://www.kohvikmuna.ee/wp-content/uploads/2018/03/Y52A9491.jpg",
            "buttons": [
              {
                  "title": "View",
                  "type": "postback",
                  "payload": "STARTERS",        
              }
            ]
            },
            {
              "title": "SOUPS",
              "image_url":"https://www.kohvikmuna.ee/wp-content/uploads/2018/11/supp-suitsune-tomatisupp.jpg",
              "subtitle": "Soups, creamsoups ...",            
              "buttons": [
                {
                  "title": "View",
                  "type": "postback",
                  "payload": "SOUPS",      
                }
              ]
              },
              {
                "title": "MAIN COURSE",
                "image_url":"https://www.kohvikmuna.ee/wp-content/uploads/2018/11/pearoog-k%C3%B6%C3%B6giviljawok.jpg",
                "subtitle": "Meat, fish, pasta ...",            
                "buttons": [
                  {
                      "title": "View",
                      "type": "postback",
                      "payload": "MAINCOURSES",        
                  }
                ]
                },
                {
                  "title": "DESSERTS",
                  "image_url":"https://www.kohvikmuna.ee/wp-content/uploads/2018/11/dessert-sorbeevalik.jpg",
                  "subtitle": "Cakes, icecreams ...",            
                  "buttons": [
                    {
                      "title": "View",
                      "type": "postback",
                      "payload": "DESSERTS",        
                    }
                  ]
                  },
          ]
        }
      }
    }
 }


 return(data);
},
Cafe(lang){
  var data;
  if (lang === 'RU'){
      data = {
        "text":"Кафе MUNA\nRaekoja plats 2, Narva\nТел: +372 354 9665\nЭ-почта: kohvikmuna@kohvikmuna.ee"
      }
  }else if(lang === 'ET'){
    data = {
      "text":"Kohvik MUNA\nRaekoja plats 2, Narva\nTel: +372 354 9665\nE-post: kohvikmuna@kohvikmuna.ee"
    }
  }else{
    data = {
      "text":"Cafe MUNA\nRaekoja plats 2, Narva\nTel: +372 354 9665\nE-mail: kohvikmuna@kohvikmuna.ee"
    }
  }
  return(data);
},
Catering(lang){
  var data;
  if (lang === 'RU'){
      data = {
        "text":"Кафе MUNA кейтеринг\nRaekoja plats 2, Narva\nТел: +372 511 0653\nЭ-почта: info@kohvikmuna.ee"
      }
  }else if(lang === 'ET'){
    data = {
      "text":"Kohvik MUNA catering\nRaekoja plats 2, Narva\nTel: +372 511 0653\nE-post: info@kohvikmuna.ee"
    }
  }else{
    data = {
      "text":"Cafe MUNA сatering\nRaekoja plats 2, Narva\nTel: +372 511 0653\nE-mail: info@kohvikmuna.ee"
    }
  }
  return(data);
}
};