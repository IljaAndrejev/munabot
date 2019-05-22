# munabot
The bot for cafe Muna


The bot folder contains files for running the bot on Node.JS

For a successful launch, you need to fill in the fields in the /config/default.json file

Facebook page access token and verify token
How to get them you can see here: https://developers.facebook.com/docs/messenger-platform/getting-started/app-setup

db_url is the path to the JSON data files that should be hosted with the bot administration console, 
the path should look like http://example.com/botdb/

The admin folder contains the bot administration console files.
The console can work on any hosting with supporting PHP 5.5 and higher
Database not required. Just upload the files to the your hosting.

To set up your password, use https://bcrypt-generator.com to encrypt it.
The result of encryption put to the variable $passwd which is  in the config.php file.
For example, the password is TestTest1 is preinstalled.
