$(".player1-button").on("click", function (e) {
   var item =  $(this).data("which-button");
    var action = ["rock", "paper", "scissors"]
    var select = Math.floor(Math.random() * 3);
    var random = action[select]; 

    $("#player1-choose")
        .removeClass()
        .addClass("fas")
        .addClass("fa-hand-" + item)
        .addClass("fa-10x")

    $("#player2-choose")
        .removeClass()
        .addClass("fas")
        .addClass("fa-hand-" + random)
        .addClass("fa-10x")
    
});




 




