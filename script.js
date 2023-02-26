const menu = document.querySelector('.menu_hidden');
menu.addEventListener('click', openMenu);
const text = document.querySelector('.nav_hidden');


let image = new Image();
image.scr = 'img/icon_menu2.png';

function openMenu() {
	menu.classList.toggle('newIcon');
	text.classList.toggle('hidden_on');
	
}

const formBut = document.querySelector('.sign-up_button');
const formText = document.querySelector('.sign-up_window');
const nameInput = document.querySelector('.input_name')
const numberInput = document.querySelector('.input_number')
const dateInput = document.querySelector('.input_addres')
const hidden = document.querySelector('.hidden_field')

formText.style.fontSize = '30px';
formBut.addEventListener('click', sendApplic);


function sendApplic() {
	if (nameInput.value !== ' ' & numberInput.value !== ' ' & dateInput.value !== '') {
	formText.innerText = "Спасибо, ваша заявка принята. Ожидайте звонка оператора."
	} else {
		hidden.style.display = 'block'
	}
}
