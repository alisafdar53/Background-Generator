var _ = require ('lodash');


var array = [1,2,3,4,5];
console.log('Answer', _.without(array, 2));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

/*console.log(css);
console.log(color1);
console.log(color2);*/


function setGradient()
{
	body.style.background = 
	"Linear-gradient(to right,"
	+color1.value
	+ ","
	+color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)

