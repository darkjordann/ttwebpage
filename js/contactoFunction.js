function validateInput(element){

    if(element==1){
        var valueinput = document.getElementById('nombre').value;
        if(valueinput == ""){
            document.getElementById('nombreIn').style.display = "block";
            document.getElementById('nombreNL').style.display = "none";
            document.getElementById('nombre').style.borderBottom = "1px solid #EA0016";
        }
        else if (valueinput.length < 5) {
            document.getElementById('nombreIn').style.display = "none";
            document.getElementById('nombreNL').style.display = "block";
            document.getElementById('nombre').style.borderBottom = "1px solid #EA0016";
        }
        else{
            document.getElementById('nombreIn').style.display = "none";
            document.getElementById('nombreNL').style.display = "none";
            document.getElementById('nombre').style.borderBottom = "1px solid #78BE20";
        }
    }

    else if(element==2){
        var valueinput = document.getElementById('empresa').value;
        if(valueinput == ""){
            document.getElementById('empresaIn').style.display = "block";
            document.getElementById('empresaNL').style.display = "none";
            document.getElementById('empresa').style.borderBottom = "1px solid #EA0016";
        }
        else if (valueinput.length < 5) {
            document.getElementById('empresaIn').style.display = "none";
            document.getElementById('empresaNL').style.display = "block";
            document.getElementById('empresa').style.borderBottom = "1px solid #EA0016";
        }
        else{
            document.getElementById('empresaIn').style.display = "none";
            document.getElementById('empresaNL').style.display = "none";
            document.getElementById('empresa').style.borderBottom = "1px solid #78BE20";
        }
    }

    else if(element==3){
        var valueinput = document.getElementById('ciudad').value;
        if(valueinput == ""){
            document.getElementById('ciudadIn').style.display = "block";
            document.getElementById('ciudadNL').style.display = "none";
            document.getElementById('ciudad').style.borderBottom = "1px solid #EA0016";
        }
        else if (valueinput.length < 5) {
            document.getElementById('ciudadIn').style.display = "none";
            document.getElementById('ciudadNL').style.display = "block";
            document.getElementById('ciudad').style.borderBottom = "1px solid #EA0016";
        }
        else{
            document.getElementById('ciudadIn').style.display = "none";
            document.getElementById('ciudadNL').style.display = "none";
            document.getElementById('ciudad').style.borderBottom = "1px solid #78BE20";
        }
    }

    else if(element==4){
        var valueinput = document.getElementById('email').value;
        if(valueinput == ""){
            document.getElementById('emailIn').style.display = "block";
            document.getElementById('emailNL').style.display = "none";
            document.getElementById('email').style.borderBottom = "1px solid #EA0016";
        }
        else if (valueinput.length < 5) {
            document.getElementById('emailIn').style.display = "none";
            document.getElementById('emailNL').style.display = "block";
            document.getElementById('email').style.borderBottom = "1px solid #EA0016";
        }
        else{
            document.getElementById('emailIn').style.display = "none";
            document.getElementById('emailNL').style.display = "none";
            document.getElementById('email').style.borderBottom = "1px solid #78BE20";
        }
    }

    else if(element==5){
        var valueinput = document.getElementById('mensaje').value;
        if(valueinput == ""){
            document.getElementById('mensajeIn').style.display = "block";
            document.getElementById('mensajeNL').style.display = "none";
            document.getElementById('mensaje').style.borderBottom = "1px solid #EA0016";
        }
        else if (valueinput.length < 5) {
            document.getElementById('mensajeIn').style.display = "none";
            document.getElementById('mensajeNL').style.display = "block";
            document.getElementById('mensaje').style.borderBottom = "1px solid #EA0016";
        }
        else{
            document.getElementById('mensajeIn').style.display = "none";
            document.getElementById('mensajeNL').style.display = "none";
            document.getElementById('mensaje').style.borderBottom = "1px solid #78BE20";
        }
    }
}

$(function () {
    $('#formContact').on('submit', function (e) {
        //alert("Estas enviando");
        e.preventDefault();

        if(document.getElementById('nombre').style.borderBottomColor != "rgb(120, 190, 32)"){
            window.location.hash = '#nombreCont';
        }
        else if(document.getElementById('empresa').style.borderBottomColor != "rgb(120, 190, 32)"){
            window.location.hash = '#empresaCont';
        }
        else if(document.getElementById('ciudad').style.borderBottomColor != "rgb(120, 190, 32)"){
            window.location.hash = '#ciudadCont';
        }
        else if(document.getElementById('email').style.borderBottomColor != "rgb(120, 190, 32)"){
            window.location.hash = '#emailCont';
        }
        else if(document.getElementById('mensaje').style.borderBottomColor != "rgb(120, 190, 32)"){
            window.location.hash = '#mensajeCont';
        }else{
            alert('Datos enviados con éxito');
            //location.reload();
        }
    });
});
