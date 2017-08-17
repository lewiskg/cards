var createButton = document.getElementById("createCard");
var cardNumber = 0;  // counter to increment card id number


createButton.addEventListener('click', function(){
	var newCardName = document.getElementById("cardName").value;
	writeCardToDOM(createDivCard(newCardName));
	addListenersToDeleteButton();
	clearInputField();
});


////////////////////
//  FUNCTIONS ()  //
////////////////////


function createDivCard(cardTitle) {
	cardNumber++;
	// create div elment and set it's id and class
	// div id contains a unique number
	var node = document.createElement("div");
	node.setAttribute('id', `"card_${cardNumber}"`);
	node.setAttribute('class', 'card');
	
	// create internals for div element created above
	// delete button contains a unique id number 
	var txtNode = `<h1>${cardTitle}</h1></div>`;
	txtNode += `<button type="button" id="delete_${cardNumber}" class="deleteButton">Delete Card</button>`;

	// add internals to created div element
	node.innerHTML  = txtNode;

	return node;
}


function writeCardToDOM (nodeToWrite) {
	document.getElementById("container").appendChild(nodeToWrite);
}


function addListenersToDeleteButton() {
	var delButtonId = `delete_${cardNumber}`; 
	document.getElementById(delButtonId).addEventListener('click', function(e){ deleteCard(e)});

}


// function to delete created div card
function deleteCard(e) {
	var divNode = e.currentTarget.parentNode;
	console.log(divNode);
	var mainDivParent = document.getElementById("container");
	mainDivParent.removeChild(divNode);
}


// function to clear input field
function clearInputField () {
	document.getElementById("cardName").value = "";
}