$(".btn").click(function(event) {
	// body...
	event.preventDefault();
	var target = $(this).data("target");
	$("#click-alert")
		.html("data-target= " + target)
		.fadeIn(50)
		.delay(3000)
		.fadeOut(1000);
});

var currTab = 0;
showTab(currTab);
var checkboxCounts = [];
addCheckboxes();

function showTab(tabIndex) {
	// body...
	var x = document.getElementsByClassName("tab");
	// console.log(x[tabIndex])
	x[tabIndex].style.display = "inherit";
	window.scrollTo(0, 0);

	if (tabIndex == 0) {
		document.getElementById("back_btn").style.display = "none";
	}else {
		// document.getElementById("back_btn").style.display = "inline";
		document.getElementById("back_btn").style.display = "";
	}

	if (tabIndex == x.length - 1) {
		document.getElementById("next_btn").innerHTML = " &nbsp&nbsp&nbsp&nbsp&nbsp SUBMIT";
	}else {
		document.getElementById("next_btn").innerHTML = "CONTINUE &nbsp →";
	}

	changeStepIndicator(tabIndex)
}

function nextPrev(tabIndex) {
	// body...
	var x = document.getElementsByClassName("tab");
	validateForm();
	x[currTab].style.display = "none";
	currTab += tabIndex

	if (currTab >= x.length) {
		// FORM SUBMISSION
		// document.getElementById("regForm").submit();
		location.href = "thankyou.html"
		return false;
	}else {
		showTab(currTab);
	}

	if (tabIndex < 0) {
		isNext = false;
	}
	addCheckboxes();
}

function resetStepName() {
	document.getElementsByClassName("step")[currTab].className = "";
	document.getElementsByClassName("step")[currTab].className = "step";
	// body...
};

function validateForm() {
	// body...
	var x, y, valid = true;
	x = document.getElementById("tocenter");
	y = x.getElementsByTagName("input");
	// x = document.getElementsByClassName("tab");
	// y = x[currTab].getElementsByTagName("input");
	for (var i = 0; i < y.length; i++) {
		// if (y[i].value == null || y[i].value == "") {
		// 	valid = false;
		// 	break;
		// }
		if (!y[i].checked) {
			valid = false;
			break;
		}
	}

	var els = document.getElementsByClassName("step");
	els[currTab].className = els[currTab].className.replace(" unfinished", "")
	els[currTab].className = els[currTab].className.replace(" finish", "")

	if (valid) {
		els[currTab].className = els[currTab].className += " finish";
	}else {
		els[currTab].className = els[currTab].className += " unfinished";
	}
	return valid
}

function changeStepIndicator(tabIndex) {
	// body...
	var x = document.getElementsByClassName("step");
	for (var i = 0; i < x.length; i++) {
		x[i].className = x[i].className.replace(" active", "");
	}
	x[tabIndex].className += " active";
}

function clearCheckboxes() {
	var div = document.getElementById("tocenter");
	while(div.firstChild) {
		div.removeChild(div.firstChild);
	}
}

function addCheckboxes() {
	// body...
	clearCheckboxes();
	
	var tabs = document.getElementsByClassName("tab");
	var inputFields = tabs[currTab].getElementsByTagName("h6");
	var div = document.getElementById("tocenter");
	
	var firstNode;
	var secondNode;
	var thirdNode;
	var i;
	
	for (i = 0; i < inputFields.length; i++) {
		firstNode = document.createElement("div");
		firstNode.className = "checkbox";
		
		secondNode = document.createElement("label");
		var total = 0;
		for (var j = 0; j < currTab; j++) {
			total += checkboxCounts[j];
		}
		secondNode.innerHTML = total + i + 1 + ". ";
		
		thirdNode = document.createElement("input");
		thirdNode.type = "checkbox";
		thirdNode.onclick = function () {
			return false;
		};
		
		secondNode.appendChild(thirdNode);
		firstNode.appendChild(secondNode);
		div.appendChild(firstNode);
	}
	checkboxCounts[currTab] = i;
}
