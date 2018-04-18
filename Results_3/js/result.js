function gradeResult() {

var myResultE = parseInt(document.getElementById("value1").value);
var myResultI = parseInt(document.getElementById("value2").value);
var myResultM = parseInt(document.getElementById("value3").value);
var grade;


//Results for English
if (!myResultE) {
	alert("Please enter a result");
}
else{
	if (myResultE > 90) {
		grade = 'A';
	} else if (myResultE > 80) {
		grade = 'B';
	} else if (myResultE > 70) {
		grade = 'B -';
	} else if (myResultE > 60) {
		grade = 'C';
	} else if (myResultE > 50) {
		grade = 'C -';
	} else if (myResultE > 40) {
		grade = 'D';
	} else {
		grade = 'F';
	}
	
		var message = 'You got a ' + grade + ' in English!';
	console.log(message);
	document.getElementById("resultsentenceEnglish").innerHTML = message;
	
}

//Results for Irish
if (!myResultI) {
	alert("Please enter a result");
}
else{
	if (myResultI > 90) {
		grade = 'A';
	} else if (myResultI > 80) {
		grade = 'B';
	} else if (myResultI > 70) {
		grade = 'B -';
	} else if (myResultI > 60) {
		grade = 'C';
	} else if (myResultI > 50) {
		grade = 'C -';
	} else if (myResultI > 40) {
		grade = 'D';
	} else {
		grade = 'F';
	}
	
	var message = 'You got a ' + grade + ' in Irish!';
	console.log(message);
	document.getElementById("resultsentenceIrish").innerHTML = message;
}
	
//Results for Maths
if (!myResultM) {
	alert("Please enter a result");
}
else{
	if (myResultM > 90) {
		grade = 'A';
	} else if (myResultM > 80) {
		grade = 'B';
	} else if (myResultM > 70) {
		grade = 'B -';
	} else if (myResultM > 60) {
		grade = 'C';
	} else if (myResultM > 50) {
		grade = 'C -';
	} else if (myResultM > 40) {
		grade = 'D';
	} else {
		grade = 'F';
	}
	
	var message = 'You got a ' + grade + ' in Maths!';
	console.log(message);
	document.getElementById("resultsentenceMaths").innerHTML = message;
}
}


