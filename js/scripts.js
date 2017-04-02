function Pizza (size){
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.sizePrice=function(){
  return 10 + this.size + this.toppings.length;
}

$(function(){
  $("form#pizza-choices").submit(function(event){
    event.preventDefault();

    var pizzaSize = parseInt($("input:radio[name=size]:checked").val());
    var newPizza = new Pizza(pizzaSize);

    $("input:checkbox[name=topping]:checked").each(function(){
      var inputToppings = $(this).val();
      newPizza.toppings.push(inputToppings);
    });

    newPizza.toppings.forEach(function(topping){
      $("ul.output-list").append("<li>" + topping + "</li>");
    });

    $("#price").text(newPizza.sizePrice());
    $("#result").show();
    $("button#order").hide();
    $("button#order-again").show();
  });

  $("button#order-again").click(function() {
    $("form")[0].reset();
    $("ul.output-list").empty();
    $("button#order").show();
    $("#result").hide();
    $("button#order-again").hide();
  });
});
