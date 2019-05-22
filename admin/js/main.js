$(document).ready(function () {
  $('ul.tab-nav li a.button').click(function() {
      var href = $(this).attr('href');

      $('li a.active.button', $(this).parent().parent()).removeClass('active');
      $(this).addClass('active');

      $('.tab-pane.active', $(href).parent()).removeClass('active');
      $(href).addClass('active');

      return false;
  });

  $('#login').click(function(e){
    e.preventDefault();
    $('#passwd').css('border','1px solid #ff0000');
    });
  $('#passwd').keypress(function(e){  
    e.preventDefault();  
    $('#passwd').removeAttr("style");
});
lunch();
starter();
soup();
maincourse();
dessert();
});



$('#lunch').on('submit',(function(e) {
  e.preventDefault();
  var item={
      "lunch_ru":$('#lunch_ru').val(),
      "lunch_en":$('#lunch_en').val(),
      "lunch_et":$('#lunch_et').val(),     
  };
  $.ajax({
      type: "POST",
      dataTyle:'json',
      url: "parser.php?lunchadd",
      data: {data: item },
      failure: function() {alert("Error!");}      
  });
  $('#lunch').trigger('reset');  
  setTimeout(lunch(), 10000);
  }));
$('#starter').on('submit',(function(e) {
    e.preventDefault();
    var item={
        "title_ru":$('#Starter_name_ru').val(),
        "title_en":$('#Starter_name_en').val(),
        "title_et":$('#Starter_name_et').val(),

        "ingredients_ru":$('#Starter_ingredients_ru').val(),
        "ingredients_en":$('#Starter_ingredients_en').val(),
        "ingredients_et":$('#Starter_ingredients_et').val(),

        "price":$('#Starter_price').val()
      
    };
    var req_en='';
    var req_et='';
    var req_ru='';
    if ($('#Starter_Lactose').is(':checked')){
      req_en += 'Lactose free ';
      req_et += 'Laktoosivaba ';
      req_ru += 'Без лактозы ';
     }
    if ($('#Starter_Gluten').is(':checked')){
      req_en += 'Gluten free ';
      req_et += 'Glutenivaba ';
      req_ru += 'Без глютена ';
    }
    if ($('#Starter_Vegetarian').is(':checked')){
      req_en += 'Vegetarian ';
      req_et += 'Vegetarian ';
      req_ru += 'Вегетарианское ';
    }
    if ($('#Starter_Vegan').is(':checked')){
      req_en += 'Vegan ';
      req_et += 'Vegan ';
      req_ru += 'Веганское ';
    }
    if (req_en && req_et && req_ru != ''){
      item['recomendation_en'] = req_en;
      item['recomendation_et'] = req_et;
      item['recomendation_ru'] = req_ru;
    }
    $.ajax({
        type: "POST",
        dataTyle:'json',
        url: "parser.php?starteradd",
        data: {data: item },
       // success: soup(),
        failure: function() {alert("Error!");}      
    });
      $('#starter').trigger('reset');
      setTimeout(starter(), 10000);
  }));
$('#soup').on('submit',(function(e) {
    e.preventDefault();
    var item={
        "title_ru":$('#Soup_name_ru').val(),
        "title_en":$('#Soup_name_en').val(),
        "title_et":$('#Soup_name_et').val(),

        "ingredients_ru":$('#Soup_ingredients_ru').val(),
        "ingredients_en":$('#Soup_ingredients_en').val(),
        "ingredients_et":$('#Soup_ingredients_et').val(),

        "price":$('#soup_price').val()
      
    };
    var req_en='';
    var req_et='';
    var req_ru='';
    if ($('#Soup_Lactose').is(':checked')){
      req_en += 'Lactose free ';
      req_et += 'Laktoosivaba ';
      req_ru += 'Без лактозы ';
     }
    if ($('#Soup_Gluten').is(':checked')){
      req_en += 'Gluten free ';
      req_et += 'Glutenivaba ';
      req_ru += 'Без глютена ';
    }
    if ($('#Soup_Vegetarian').is(':checked')){
      req_en += 'Vegetarian ';
      req_et += 'Vegetarian ';
      req_ru += 'Вегетарианское ';
    }
    if ($('#Soup_Vegan').is(':checked')){
      req_en += 'Vegan ';
      req_et += 'Vegan ';
      req_ru += 'Веганское ';
    }
    if (req_en && req_et && req_ru != ''){
      item['recomendation_en'] = req_en;
      item['recomendation_et'] = req_et;
      item['recomendation_ru'] = req_ru;
    }
    $.ajax({
        type: "POST",
        dataTyle:'json',
        url: "parser.php?soupadd",
        data: {data: item },
        failure: function() {alert("Error!");}      
    });
      $('#soup').trigger('reset');
      setTimeout(soup(), 10000);
  }));
