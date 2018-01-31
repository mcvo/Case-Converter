document.getElementById('button2').disabled = false;
document.getElementById('button1').disabled = false;
document.getElementById("button1").onclick = function() {document.getElementById("txtdata").className = "uppercase form-control";};
document.getElementById("button2").onclick = function() {document.getElementById("txtdata").className = "lowercase form-control";};