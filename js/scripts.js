function Pizza (size){
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.sizePrice=function(){
  return 10 + this.size + this.toppings.length;
}

$(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var pizzaSize = parseInt($("input:radio[name=size]:checked").val());
    var newPizza = new Pizza (pizzaSize);

    $("input:checkbox[name=topping]:checked").each(function(){
      var inputToppings = $(this).val();
      newPizza.toppings.push(inputToppings);
    });

    $("#pizza-toppings").text(newPizza.toppings);
    $("#price").text(newPizza.sizePrice());
    $("p").show();
    console.log(newPizza);
  });
});
