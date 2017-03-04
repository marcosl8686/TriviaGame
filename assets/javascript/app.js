
var trivia = {
	timeLeft: 10,
	correctAnswer: 0,
	incorrectAnswer: 0,
	resetGame: function() {
		trivia.correctAnswer = 0;
		trivia.incorrectAnswer = 0;
		n = 0;
		nextGame(questionList[n]);
	}

}
var questionList = [
		question1 = {	
		question: "What is the name of the main character?",
		correctAnswer: {
			answer: "Saitama",
			image: "assets/images/saitama.gif"
		},
		incorrectAnswer1: "Shikoku",
		incorrectAnswer2: "Shizuoka",
		incorrectAnswer3: "Genos"
	},

	question2 = {	
		question: "who is saitama's apprentice?",
		incorrectAnswer1: "Puri-Puri-Prisoner",
		incorrectAnswer2: "Pig God",
		correctAnswer: {
			answer: "Genos",
			image: "assets/images/genos.fan.gif"
		},
		incorrectAnswer3: "Mumen Rider"
	},

	question3 = {	
		question: "Which of them is a S class Hero?",
		incorrectAnswer1: "Mumen Rider",
		incorrectAnswer2: "Tanktop Black Hole",
		incorrectAnswer3: "TankTop Tiger",
		correctAnswer: {
			answer: "Puri-Puri-Prisoner",
			image: "assets/images/puripuri.gif"
		}
	},

	question4 = {	
		question: "how was Speed-o-Sound Sonic defeated?",
		correctAnswer: {
			answer: "landed on Saitama's fist",
			image: "assets/images/gg.gif"
		},
		incorrectAnswer1: "One Punch",
		incorrectAnswer2: "One Kick",
		incorrectAnswer3: "Geno's Cannons"
	},

	question5 = {	
		question: "What is the source of Saitama's enormous power?",
		correctAnswer: {
			answer: "100 Push-ups, 100 Sit-ups, 100 Squats, 10 kilometers every day, no air conditioner",
			image: "assets/images/giphy.gif"
		},
		incorrectAnswer1: "Kryptonite",
		incorrectAnswer2: "Soju",
		incorrectAnswer3: "Radioactive Spider"
	}
];

var timer;
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
	setInterval(time, 1000);
})

function divCreater(questionObj){ // this function will create a div for every property of the given object. will also give a class of "answer" and id of the name of the property
	var newImg = $('<img class="imgStyle">');
	$(".imgStyle").hide();
	$("#gamePage").append(newImg);
	for(var k in questionObj) {
		var objProp = k;
		var objText = questionObj[k];
		var newDiv = $('<div class="answer"></div>').attr("id",objProp);
		$("#gamePage").append(newDiv);
		$(".imgStyle").hide();
	}
}
//this function will post the content of the properties to our HTML. and call the clickEvent function.
function gameStart(x) { 
	$("#timeLeft").html(trivia.timeLeft);
	$("#question").html(x.question).removeAttr("class","answer").attr("class","question");
	$("#correctAnswer").html(x.correctAnswer.answer);
	$("#incorrectAnswer1").html(x.incorrectAnswer1);
	$("#incorrectAnswer2").html(x.incorrectAnswer2);
	$("#incorrectAnswer3").html(x.incorrectAnswer3);
	clickEvent();
}
function clickEvent() { //this will check if the answer is correct or incorrect and run function depending if it is correct or incorrect
		$("#correctAnswer").click(correct);
		$("#incorrectAnswer1").click(incorrect);
		$("#incorrectAnswer2").click(incorrect);
		$("#incorrectAnswer3").click(incorrect);
}
var time = function() {
	if (trivia.timeLeft > 0) {
		trivia.timeLeft--;
		$("#timeLeft").html(trivia.timeLeft);
	}
	else if (trivia.timeLeft == 0) {
		incorrect();
	}
}
function resetTime() {
	trivia.timeLeft = 10;
}
function correct() {
	var gj = "You got it right!"
	var imgShow = questionList[n].correctAnswer.image;
	trivia.correctAnswer ++;
	console.log(trivia.correctAnswer + " this is the correctAnswer count")
	console.log(n + " this is the n number");
	$(".imgStyle").show();
	$("#next").show();
	$(".answer").hide();
	$(".imgStyle").attr("src",imgShow);
	$("#question").html(gj)
	setTimeout(call, 3000);

}
function incorrect() {
	var imgShow = "assets/images/incorrect.gif"
	var gj = "Wrong, the correct answer is " + questionList[n].correctAnswer.answer;
	trivia.incorrectAnswer ++;
	console.log(trivia.incorrectAnswer + " this is the incorrectAnswer count")
	console.log(n + " this is the n number")
	$(".imgStyle").show();
	$("#next").show();
	$(".answer").hide();
	$(".imgStyle").attr("src",imgShow);
	$("#question").html(gj)

	call();
	// setTimeout(call, 3000);
}
function incorrectTimer() {
	if(trivia.timeLeft <= 0) {
		incorrect();
	}
}
function call() {
	n++;
	if(n === questionList[n]) {
		endGame();
	}
	else {
		nextGame(questionList[n]);
	}
}
function nextGame(questionObj) {
	$(".imgStyle").hide();
	$(".answer").show();
	$(".answer").remove();
	$(".question").remove();
	for(var k in questionObj) {
		var objProp = k;
		var objText = questionObj[k];
		var newDiv = $('<div class="answer"></div>').attr("id",objProp);
	$("#gamePage").append(newDiv)
	}
	$("#timeLeft").html(trivia.timeLeft);
	$("#question").html(questionObj.question).removeAttr("class","answer").attr("class","question");
	$("#correctAnswer").html(questionObj.correctAnswer.answer);
	$("#incorrectAnswer1").html(questionObj.incorrectAnswer1);
	$("#incorrectAnswer2").html(questionObj.incorrectAnswer2);
	$("#incorrectAnswer3").html(questionObj.incorrectAnswer3);
	resetTime();
	clickEvent();
}
function endGame() {
	$("#gamePage").hide();
	$("#endGame").show();
	$("#right").html(trivia.correctAnswer);
	$("#wrong").html(trivia.incorrectAnswer);
	$("#restart").click(function(){
		$("#gamePage").show();
		$("#endGame").hide();
		trivia.resetGame();
	})	
}


