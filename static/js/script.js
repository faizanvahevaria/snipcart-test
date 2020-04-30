$(document).ready(function(){

  $category_btn = $(".category-btn");  
  $category_btn.click(function(e){
    $category_btn.removeClass("active");
    $(this).addClass("active");
  });

  $tshirt_design = $(".tshirt-design");
  $tshirt_design.click(function(e){
    $tshirt_design.removeClass("active");
    $(this).addClass("active");
  });

  $tshirt_size = $(".t-shirt-size");
  $tshirt_size.click(function(e){
    $tshirt_size.removeClass("active");
    $(this).addClass("active");
  });

  $tshirt_color = $(".tshirt-color");
  $tshirt_color.click(function(e){
    $tshirt_color.removeClass("active");
    $(this).addClass("active");
  });

});