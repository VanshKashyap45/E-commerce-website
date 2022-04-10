$(document).ready(function(){

    $('#cart').hide();
    $('#cartBtn').mousedown(function() {
        console.log("entered");
        $('#cart').toggle();
    });
})