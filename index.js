
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
        console.log("Player 1 wins!")
        $("#score").innerHTML = "Player 1 wins!"
    } else if (item === "paper" && random === "rock") {
        console.log("Player 1 wins!")
        // $(".p-score").innerHTML = "Player 1 wins!"
    } else if (item === "rock" && random === "scissors") {
        console.log("Player 1 wins!") 

    // $(".p-score").innerHTML = "Player 1 wins!"
    } else if (item === random) {
        // $(".p-score").innerHTML = "Tie!"
        console.log("Tie!")
    } else {
        // $(".p-score").innerHTML = "Player 2 wins!"
        console.log("Player 2 wins!")
    }

});

// function winner() {

// }









