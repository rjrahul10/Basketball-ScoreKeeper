var a1 = document.querySelector("#a1")
var a2 = document.querySelector("#a2")
var a3 = document.querySelector("#a3")
var b1 = document.querySelector("#b1")
var b2 = document.querySelector("#b2")
var b3 = document.querySelector("#b3")
var score1 =0
var score2 =0
var a1s = document.querySelector("#sc1")
var a2s = document.querySelector("#sc2")
var reset = document.querySelector("#reset")
a1.addEventListener("click", function(){
	score1 = score1+1;
	a1s.textContent = score1; 
})
a2.addEventListener("click", function(){
	score1 = score1+2;
	a1s.textContent = score1; 
})
a3.addEventListener("click", function(){
	score1 = score1+3;
	a1s.textContent = score1; 
})
b1.addEventListener("click", function(){
	score2 = score2+1;
	a2s.textContent = score2; 
})
b2.addEventListener("click", function(){
 	score2 = score2+2;
	a2s.textContent = score2; 
})
b3.addEventListener("click", function(){
	score2 = score2+3;
	a2s.textContent = score2; 
})
reset.addEventListener("click", function(){
	score2 = score1 =0;
	a1s.textContent =a2s.textContent = 0;
})
