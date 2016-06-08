/* Global Variables */

var questionsArray = [

    //question 1
            {
                questionAsked: "Who is Manchester Citys new manager for 2016-17 season.",
                questionChoices: ["Alex Ferguson", "Guardiola", "Mourinho", "Ancelotti"],
                questionAnswer: 1,
                questionsCorrect:"Guardiola is the new manager of Man City",
            },

    //question 2
            {
                questionAsked: "Who won the 2014-15 Premier League Season.",
                questionChoices: ["Leicester City", "Arsenal", "Manchester City", "Chelsea"],
                questionAnswer: 3,
                questionsCorrect:"Chelsea won under Mourinho.",
            },

            //question 3
            {
                questionAsked: "Where do Aston Villa play their home games.",
                questionChoices: ["Villa Road", "Villa Park", "Sun Life Stadium"],
                questionAnswer: 1,
                questionsCorrect:"Villa play at Villa park and have done since they were founded.",
            },

            //question 4
            {
                questionAsked: "Who won the 2015-16 Champions Leage Final.",
                questionChoices: ["Real Madrid", "Barcelona", "Argentina", "Bayern Munich"],
                questionAnswer: 0,
                questionsCorrect:"Real Madrid beat Ath Madrid in a Champs League Final Derby.",
            },

            //question 5
            {
                questionAsked: "Who play their homes games at St James Park",
                questionChoices: ["Goole Town", "Hartlepool", "Blackburn Rovers", "Exeter Town"],
                questionAnswer: 3,
                questionsCorrect:"Exeter play their games at St James Park. Dont mistake it for Newcastle.",
            },

            //question 6
            {
                questionAsked: "How many teams have won the Premier League Trophy.",
                questionChoices: ["2", "5", "6", "8"],
                questionAnswer: 2,
                questionsCorrect:"6, not so many right?",
            },

            //question 7
            {
                questionAsked: "Who is the only player to have won silverware at both Man Utd and Liverpool.",
                questionChoices: ["Owen", "Ince", "Hughes", "Beardsley"],
                questionAnswer: 0,
                questionsCorrect:"Owen, not many people like him on Merseyside.",
            },

            //question 8
            {
                questionAsked: "Who is the only player to have scored in the Glasgow, Merseyside and Manchester derbies?",
                questionChoices: ["Gordon Ramsay", "Matt Busby", "Andrei Kanchelskis"],
                questionAnswer: 2,
                questionsCorrect:"The king that was.",
            },

            //question 9
            {
                questionAsked: "Who is the only player to win back-to-back trebles (domestic title, domestic cup and Champions League) in European club football?",
                questionChoices: ["Messi", "Ronaldo", "Ronaldinho", "Eto"],
                questionAnswer: 3,
                questionsCorrect:"Eto won it with Inter and Barcelona.",
            },
            //question 10
            {
                questionAsked: "Who is the only manager to have managed teams in all three UEFA club competition finals (Champions League, UEFA Cup and Cup Winners Cup), without winning any of them?",
                questionChoices: ["Ranieri", "Hiddink", "Lippi", "Wenger"],
                questionAnswer: 3,
                questionsCorrect:"Wenger the whinger.",
            },

            ];

var currentQuestionNumber = 0;
var totalNumberOfQuestions = questionsArray.length;
var correctTotal=0;

/* Function-definitions */
function questionDisplay(){
    //alert(questionsArray[currentQuestionNumber].questionAsked);
    //display current question
    $('#questionNumberDisplay').text(" question " + (currentQuestionNumber + 1) + " of " + totalNumberOfQuestions);
    $('#question').text(questionsArray[currentQuestionNumber].questionAsked);
    $('#choices').empty();
    var choiceTotal = questionsArray[currentQuestionNumber].questionChoices.length;
    for (var i = 0; i < choiceTotal; i++) {
        //loop thru the answer choices and create an dynamically generated row for each of them
        $('#choices').append("<input type='radio' class='option' name='option' value=" + i + ">" + questionsArray[currentQuestionNumber].questionChoices[i] + "<br>");
    }
}



/* Function-usage */

$(document).ready(function () {

//hide quiz questions and results on load

    $('.quiz-section').hide();
    $('.result-section').hide();

// on start of quiz

    $('#startQuizButton').click(function() {
        $('.result-section').hide();
        $('.start-section').hide();
        $('.quiz-section').show();
        $('#result-msg').empty();
        questionDisplay();
    });

    // show quiz questions
    $('.quiz-section').on('click', '.option', function() {
        //alert(correctAnswer);

        var answer = $("input[class='option']:checked").val();
        var correctAnswer = questionsArray[currentQuestionNumber].questionAnswer;
        if (answer == correctAnswer) {

            correctTotal++;

        }
        $('#result-msg').append("<h3>Q: " + questionsArray[currentQuestionNumber].questionAsked + "</h3>");
        $('#result-msg').append("<h4>A: " + questionsArray[currentQuestionNumber].questionsCorrect + "</h4>");


    if ((currentQuestionNumber + 1) == totalNumberOfQuestions) {

        $('#finalScore').text(correctTotal + "/" + totalNumberOfQuestions);

        $('.start-button').show();
        //hide other "screens"
        $('.quiz-section').hide();
        $('.start-section').hide();
        $('.result-section').show();
    }
    else {
        //continue to next question
        currentQuestionNumber++;
        questionDisplay();
    }
});


/*--- start section from the result section ---*/
$('.result-section').on('click', '#tryagain', function () {
    $('.start-section').show();
    $('.quiz-section').hide();
    $('.result-section').hide();

    currentQuestionNumber = 0;
    correctTotal = 0;
});
        });
