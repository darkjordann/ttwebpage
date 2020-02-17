function showForm(element){
    if(element == 1){
        if(document.getElementById("circle1").classList.contains("containerSelected")){
            document.getElementById("circle1").classList.remove("containerSelected");
            document.getElementById("formServicioTecnico").classList.add("hideItem");

        }else{
            document.getElementById("circle1").classList.add("containerSelected");
            document.getElementById("circle2").classList.remove("containerSelected");
            document.getElementById("circle3").classList.remove("containerSelected");

            document.getElementById("titleFormAsistant").innerHTML = "Registro de garantía";
            document.getElementById("formServicioTecnico").classList.remove("hideItem");

            document.getElementById("triangle1").classList.remove("hideItem");
            document.getElementById("triangle2").classList.add("hideItem");
            document.getElementById("triangle3").classList.add("hideItem");

            location.href = "#triangle1";
        }
    }else if(element == 2){
        if(document.getElementById("circle2").classList.contains("containerSelected")){
            document.getElementById("circle2").classList.remove("containerSelected");
            document.getElementById("formServicioTecnico").classList.add("hideItem");
        }else{
            document.getElementById("circle2").classList.add("containerSelected");
            document.getElementById("circle1").classList.remove("containerSelected");
            document.getElementById("circle3").classList.remove("containerSelected");

            document.getElementById("titleFormAsistant").innerHTML = "Registro de Instalación";
            document.getElementById("formServicioTecnico").classList.remove("hideItem"); 
            
            document.getElementById("triangle1").classList.add("hideItem");
            document.getElementById("triangle2").classList.remove("hideItem");
            document.getElementById("triangle3").classList.add("hideItem");

            location.href = "#triangle2";
        }
    }else{
        if(document.getElementById("circle3").classList.contains("containerSelected")){
            document.getElementById("circle3").classList.remove("containerSelected");
            document.getElementById("formServicioTecnico").classList.add("hideItem");
        }else{
            document.getElementById("circle3").classList.add("containerSelected");
            document.getElementById("circle2").classList.remove("containerSelected");
            document.getElementById("circle1").classList.remove("containerSelected");

            document.getElementById("titleFormAsistant").innerHTML = "Asistencia técnica";  
            document.getElementById("formServicioTecnico").classList.remove("hideItem");

            document.getElementById("triangle1").classList.add("hideItem");
            document.getElementById("triangle2").classList.add("hideItem");
            document.getElementById("triangle3").classList.remove("hideItem");

            location.href = "#triangle3";
        }
    }
}