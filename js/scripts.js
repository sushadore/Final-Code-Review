function Pizza (topping, size) {
  this.topping = topping;
  this.size = size;
}

$(function() {
  $("button").submit(function(event) {
    event.preventDefault();

    $("input:checkbox[name=free]:checked").each(function() {
      var freeToppings = $(this).val();
      alert(freeToppings);
    });
    $("input:checkbox[name=meat]:checked").each(function() {
      var meatToppings = $(this).val();
    });
    $("input:checkbox[name=veggie]:checked").each(function() {
      var vegToppings = $(this).val();
    });
  });
});
