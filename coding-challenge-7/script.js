(function () {

    // Function constructor
    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.logQuestion = function () {
            return this.question;
        };
        this.logAnswers = function () {
            for (var i = 0; i < this.answers.length; i++) {
                console.log(i + '. ' + this.answers[i])
            }
        };
        this.verifyUserAnswer = function () {
            if (userAnswer == this.correctAnswer) {
                console.log('Good job ! This is the correct answer !');
                this.updateUserScore();
                launch();
            } else if (userAnswer === 'exit') {
                console.log('Game stopped !');
            } else {
                console.log('No ! This is the wrong answer ! Try again !');
                console.log('Current score : ' + userScore);
                console.log('-----------------------------------------------------------');
                launch();
            }
        };
        this.updateUserScore = function () {
            userScore++;
            console.log('Current score : ' + userScore);
            console.log('-----------------------------------------------------------');
        };
    }

    // Questions
    var questionA = new Question('Is Javascript the best programming language in the world ?', ['Yes', 'No'], 0);
    var questionB = new Question('What Javascript means to you ?', ['Boring thing', 'Fun thing', 'Money-earning thing'], 1);
    var questionC = new Question('What kind of hardcore developer would you become ?', ['PHP', '.NET', 'Javascript'], 2);

    // Questions array
    var questionsArray = [questionA, questionB, questionC];

    // Global variables
    var userScore = 0;
    var userAnswer;

    // Launch
    function launch() {
        var randomNumber = Math.floor(Math.random() * questionsArray.length);
        var randomQuestion = questionsArray[randomNumber];
        console.log('Question ' + (randomNumber + 1) + ': ' + randomQuestion.logQuestion());
        randomQuestion.logAnswers();
        userAnswer = window.prompt('Choose the correct answer');
        randomQuestion.verifyUserAnswer();
    }

    launch();

})();
