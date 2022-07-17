
let words = [
    {
        "inputs": 18,
        "category": "Historical Figures(UK)(Playwright)",
        "word": "William Shakespeare"
    },
    {
        "inputs": 13,
        "category": "Historical Figures(South Africa)(Freedom Fighter)",
        "word": "Nelson Mondela"
    },
    {
        "inputs": 24,
        "category": "Historical Figures(INDIA)(Freedom Fighter)",
        "word": "Mohandas Karamchand Gandhi"
    },
    {
        "inputs": 13,
        "category": "Country(Previous Name= 'kingdom of Great Britain')",
        "word": "United Kingdom"
    },
    {
        "inputs": 11,
        "category": "Country (Previous Name='Kaffraria')",
        "word": "South Africa"
    },
    {
        "inputs": 5,
        "category": "Country (Historical Chinese Name='Tianzhu')",
        "word": "India"
    },

]

$(document).ready(function () {
    fillBlanks();
})

// function getTemplates() {
//     $.ajax({
//         url: "/get-template",
//         type: "get",
//         success: function (result) {
//             fillBlanks(result.word)
//         },
//         error: function (result) {
//             alert(result.responseJSON.message)
//         }
//     })
// }

function fillBlanks() {
    //Make sure blanks are empty to begin with
    const randomWord=words[Math.floor(Math.random()*words.length)]
    $("#blanks").empty();

    //Show blanks uisng <span>
    for (let i = 0; i < randomWord.inputs; i++) {
        let input_html = `<span class="fill_blanks" id="input_${i}">_</span>`
        $("#blanks").append(input_html)
    }

    //Show Hint
    $("#hint").html(randomWord.category)

    var gameOver = false
    //Fill blanks only if the character match is found
    $(".clickable").click(function () {
        var correctGuess = false;

        let id = $(this).attr("id");
        var life = parseInt($("#life").text())

        for (var i = 0; i < randomWord.word.length; i++) {
            if (randomWord.word.charAt(i).toLowerCase() == id) {
                if (life > 0 && ($(".fill_blanks").eq(i).html() == "_" || $(".fill_blanks").eq(i).html() == id)) {

                    $(".fill_blanks").eq(i).html(id);
                    correctGuess = true;

                    //Check if the word guess is complete
                    if ($("#blanks").text() === randomWord.word.toLowerCase()) {
                        $("#result").text("You Win!!")
                        correctGuess = true;
                        gameOver = true
                    }
                }

            }

        }

        if (life > 0 && correctGuess != true && gameOver != true) {
            life = life - 1
            $("#life").text(life)
        }
        else if (life == 0) {
            $("#result").text("You Lost!!")
        }
    })
}