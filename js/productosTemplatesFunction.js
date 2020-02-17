$( document ).ready(function() {
    //Esta sección es para hacer la llamada de los datos

    var parameters = location.search.substring(1).split("=");
    var title,description,title2,description2, colorText;
    var itemsPerType = [];

    if(parameters[1]=="1"){
        colorText="#B90276";
        title= "Calentadores de depósito";
        description="Calidez que se adapta a tu ritmo de vida.";
        title2="Calentadores estancos bajo NOx";
        description2="Nueva gama de calentadores estancos y de bajo NOx Therm de Bosch. Tecnología, eficiencia, diseño y conectividad para una gama de calentadores estancos con el mínimo nivel de emisiones NOx y el máximo respeto por el medio ambiente.";
        itemsPerType = ["resources/productosTemplate/u523.jpg","True 38,78 y 120 Lts Gas Natural y LP","1","resources/productosTemplate/u529.jpg","Classic Clic 40, 80 y 120Lts Gas Natural y LP","2"];
    }else if(parameters[1] =="2"){
        colorText ="#B90276";
        title= "Calentadores de rápida recuperación";
        description="Agua caliente sin tiempos de espera.";
        title2="Calentadores XXXXX";
        description2="Estos calentadores....";
        itemsPerType = ["resources/productosTemplate/u523.jpg","Fast 5/11Lts Gas Natural y LP","1","resources/productosTemplate/u529.jpg","Recovery Clic 40, 80 y 120Lts Gas Natural y LP","2"];
    }else if(parameters[1] =="3"){
        colorText ="#78BE20";
        title= "Calentadores instantáneos";
        description="Agua caliente al instante y nunca se termina.";
        title2="Termos eléctricos";
        description2="Estos calentadores....";
        itemsPerType = ["resources/productosTemplate/u1381.jpg","Confort 7/13 Lts Gas Natural y LP","1","resources/productosTemplate/u1369.jpg","miniMAXX 13/16Lts Gas Natural y LP","2","resources/productosTemplate/u1375.jpg","Compact In 20Lts Gas Natural y LP","3","resources/productosTemplate/u1399.jpg","Compact Out 20Lts Gas Natural y LP","4","resources/productosTemplate/u1387.jpg","Balanz Vento 13,17,20 y 24Lts Gas Natural y LP","5","resources/productosTemplate/u1393.jpg","Easy Control 26Lts Gas Natural y LP","6","resources/productosTemplate/u1405.jpg","Eco 6/11Lts Gas Natural y LP","7"];
    }else if(parameters[1] =="4"){
        colorText ="#006249";
        title= "Calentadores de paso";
        description="Vive días perfectos SIEMPRE.";
        title2="Calentadores XXXXX";
        description2="Estos calentadores....";
        itemsPerType = ["resources/productosTemplate/u2588.jpg","Balanz 7/13Lts Gas Natural y LP","1"];
    }else if(parameters[1] =="5"){
        colorText ="#008ECF";
        title= "Calentadores eléctricos";
        description="Agua caliente en cualquier lugar sin necesidad de gas.";
        title2="Termos eléctricos";
        description2="Estos calentadores....";
        itemsPerType = ["resources/productosTemplate/u2867.jpg","Auto Heat","1","resources/productosTemplate/u2855.jpg","Control Heat","2","resources/productosTemplate/u2861.jpg","Minitanque","3","resources/productosTemplate/u2861.jpg","Regadera eléctrica","4","resources/productosTemplate/u2873.jpg","Termotank","5"];
    }else if(parameters[1] =="6"){
        colorText ="#B90276";
        title= "Calentador solar";
        description="Aprovecha la energía solar y reduce emisiones contaminantes.";
        title2="Calentadores XXXXX";
        description2="Estos calentadores....";
        itemsPerType = ["resources/productosTemplate/u523.jpg","True 38,78 y 120 Lts Gas Natural y LP","1","resources/productosTemplate/u529.jpg","Classic Clic 40, 80 y 120Lts Gas Natural y LP","2"];
    }

    document.getElementById("titleProduct").style.color = colorText;
    document.getElementById("titleHeader").innerHTML = title;
    document.getElementById("descriptionHeader").innerHTML=description;
    document.getElementById("titleProduct").innerHTML=title2;
    document.getElementById("descriptionProduct").innerHTML=description2;

    //al for lo incrementamos de 3 en 3 ya que cada item tiene 3 elementos base
    for (var i=0; i<itemsPerType.length; i=i+3){
        //Agregamos cada producto registrado como una aestructura HTML
        var item = "<div class='itemContainerProduct'><div class='imageItem'><img src='"+itemsPerType[i]+"' class='imageProduct'></div><p class='titleProduct'>"+itemsPerType[i+1]+"</p><p class='descriptionProduct'> Display digital a color táctil frontal de vidrio</p><p class='botonProduct'><a href='productoSelected.html?typeProduct="+parameters[1]+"&numProduct="+(i+1)+"'> leer más > </a></p></div>";
        //Agregamos cada item al contenedor que centra los objetos
        document.getElementById('itemsPerProduct').innerHTML += item;
    }

    //Esta sección es para hacer resonsivo el texto

    var items = document.getElementsByClassName("itemContainerProduct");

    var numLinesItems = Math.ceil(items.length/3);

    // media queries max de 600px
    function functionOneItem600(x) {
        if (x.matches && (numLinesItems*3-items.length == 2)) { 
            //alert("entra a la funcion One");// If media query matches
            items[items.length-1].style.marginLeft = "0%";
        } 
    }

    function functionTwoItem600(x) {
        if (x.matches && (numLinesItems*3-items.length == 1)) { // If media query matches
            items[items.length-1].style.marginLeft = "0%";
            items[items.length-2].style.marginLeft = "0%";
        } 
    }

    // media queries max de 992px
    function functionOneItem992(y) {
        if (y.matches && (numLinesItems*3-items.length == 2)) { 
            //alert("entra a la funcion One");// If media query matches
            items[items.length-1].style.marginLeft = "0%";
        } 
    }

    function functionTwoItem992(y) {
        if (y.matches && (numLinesItems*3-items.length == 1)) { // If media query matches
            items[items.length-1].style.marginLeft = "0%";
            items[items.length-2].style.marginLeft = "0%";
        } 
    }

    // media queries min de 992px
    function functionOneItemMin992(z) {
        if (z.matches && (numLinesItems*3-items.length == 2)) { 
            //alert("entra a la funcion One");// If media query matches
            items[items.length-1].style.marginLeft = "33%";
        } 
    }

    function functionTwoItemMin992(z) {
        if (z.matches && (numLinesItems*3-items.length == 1)) { // If media query matches
            items[items.length-2].style.marginLeft = "19%";
        } 
    }
      
    var x = window.matchMedia("(max-width: 600px)")
    var y = window.matchMedia("(max-width: 992px)")
    var z = window.matchMedia("(min-width: 992px)")
    
    functionOneItem600(x) // Call listener function at run time
    functionTwoItem600(x) // Call listener function at run time
    functionOneItem992(y) // Call listener function at run time
    functionTwoItem992(y) // Call listener function at run time
    functionOneItemMin992(z) // Call listener function at run time
    functionTwoItemMin992(z) // Call listener function at run time

    x.addListener(functionOneItem600) // Attach listener function on state changes
    x.addListener(functionTwoItem600) // Attach listener function on state changes
    y.addListener(functionOneItem992) // Attach listener function on state changes
    y.addListener(functionTwoItem992) // Attach listener function on state changes
    z.addListener(functionOneItemMin992) // Attach listener function on state changes
    z.addListener(functionTwoItemMin992) // Attach listener function on state changes

    
});