$('#maincourse').on('submit',(function(e) {
    e.preventDefault();
    var item={
        "title_ru":$('#Maincourse_name_ru').val(),
        "title_en":$('#Maincourse_name_en').val(),
        "title_et":$('#Maincourse_name_et').val(),

        "ingredients_ru":$('#Maincourse_ingredients_ru').val(),
        "ingredients_en":$('#Maincourse_ingredients_en').val(),
        "ingredients_et":$('#Maincourse_ingredients_et').val(),

        "price":$('#Maincourse_price').val()
      
    };
    var req_en='';
    var req_et='';
    var req_ru='';
    if ($('#Maincourse_Lactose').is(':checked')){
      req_en += 'Lactose free ';
      req_et += 'Laktoosivaba ';
      req_ru += 'Без лактозы ';
     }
    if ($('#Maincourse_Gluten').is(':checked')){
      req_en += 'Gluten free ';
      req_et += 'Glutenivaba ';
      req_ru += 'Без глютена ';
    }
    if ($('#Maincourse_Vegetarian').is(':checked')){
      req_en += 'Vegetarian ';
      req_et += 'Vegetarian ';
      req_ru += 'Вегетарианское ';
    }
    if ($('#Maincourse_Vegan').is(':checked')){
      req_en += 'Vegan ';
      req_et += 'Vegan ';
      req_ru += 'Веганское ';
    }
    if (req_en && req_et && req_ru != ''){
      item['recomendation_en'] = req_en;
      item['recomendation_et'] = req_et;
      item['recomendation_ru'] = req_ru;
    }
    $.ajax({
        type: "POST",
        dataTyle:'json',
        url: "parser.php?maincourseadd",
        data: {data: item },
        failure: function() {alert("Error!");}      
    });
      $('#maincourse').trigger('reset');
      setTimeout(maincourse(), 10000);
  }));
