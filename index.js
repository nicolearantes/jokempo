
var action = ["rock", "paper", "scissors"]
var currentPlayer1 = 0
var currentPlayer2 = 0

function timerReset() {
    var originalText = $(".reset").text();

    function loop(count) {
        $(".reset").text(`${originalText} (${count})`);

        if (count == 0) {
            location.reload();
            return;
        }

        setTimeout(() => loop(count - 1), 1000)
    }

    loop(5);
}

function whosWin() {
    if (currentPlayer1 === 2) {
        $("#score").text("You win the game!")
        $("body").css("background-color", "green")
        $(".player1-button").attr("disabled", "true")
        timerReset()


    } else if (currentPlayer2 === 2) {
        $("#score").text("Oh no, CPU wins the game!")
        $("body").css("background-color", "red")
        $(".player1-button").attr("disabled", "true")
        timerReset()

    }
}




$(".player1-button").on("click", function (e) {
    var item = $(this).data("which-button");
    var select = Math.floor(Math.random() * 3);
    var random = action[select];

    $("#player2-choose")
        .removeClass()
        .addClass("fas")
        .addClass("fa-hand-rock")
        .addClass("fa-10x")
        .animate({ left: "-20px", top: "20px" })
        .animate({ left: "0px", top: "0px" })
        .animate({ left: "-20px", top: "20px" })
        .animate({ left: "0px", top: "0px" })

    $("#player1-choose")
        .removeClass()
        .addClass("fas")
        .addClass("fa-hand-rock")
        .addClass("fa-10x")
        .animate({ left: "20px", top: "20px" })
        .animate({ left: "0px", top: "0px" })
        .animate({ left: "20px", top: "20px" })
        .animate({ left: "0px", top: "0px" }, null, () => {

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
                $("#score").text("You win!")
                currentPlayer1 += 1
                $(".player1-score").text(currentPlayer1)

            } else if (item === "paper" && random === "rock") {
                $("#score").text("You win!")
                currentPlayer1 += 1
                $(".player1-score").text(currentPlayer1)

            } else if (item === "rock" && random === "scissors") {
                $("#score").text("You win!")
                currentPlayer1 += 1
                $(".player1-score").text(currentPlayer1)

            } else if (item === random) {
                $("#score").text("Tie!")

            } else {
                $("#score").text("CPU wins!")
                currentPlayer2 += 1
                $(".player2-score").text(currentPlayer2)

            }
            whosWin()

        })

})




$(".reset").on("click", function () {
    location.reload()

})





















