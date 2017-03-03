
var trivia = {
	timeLeft: 30,
	correctAnswer: 0,
	incorrectAnswer: 0,
	resetGame: function() {
		trivia.timeLeft = 30;
		correctAnswer = 0;
		incorrectAnswer = 0;
		$("#timeLeft").html("trivia.timeLeft");
	}

}
var question1 = {	
	question: "What is the name of the main character?",
	correctAnswer: "Saitama",
	incorrectAnswer1: "Shikoku",
	incorrectAnswer2: "Shizuoka",
	incorrectAnswer3: "Genos"
}
var question2 = {	
	question: "How was Sonic defeated?",
	correctAnswer: "hehe",
	incorrectAnswer1: "hoho",
	incorrectAnswer2: "lolo",
	incorrectAnswer3: "koko"
}
var question3 = {	
	question: "question3??",
	correctAnswer: "hihe",
	incorrectAnswer1: "hoho",
	incorrectAnswer2: "lolo",
	incorrectAnswer3: "koko3"
}
var question4 = {	
	question: "question4",
	correctAnswer: "hohe",
	incorrectAnswer1: "hoho",
	incorrectAnswer2: "lolo4",
	incorrectAnswer3: "koko"
}
var question5 = {	
	question: "question5??",
	correctAnswer: "hahe5",
	incorrectAnswer1: "hoho",
	incorrectAnswer2: "lolo",
	incorrectAnswer3: "koko"
}
var timer;

var questionList = [question1, question2, question3, question4, question5];

var newQUestion;
var n = 0;
//this will hide the gamePage at start
$("#gamePage").hide();
$("#endGame").hide();
//this will hide the startPage and show the gamePage, will also run the gameStart function and also run divCreater.
$("#start").click(function(){
	divCreater(question1);
	$("#gamePage").show();
	$("#startPage").hide();
	gameStart(question1);
})

function divCreater(questionObj){ // this function will create a div for every property of the given object. will also give a class of "answer" and id of the name of the property
	for(var k in questionObj) {
		var objProp = k;
		var objText = questionObj[k];
		var newDiv = $('<div class="answer"></div>').attr("id",objProp);

		$("#gamePage").append(newDiv)
	}
}
//this function will post the content of the properties to our HTML. and call the clickEvent function.
function gameStart(x) {
	$("#question").html(x.question);
	$("#correctAnswer").html(x.correctAnswer);
	$("#incorrectAnswer1").html(x.incorrectAnswer1);
	$("#incorrectAnswer2").html(x.incorrectAnswer2);
	$("#incorrectAnswer3").html(x.incorrectAnswer3);
	clickEvent();
}
function clickEvent() { //this will check if the answer is correct or incorrect and run function depending if it is correct or incorrect
	$("#correctAnswer").click(correct);
	$("#incorrectAnswer1").click(correct);
	$("#incorrectAnswer2").click(incorrect);
	$("#incorrectAnswer3").click(incorrect);
}
function correct() {
	trivia.correctAnswer ++;
	console.log(trivia.correctAnswer + " this is the correctAnswer count")
	n ++;
	console.log(n + " this is the n number")
	gameStart(questionList[n]);
}
function incorrect() {
	trivia.incorrectAnswer ++;
	console.log(trivia.incorrectAnswer + " this is the incorrectAnswer count")
	n ++;
	console.log(n + " this is the n number")
	gameStart(questionList[n]);
}