$('#dessert').on('submit',(function(e) {
    e.preventDefault();
    var item={
        "title_ru":$('#Dessert_name_ru').val(),
        "title_en":$('#Dessert_name_en').val(),
        "title_et":$('#Dessert_name_et').val(),

        "ingredients_ru":$('#Dessert_ingredients_ru').val(),
        "ingredients_en":$('#Dessert_ingredients_en').val(),
        "ingredients_et":$('#Dessert_ingredients_et').val(),

        "price":$('#Dessert_price').val()
      
    };
    var req_en='';
    var req_et='';
    var req_ru='';
    if ($('#Dessert_Lactose').is(':checked')){
      req_en += 'Lactose free ';
      req_et += 'Laktoosivaba ';
      req_ru += 'Без лактозы ';
     }
    if ($('#Dessert_Gluten').is(':checked')){
      req_en += 'Gluten free ';
      req_et += 'Glutenivaba ';
      req_ru += 'Без глютена ';
    }
    if ($('#Dessert_Vegetarian').is(':checked')){
      req_en += 'Vegetarian ';
      req_et += 'Vegetarian ';
      req_ru += 'Вегетарианское ';
    }
    if ($('#Dessert_Vegan').is(':checked')){
      req_en += 'Vegan ';
      req_et += 'Vegan ';
      req_ru += 'Веганское ';
    }
    if (req_en && req_et && req_ru != ''){
      item['recomendation_en'] = req_en;
      item['recomendation_et'] = req_et;
      item['recomendation_ru'] = req_ru;
    }
    $.ajax({
        type: "POST",
        dataTyle:'json',
        url: "parser.php?dessertadd",
        data: {data: item },
        failure: function() {alert("Error!");}      
    });
      $('#dessert').trigger('reset');
      setTimeout(dessert(), 10000);
  }));

  function lunch(){
    $.getJSON('botdb/lunch.json', function(data) {
      var item ='';
    $.each(data, function(key,value){
      item += '<div class=preview>';
      item += '<p>'+value.lunch.lunch_en+'</p>';                                        
      item += '</div>';            
    });
    $('#lunchview').html('');
    $('#lunchview').append(item);  
  });
  };
  function starter(){
    $.getJSON('botdb/starter.json', function(data) {
      var item ='';
    $.each(data, function(key, value){
      item += '<div class=preview>';
      item += '<div onclick="delstarter('+key+');" class=delbutton>X</div>';
      item += '<strong>'+value.starter.title_en+'</strong>';
      item += '<p>Ingredients: '+value.starter.ingredients_en+'<br>';
      if(value.starter.recomendation_en != null){
        item += 'Comments: '+value.starter.recomendation_en;
      }
      item += '</p>';
      item += '<strong>Price: '+value.starter.price+'€</strong>';                                             
      item += '</div>';            
    });
    $('#startersview').html('');
    $('#startersview').append(item);  
  });
  };
  function soup(){
    $.getJSON('botdb/soup.json', function(data) {
      var item ='';
    $.each(data, function(key, value){
      item += '<div class=preview>';
      item += '<div onclick="delsoup('+key+');" class=delbutton>X</div>';
      item += '<strong>'+value.soup.title_en+'</strong>';
      item += '<p>Ingredients: '+value.soup.ingredients_en+'<br>';
      if(value.soup.recomendation_en != null){
        item += 'Comments: '+value.soup.recomendation_en;
      }
      item += '</p>';
      item += '<strong>Price: '+value.soup.price+'€</strong>';                                             
      item += '</div>';            
    });
    $('#soupsview').html('');
    $('#soupsview').append(item);  
  });
  };
  function maincourse(){
    $.getJSON('botdb/maincourse.json', function(data) {
      var item ='';
    $.each(data, function(key, value){
      item += '<div class=preview>';
      item += '<div onclick="delmaincourse('+key+');" class=delbutton>X</div>';
      item += '<strong>'+value.maincourse.title_en+'</strong>';
      item += '<p>Ingredients: '+value.maincourse.ingredients_en+'<br>';
      if(value.maincourse.recomendation_en != null){
        item += 'Comments: '+value.maincourse.recomendation_en;
      }
      item += '</p>';
      item += '<strong>Price: '+value.maincourse.price+'€</strong>';                                             
      item += '</div>';            
    });
    $('#maincurseview').html('');
    $('#maincurseview').append(item);  
  });
  };
  function dessert(){
    $.getJSON('botdb/dessert.json', function(data) {
      var item ='';
    $.each(data, function(key, value){
      item += '<div class=preview>';
      item += '<div onclick="deldessert('+key+');" class=delbutton>X</div>';
      item += '<strong>'+value.dessert.title_en+'</strong>';
      item += '<p>Ingredients: '+value.dessert.ingredients_en+'<br>';
      if(value.dessert.recomendation_en != null){
        item += 'Comments: '+value.dessert.recomendation_en;
      }
      item += '</p>';
      item += '<strong>Price: '+value.dessert.price+'€</strong>';                                             
      item += '</div>';            
    });
    $('#dessertsview').html('');
    $('#dessertsview').append(item);  
  });
  };



  function delstarter(dish){
    $.ajax({
      type: "POST",
      url: "parser.php?delstarter",
      data: {data:dish},
      failure: function() {alert("Error!");}        
  });
  setTimeout(starter(), 10000);
  };
  function delsoup(dish){
    $.ajax({
      type: "POST",
      url: "parser.php?delsoup",
      data: {data:dish},
      failure: function() {alert("Error!");}        
  });
  setTimeout(soup(), 10000);
  };
  function delmaincourse(dish){
    $.ajax({
      type: "POST",
      url: "parser.php?delmaincourse",
      data: {data:dish},
      failure: function() {alert("Error!");}        
  });
  setTimeout(maincourse(), 10000);
  };
  function deldessert(dish){
    $.ajax({
      type: "POST",
      url: "parser.php?deldessert",
      data: {data:dish},
      failure: function() {alert("Error!");}        
  });
  setTimeout(dessert(), 10000);
  };
