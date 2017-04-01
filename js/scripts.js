function Pizza (size, topping){
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.sizePrice=function(){
  return 10 + this.size;
}
 var toppings = [];
$(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var pizzaSize = parseInt($("input:radio[name=size]:checked").val());


    $("input:checkbox[name=topping]:checked").each(function(){
      var inputToppings = $(this).val();
      toppings.push(inputToppings);
      console.log(toppings);
    });
    var newPizza = new Pizza (pizzaSize, toppings);
    // $("input:checkbox[name=meat]:checked").each(function(){
    //   var meatToppings = $(this).val();
    //   pizzaToppings.push(meatToppings);
    // });
    // $("input:checkbox[name=veggie]:checked").each(function(){
    //   var vegToppings = $(this).val();
    //   pizzaToppings.push(vegToppings);
    // });

    $("#price").text(newPizza.sizePrice());
    $("p").show();
    console.log(newPizza);
  });
});
