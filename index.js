var currentPlayer1=0
var currentPlayer2=0

$(".player1-button").on("click", function (e) {
    var item = $(this).data("which-button");
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

    if (item === "scissors" && random === "paper") {
        $("#score").text("Player 1 wins!")
        currentPlayer1+=1
        $(".player1-score").text(currentPlayer1)

    } else if (item === "paper" && random === "rock") {
        $("#score").text("Player 1 wins!")
        currentPlayer1 += 1
        $(".player1-score").text(currentPlayer1)

    } else if (item === "rock" && random === "scissors") {
         $("#score").text("Player 1 wins!")
        currentPlayer1 += 1
        $(".player1-score").text(currentPlayer1)

    } else if (item === random) {
        $("#score").text("Tie!")
    } else {
        $("#score").text("CPU wins!")
        currentPlayer2 += 1
        $(".player2-score").text(currentPlayer2)

    }

});











