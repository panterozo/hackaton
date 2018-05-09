
$( document ).ready(function() {
    
    $('#bolivia').hide();
	$('#ecuador').hide();
	$('#peru').hide();
    $('#personas').on('change', function() {
		
		if(this.value==0){
			$('#bolivia').hide();
			$('#ecuador').hide();
			$('#peru').hide();
			}
		if(this.value==1){
			$('#bolivia').show();
			$('#ecuador').hide();
			$('#peru').hide();
			}
		if(this.value==2){
			$('#bolivia').hide();
			$('#ecuador').hide();
			$('#peru').show();
			}
		if(this.value==3){
			
			$('#bolivia').hide();
			$('#ecuador').show();
			$('#peru').hide();
			}
		
		
	});
});

function replaceAll(text,busca,reemplaza)
{
	while (text.toString().indexOf(busca) != -1) 
	text = text.toString().replace(busca,reemplaza); 
	return text;
}

function validaNumeroDiezFocus(input){
  input.value = replaceAll(input.value,".","");
  input.value = replaceAll(input.value,"$","");
}

function validaNumeroDiez(numero,largo)
{	
	numero.value = replaceAll(numero.value,".","");
	numero.value = replaceAll(numero.value,"$","");
	var cleanN = numero.value;
	var array = numero.value.split(',');
	if(array.length > 2){
		alert("El valor "+numero.value+" debe ser numerico");
		numero.value = 0;
		return;
	}
	
	if (!/^([,0-9])*$/.test(numero.value))
	{
  		alert("El valor " + numero.value + " debe ser numerico");
		numero.value = "0";
		return;
	}
	
	if (numero.value.length > 10)
	{
		alert("El valor maximo es 9.999.999.999");
		numero.value = "0";
		return;
	}
		
	if(array.length > 1){
		var parteEntera = array[0];
		var i=parteEntera.length-3;
		while (i>0){
		        parteEntera=parteEntera.substring(0,i)+"."+parteEntera.substring(i);
		        i-=3;
		} 
		numero.value=parteEntera+","+array[1];
	}
	else{
		var i=numero.value.length-3;
		while (i>0){
		        numero.value=numero.value.substring(0,i)+"."+numero.value.substring(i);
		        i-=3;
		} 
	}
	
	numero.value="$"+numero.value;
	var cleanNP=cleanN*0.03;
	var t = parseInt(cleanNP)+parseInt(cleanN);
	var montoDisp=150165-cleanN;
	//document.getElementById("#totalEnvio").value = montoDisp;
	$("#totalEnvio").val(t)
		
}
