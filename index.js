console.log("text");

function init() {
	let heading1 = document.querySelector("#heading1");
	let heading2 = document.querySelector("#heading2");
	let nav1 = document.querySelector("#nav1");
	let nav2 = document.querySelector("#nav2");
	let nav3 = document.querySelector("#nav3");

	heading1.addEventListener("click", e => {
		console.log("click");
		document.body.style.backgroundColor = "green";
		heading1.addEventListener("mouseout", e => {
			document.body.style.removeProperty("background-color");
		});
	});
	heading2.addEventListener("mouseover", e => {
		heading2.textContent = "Hello";
	});
	heading2.addEventListener("mouseout", e => {
		heading2.textContent = "Smaller Heading";
	});
	window.addEventListener("keydown", e => {
		const element = document.createElement("p");
		element.textContent = e.key;
		document.body.appendChild(element);
	});

	nav1.addEventListener("click", makeBoldandBigger);
	nav2.addEventListener("click", makeBoldandBigger);
	nav3.addEventListener("click", makeBoldandBigger);
}

function makeBoldandBigger(event) {
	let id = event.target.id;
	console.log(id);
	let paragraph = "p" + id.slice(-1);
	let paragraphID = document.querySelector(`#${paragraph}`);
	console.log(paragraph);
	if (paragraphID.style.fontWeight === "bold") {
		paragraphID.style.removeProperty("font-weight");
		paragraphID.style.removeProperty("font-size");
	} else {
		paragraphID.style.fontWeight = "bold";
		paragraphID.style.fontSize = "25px";
	}
}

init();
