function somar() {
    var n1 = document.getElementById("numero1").value;
    var n2 = document.getElementById("numero2").value;
    var soma = parseInt(n1) + parseInt(n2);
    document.getElementById("result").innerHTML = soma;
}