var a; b;
function saberi() {
	a = parseInt (document.getElementById("prvo").value);
	b = parseInt (document.getElementById("drugo").value);
	document.getElementById("rezultat").value = a + b;
}
function oduzmi() {
	a = parseInt (document.getElementById("prvo").value);
	b = parseInt (document.getElementById("drugo").value);
	document.getElementById("rezultat").value = a - b;
}
function podeli() {
	a = parseInt (document.getElementById("prvo").value);
	b = parseInt (document.getElementById("drugo").value);
	document.getElementById("rezultat").value = a / b;
}
function pomnozi() {
	a = parseInt (document.getElementById("prvo").value);
	b = parseInt (document.getElementById("drugo").value);
	document.getElementById("rezultat").value = a * b;
}
function kvkoren() {
	a = parseInt (document.getElementById("prvo").value);
	document.getElementById("rezultat").value = Math.sqrt(a);
}
function obrisisve() {
	document.getElementById("prvo").value = "";
	document.getElementById("drugo").value = "";
	document.getElementById("rezultat").value = "";
}