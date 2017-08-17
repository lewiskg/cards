var createButton = document.getElementById("createCard");
var cardNumber = 0;
var delButton = [];


createButton.addEventListener('click', function(){
	var newCardName = document.getElementById("cardName").value;
	writeCardToDOM(newCardName, cardNumber);
	cardNumber++;
});


// function to create div card
function writeCardToDOM (name, idNumber) {
	// create div elment and set it's id and class
	// div id contains a unique number
	var node = document.createElement("div");
	node.setAttribute('id', `"card_${cardNumber}"`);
	node.className = "card";
	
	// create internals for div element created above
	// delete button contains a unique id number 
	var txtNode     = `<h1>${name}</h1></div>`;
	txtNode 	   += `<button type="button" id="delete_${idNumber}" class="deleteButton">Delete Card</button>`

	// add internals to created div element
	node.innerHTML  = txtNode;

	// add new div card to DOM
	document.getElementById("container").appendChild(node);

	// array to hold delete buttons for each new created div
	delButtonArray = document.getElementsByClassName("deleteButton");

	// array to append event listener to all created delete buttons
	for (var i = 0; i < delButtonArray.length; i++) {
		document.getElementById(delButtonArray[i].id).addEventListener('click', function(e){ deleteCard(e)});
	}

	// clear the input field
	clearInputField();
}

// funtion to delete created div card
function deleteCard(e) {
	var divNode = e.currentTarget.parentNode;
	var mainDivParent = document.getElementById("container");
console.log(divNode);
console.log(mainDivParent);

	mainDivParent.removeChild(divNode);

}

// function to clear input field
function clearInputField () {
	document.getElementById("cardName").innerHTML = "";
}



