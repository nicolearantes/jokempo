$(".player1-button").on("click", function (e) {
   var item =  $(this).data("which-button");
    console.log(item)
    $("#player1-choose").removeClass("fa-hand-rock").addClass("fa-hand-" + item );
    

});

