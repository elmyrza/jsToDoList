var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var myList = document.querySelector('#list');
var main = document.querySelector('#main');
var ul = document.querySelector('.ul');
var story = myList.getElementsByClassName('item');
var popup = document.querySelector('.popup');
var close = document.querySelector('.close');


function addItem() {
	var newItem = document.createElement("li")
	newItem.innerHTML = "Новая задача";
	newItem.className = "item"
	myList.appendChild(newItem)
	popup.style.display = "none"
}

function delItem() {
	myList.removeChild(story [0])
	

	if(story.length == 0){
		popup.style.display = "block"
	}
}

function closePopup() {
	popup.style.display = "none"
}

btn1.addEventListener("click", addItem)
btn2.addEventListener("click", delItem)
close.addEventListener("click", closePopup)