$(".player1-button").on("click", function (e) {
   var item =  $(this).data("which-button");
    console.log(item)
    $("#player1-choose")
        .removeClass()
        .addClass("fas")
        .addClass("fa-hand-" + item)
        .addClass("fa-10x")

    
});



