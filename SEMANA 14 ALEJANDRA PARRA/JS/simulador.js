function calcular (){
    //proceso de transferencia del formulario al JS
    var n1=document.getElementById("valorc").value;
    var n2=document.getElementById("numc").value;
    var n3=document.getElementById("interes").value;
    //proceso de calcular js
    var ValorA=parseFloat(n1)*parseFloat(n3); // FX VALOR $ MES A PAGAR
    var ValorB=(parseFloat(n1)*(1+parseFloat(n3))); //FX PAGO TOTAL $ CREDITO
    // proceso de trasferencia de js al formulario
    document.getElementById("valora").value=ValorA;
    document.getElementById("valorb").value=ValorB.toFixed(0);
}
function Limpiar(){
    document.getElementById("valorc").value=" "; // borrar input
    document.getElementById("numc").value=" "; // borrar input
    document.getElementById("interes").value=" "; // borrar input
}