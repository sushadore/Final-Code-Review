function Pizza (topping, size){
  this.topping = topping;
  this.size = size;
}

var pizzaToppings=[];

$(function(){
  $("form").submit(function(event){
    event.preventDefault();

    $("input:checkbox[name=topping]:checked").each(function(){
      var inputToppings = $(this).val();
      pizzaToppings.push(inputToppings);
    });

    // $("input:checkbox[name=meat]:checked").each(function(){
    //   var meatToppings = $(this).val();
    //   pizzaToppings.push(meatToppings);
    // });
    // $("input:checkbox[name=veggie]:checked").each(function(){
    //   var vegToppings = $(this).val();
    //   pizzaToppings.push(vegToppings);
    // });
    var pizzaSize = parseInt($("input:radio[name=size]:checked").val());
  
  });
});
