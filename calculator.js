
var display = document.getElementById('output');
var input = '0';
var output = '0';
var answer = '';
var addedOperator = false;
var clearButton = document.getElementById('AC');

displayHTML(input);


function numbers(value) {
	if (input === '0') {
		input = value;
		displayHTML(input);
		clearButton.innerHTML = 'C';
	} else {
		if (addedOperator) {
			output += input;
			input = value;
			displayHTML(input);
			addedOperator = false;
		} else {
			input += value;
			displayHTML(input);
			addedOperator = false;
		}
	}
}

var test = input.slice(input.length);

function displayHTML(value) {
	if (input.length < 8) {
		displayFontSize(50);
	} else if (input.length < 12) {
		displayFontSize(32);
	} else if (input.length < 15) {
		displayFontSize(26);
	}
	display.innerHTML = value;
}

function displayFontSize(num) {
	display.style.fontSize = num + 'px';
}

function addOperator(value) {
	if (addedOperator) {
		return;
	} else {
		input += value;
		addedOperator = true;
	};

}

function equals() {
	answer = math.eval(output.concat(input));
	output = answer;
	input = '0';
	displayHTML(answer);
}

function funcClear() {
	var clearToggle = true;
	clearButton.innerHTML = 'AC';
	input, output = '0';
	displayHTML(input);
	displayFontSize(50);
}

function funcNegPos() {
	var neg = '-';
	if (input.charAt(0) !== '-') {
		input = neg.concat(input);
	} else {
		input = input.replace(/\-/, "");
	}
	displayHTML(input);
}

function funcPercent() {
	input = math.eval(input * 0.01);
	displayHTML(input);
}
