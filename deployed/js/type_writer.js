
var i = 0;
var txt = 'computer science student @ uofm';
var speed = 100;

function typeWriter(){
	if (i < txt.length) {
		document.getElementById("typewriter").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}