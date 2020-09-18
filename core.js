

$('.addButton').click(function(){

    var itemName = $('.item').val();
    
    var quantity = $('.qty').val();
    
    var price = $('.price').val();


    var data = {
        
        item: itemName,
        quantity: quantity,
        price: price,

    }

    $.ajax({
        method:'POST',
        url:'http://192.168.1.231/wallet/public/store',
        data: data

    }).done(function(response){

        console.log(response);            
        
        getBasket();

      });

      


});




function template(prod){

    var cost = prod.quantity * prod.price;
    cost = parseFloat(cost).toPrecision(4)
    var el = `<p>  ${prod.item}, ${prod.quantity}, £${cost} <span><button>Delete</button></span></p>`


    return el;


}




function getBasket(){

    $.ajax({
        method:'POST',
        url:'http://192.168.1.231/wallet/public/all',
        data: {}

    }).done(function(basket){

        $('.itemList').html('');

        var total = 0

      for(var i=0; i <basket.length; i++){

        $('.itemList').append(template(basket[i]));
                
        total = total + basket[i].quantity * basket[i].price;


      }

      total = parseFloat(total).toPrecision(5);

      $('.totalCost').append(' ' + total);

    });

}

$(document).ready(function(){

    getBasket();

})

