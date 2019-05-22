<?php
 session_start();
 if(!isset($_SESSION['login'])) {header("Location: config.php");}
?>
<!DOCTYPE html>
<html lang="EN">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="1800;url=config.php?logout" />
  <title>MUNA BOT ADMIN CONSOLE</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="http://fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/skeleton.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="twelve columns">
        <div class="eleven columns"><h3>MUNA BOT ADMIN CONSOLE</h3></div><div class="one columns exit"><a href="config.php?logout">exit</a></div>
        <ul class="tab-nav">
          <li>
            <a class="button active" href="#one">Lucnh of the day</a>
          </li>
          <li>
            <a class="button" href="#two">Starters</a>
          </li>
          <li>
            <a class="button" href="#three">Soups</a>
          </li>
          <li>
            <a class="button" href="#four">Main Course</a>
          </li>
          <li>
            <a class="button" href="#five">Desserts</a>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane active" id="one">
              <div class="row">
                <div class="one-half column category">
                    <h5>Add Lucnh of the day</h5>
                    <form id="lunch">
                    <label >EST</label>
                    <textarea id="lunch_et" form="lunch"></textarea><br>
                    <label >RUS</label>
                    <textarea id="lunch_ru" form="lunch" ></textarea><br>
                    <label >ENG</label>
                    <textarea id="lunch_en" form="lunch" ></textarea><br>
                    <input class="button" value="submit" type="submit">
                  </form>
                </div>
                <div class="one-half column category">
                    <h5>In the bot now</h5></br>
                  <div id="lunchview">
                      <div class="preview">
                        <p>On Monday's menu, meatball soup and pork schnitzel with rice and fresh vegetable salad. Cakes have already arrived, we are only waiting for you!</p>
                      </div>
                  </div>
                  </div>
              </div>
          </div>
          <div class="tab-pane" id="two">
            <div class="row">
              <div class="one-half column">
                  <h5>Add Starter</h5>
                  
            <form id="starter">
                <div class="row">
                    <label>Name of the starter</label>
                    <input class="u-full-width" name="Starter_name_en" id="Starter_name_en" type="text" placeholder="Engish name here" required/>
                    <input class="u-full-width" name="Starter_name_ru" id="Starter_name_ru" type="text" placeholder="Russian name here" required/>
                    <input class="u-full-width" name="Starter_name_et" id="Starter_name_et" type="text" placeholder="Estonian name here" required/>
                    <label>Ingredients</label>
                    <input class="u-full-width" name="Starter_ingredients_en" id="Starter_ingredients_en" type="text" placeholder="Engish ingredients here" required/>
                    <input class="u-full-width" name="Starter_ingredients_ru" id="Starter_ingredients_ru" type="text" placeholder="Russian ingredients here" required/>
                    <input class="u-full-width" name="Starter_ingredients_et" id="Starter_ingredients_et" type="text" placeholder="Estonian ingredients here" required/>
                    <label>Comments</label>
                    <input name="Starter_Lactose" id="Starter_Lactose"  type="checkbox" /> Lactose Free
                    <input name="Starter_Gluten" id="Starter_Gluten" type="checkbox" /> Gluten free
                    <input name="Starter_Vegetarian" id="Starter_Vegetarian" type="checkbox" /> Vegeterian
                    <input name="Starter_Vegan" id="Starter_Vegan" type="checkbox" /> Vegan
                    <label>Price</label>
                    <input class="u-full-width" name="price" id="Starter_price" type="text" required/>
                </div>
              <input class="button" value="To bot" type="submit">
            </form>

            </div>
            <div class="one-half column">
                <h5>Starters in the bot</h5></br>
              <div id="startersview">

              </div>
            </div>

            </div>


          </div>
          <div class="tab-pane" id="three">
            <div class="row">
              <div class="one-half column">
                  <h5>Add Soup</h5>
                  
            <form id="soup">
                <div class="row">
                    <label>Name of the soup</label>
                    <input class="u-full-width" name="Soup_name_en" id="Soup_name_en" type="text" placeholder="Engish name here" required/>
                    <input class="u-full-width" name="Soup_name_ru" id="Soup_name_ru" type="text" placeholder="Russian name here" required/>
                    <input class="u-full-width" name="Soup_name_et" id="Soup_name_et" type="text" placeholder="Estonian name here" required/>
                    <label>Ingredients</label>
                    <input class="u-full-width" name="Soup_ingredients_en" id="Soup_ingredients_en" type="text" placeholder="Engish ingredients here" required/>
                    <input class="u-full-width" name="Soup_ingredients_ru" id="Soup_ingredients_ru" type="text" placeholder="Russian ingredients here" required/>
                    <input class="u-full-width" name="Soup_ingredients_et" id="Soup_ingredients_et" type="text" placeholder="Estonian ingredients here" required/>
                    <label>Comments</label>
                    <input name="Soup_Lactose" id="Soup_Lactose"  type="checkbox" /> Lactose Free
                    <input name="Soup_Gluten" id="Soup_Gluten" type="checkbox" /> Gluten free
                    <input name="Soup_Vegetarian" id="Soup_Vegetarian" type="checkbox" /> Vegeterian
                    <input name="Soup_Vegan" id="Soup_Vegan" type="checkbox" /> Vegan
                    <label>Price</label>
                    <input class="u-full-width" name="price" id="soup_price" type="text" required/>
                </div>
              <input class="button" value="To bot" type="submit">
            </form>

            </div>
            <div class="one-half column">
                <h5>Soups in the bot</h5></br>
              <div id="soupsview">

              </div>
            </div>

            </div>


          </div>
          <div class="tab-pane" id="four">
            <div class="row">
              <div class="one-half column">
                  <h5>Add Main course</h5>
                  
            <form id="maincourse">
                <div class="row">
                    <label>Name of the main course</label>
                    <input class="u-full-width" name="Maincourse_name_en" id="Maincourse_name_en" type="text" placeholder="Engish name here" required/>
                    <input class="u-full-width" name="Maincourse_name_ru" id="Maincourse_name_ru" type="text" placeholder="Russian name here" required/>
                    <input class="u-full-width" name="Maincourse_name_et" id="Maincourse_name_et" type="text" placeholder="Estonian name here" required/>
                    <label>Ingredients</label>
                    <input class="u-full-width" name="Maincourse_ingredients_en" id="Maincourse_ingredients_en" type="text" placeholder="Engish ingredients here" required/>
                    <input class="u-full-width" name="Maincourse_ingredients_ru" id="Maincourse_ingredients_ru" type="text" placeholder="Russian ingredients here" required/>
                    <input class="u-full-width" name="Maincourse_ingredients_et" id="Maincourse_ingredients_et" type="text" placeholder="Estonian ingredients here" required/>
                    <label>Comments</label>
                    <input name="Maincourse_Lactose" id="Maincourse_Lactose"  type="checkbox" /> Lactose Free
                    <input name="Maincourse_Gluten" id="Maincourse_Gluten" type="checkbox" /> Gluten free
                    <input name="Maincourse_Vegetarian" id="Maincourse_Vegetarian" type="checkbox" /> Vegeterian
                    <input name="Maincourse_Vegan" id="Maincourse_Vegan" type="checkbox" /> Vegan
                    <label>Price</label>
                    <input class="u-full-width" name="price" id="Maincourse_price" type="text" pattern="[0-9]{1,2}" required/>
                </div>
              <input class="button" value="To bot" type="submit">
            </form>

            </div>
            <div class="one-half column">
                <h5>Main courses in the bot</h5></br>
              <div id="maincurseview">

              </div>
            </div>

            </div>


          </div>
          <div class="tab-pane" id="five">
            <div class="row">
              <div class="one-half column">
                  <h5>Add Desserts</h5>
                  
            <form id="dessert">
                <div class="row">
                    <label>Name of the dessert</label>
                    <input class="u-full-width" name="Dessert_name_en" id="Dessert_name_en" type="text" placeholder="Engish name here" required/>
                    <input class="u-full-width" name="Dessert_name_ru" id="Dessert_name_ru" type="text" placeholder="Russian name here" required/>
                    <input class="u-full-width" name="Dessert_name_et" id="Dessert_name_et" type="text" placeholder="Estonian name here" required/>
                    <label>Ingredients</label>
                    <input class="u-full-width" name="Dessert_ingredients_en" id="Dessert_ingredients_en" type="text" placeholder="Engish ingredients here" required/>
                    <input class="u-full-width" name="Dessert_ingredients_ru" id="Dessert_ingredients_ru" type="text" placeholder="Russian ingredients here" required/>
                    <input class="u-full-width" name="Dessert_ingredients_et" id="Dessert_ingredients_et" type="text" placeholder="Estonian ingredients here" required/>
                    <label>Comments</label>
                    <input name="Dessert_Lactose" id="Dessert_Lactose"  type="checkbox" /> Lactose Free
                    <input name="Dessert_Gluten" id="Dessert_Gluten" type="checkbox" /> Gluten free
                    <input name="Dessert_Vegetarian" id="Dessert_Vegetarian" type="checkbox" /> Vegeterian
                    <input name="Dessert_Vegan" id="Dessert_Vegan" type="checkbox" /> Vegan
                    <label>Price</label>
                    <input class="u-full-width" name="price" id="Dessert_price" type="text" required/>
                </div>
              <input class="button" value="To bot" type="submit">
            </form>

            </div>
            <div class="one-half column">
                <h5>Desserts in the bot</h5></br>
              <div id="dessertsview">

              </div>
            </div>

            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="js/jquery.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
