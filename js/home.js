console.log('here');

var mini = true;

function toggleSidebar() {
	var sidebarItems = document.getElementsByClassName('skill-grouping');
	if (mini) {
		console.log("opening sidebar");
		document.getElementById("mySidebar").style.width = "250px";
		document.getElementById("main").style.marginLeft = "250px";
		this.mini = false;
		// toggleSidebarItemVisibility(sidebarItems, true);
	} else {
		console.log("closing sidebar");
		document.getElementById("mySidebar").style.width = "40px";
		document.getElementById("main").style.marginLeft = "40px";
		this.mini = true;
		// toggleSidebarItemVisibility(sidebarItems, false);
	}
}

function toggleSidebarItemVisibility(elements, show) {
	let display = show ? "block" : "None";
	for (element of elements) {
		// console.log(element);
		element.style.display = display;
		element.style.transition = "0.5s";
	}
}