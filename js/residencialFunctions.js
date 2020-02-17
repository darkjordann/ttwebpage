function moveCarouselRight(){
    var items = document.getElementsByClassName("containerImgCar");

    var itemRight = document.getElementsByClassName("itemRight");
    var itemCenter = document.getElementsByClassName("itemCenter");

    //alert(itemRight[1].style.display);

    if (itemCenter[0].style.display == 'none'){

    }else if (itemRight[0].style.display == 'none'){
        //alert('si detecta el 50%');
        for(var i=0;i<items.length;i++){
            if(items[i].classList.contains("itemCenter")){
                if(i==1){
                    // Eliminamos las clases de ubicacion
                    items[0].classList.remove("itemLeft");
                    items[1].classList.remove("itemCenter");
                    items[2].classList.remove("itemRight");
                    // Agregamos las clases de ubicación
                    items[items.length-2].classList.add("itemLeft");
                    items[items.length-1].classList.add("itemCenter");
                    items[0].classList.add("itemRight");
                    // Ocultamos los elementos que no se ven
                    items[0].classList.add("hideItem");
                    items[1].classList.add("hideItem");
                    items[2].classList.add("hideItem");
                    // mostramos los ultimod 2 elementos
                    items[items.length-2].classList.remove("hideItem");
                    items[items.length-1].classList.remove("hideItem");
                    items[0].classList.remove("hideItem");

                }else if(i==items.length-1){
                    // Eliminamos las clases de ubicacion
                    items[i-1].classList.remove("itemLeft");
                    items[i].classList.remove("itemCenter");
                    items[0].classList.remove("itemRight");
                    // Agregamos las clases de ubicación
                    items[i-2].classList.add("itemLeft");
                    items[i-1].classList.add("itemCenter");
                    items[i].classList.add("itemRight");
                    // Ocultamos los elementos que no se ven
                    items[i-1].classList.add("hideItem");
                    items[i].classList.add("hideItem");
                    items[0].classList.add("hideItem");
                    // mostramos los ultimos 2 elementos
                    items[i-2].classList.remove("hideItem");
                    items[i-1].classList.remove("hideItem");
                    items[i].classList.remove("hideItem");
                }else{
                    // Eliminamos las clases de ubicacion
                    items[i-1].classList.remove("itemLeft");
                    items[i].classList.remove("itemCenter");
                    items[i+1].classList.remove("itemRight");
                    // Agregamos las clases de ubicación
                    items[i-2].classList.add("itemLeft");
                    items[i-1].classList.add("itemCenter");
                    items[i].classList.add("itemRight");
                    // Ocultamos los elementos que no se ven
                    items[i].classList.add("hideItem");
                    items[i-2].classList.remove("hideItem");
                }
                break;
            }
        }
    }else{
        for(var i=0;i<items.length;i++){
            if(items[i].classList.contains("itemRight")){
                if(i==2){
                    // Eliminamos las clases de ubicacion
                    items[0].classList.remove("itemLeft");
                    items[1].classList.remove("itemCenter");
                    items[2].classList.remove("itemRight");
                    // Agregamos las clases de ubicación
                    items[items.length-3].classList.add("itemLeft");
                    items[items.length-2].classList.add("itemCenter");
                    items[items.length-1].classList.add("itemRight");
                    // Ocultamos los elementos que no se ven
                    items[0].classList.add("hideItem");
                    items[1].classList.add("hideItem");
                    items[2].classList.add("hideItem");
                    // mostramos los ultimod 3 elementos
                    items[items.length-3].classList.remove("hideItem");
                    items[items.length-2].classList.remove("hideItem");
                    items[items.length-1].classList.remove("hideItem");
                }else{
                    // Eliminamos las clases de ubicacion
                    items[i-2].classList.remove("itemLeft");
                    items[i-1].classList.remove("itemCenter");
                    items[i].classList.remove("itemRight");
                    // Agregamos las clases de ubicación
                    items[i-3].classList.add("itemLeft");
                    items[i-2].classList.add("itemCenter");
                    items[i-1].classList.add("itemRight");
                    // Ocultamos los elementos que no se ven
                    items[i].classList.add("hideItem");
                    items[i-3].classList.remove("hideItem");
                }
                break;
            }
        }
    }
}

function moveCarouselLeft(){
    var items = document.getElementsByClassName("containerImgCar");

    for(var i=0;i<items.length;i++){
        if(items[i].classList.contains("itemLeft")){
            //Esta es luna prueba de mejora de carousel
            /*
            if(i==items.length-3){
                // Eliminamos las clases de ubicacion
                items[i].classList.remove("itemLeft");
                items[i+1].classList.remove("itemCenter");
                items[i+2].classList.remove("itemRight");
                // Agregamos las clases de ubicación
                items[i+1].classList.add("itemLeft");
                items[i+2].classList.add("itemCenter");
                items[0].classList.add("itemRight");
                // Ocultamos los elementos que no se ven
                items[i].classList.add("hideItem");
                items[0].classList.remove("hideItem");
            }
            else if(i==items.length-2){
                // Eliminamos las clases de ubicacion
                items[i].classList.remove("itemLeft");
                items[i+1].classList.remove("itemCenter");
                items[0].classList.remove("itemRight");
                // Agregamos las clases de ubicación
                items[i+1].classList.add("itemLeft");
                items[0].classList.add("itemCenter");
                items[1].classList.add("itemRight");
                // Ocultamos los elementos que no se ven
                items[i].classList.add("hideItem");
                items[1].classList.remove("hideItem");
            }
            else if(i==items.length-1){
                // Eliminamos las clases de ubicacion
                items[i].classList.remove("itemLeft");
                items[0].classList.remove("itemCenter");
                items[1].classList.remove("itemRight");
                // Agregamos las clases de ubicación
                items[0].classList.add("itemLeft");
                items[1].classList.add("itemCenter");
                items[2].classList.add("itemRight");
                // Ocultamos los elementos que no se ven
                items[i].classList.add("hideItem");
                items[2].classList.remove("hideItem");
            }
            else{
                // Eliminamos las clases de ubicacion
                items[i].classList.remove("itemLeft");
                items[i+1].classList.remove("itemCenter");
                items[i+2].classList.remove("itemRight");
                // Agregamos las clases de ubicación
                items[i+1].classList.add("itemLeft");
                items[i+2].classList.add("itemCenter");
                items[i+3].classList.add("itemRight");
                // Ocultamos los elementos que no se ven
                items[i].classList.add("hideItem");
                items[i+3].classList.remove("hideItem");
            }
            break;
            */

            if(i==items.length-3){
                // Eliminamos las clases de ubicacion
                items[i].classList.remove("itemLeft");
                items[i+1].classList.remove("itemCenter");
                items[i+2].classList.remove("itemRight");
                // Agregamos las clases de ubicación
                items[0].classList.add("itemLeft");
                items[1].classList.add("itemCenter");
                items[2].classList.add("itemRight");
                // Ocultamos los elementos que no se ven
                items[i].classList.add("hideItem");
                items[i+1].classList.add("hideItem");
                items[i+2].classList.add("hideItem");
                // mostramos los primeros 3 elementos
                items[0].classList.remove("hideItem");
                items[1].classList.remove("hideItem");
                items[2].classList.remove("hideItem");
            }else{
                // Eliminamos las clases de ubicacion
                items[i].classList.remove("itemLeft");
                items[i+1].classList.remove("itemCenter");
                items[i+2].classList.remove("itemRight");
                // Agregamos las clases de ubicación
                items[i+1].classList.add("itemLeft");
                items[i+2].classList.add("itemCenter");
                items[i+3].classList.add("itemRight");
                // Ocultamos los elementos que no se ven
                items[i].classList.add("hideItem");
                items[i+3].classList.remove("hideItem");
            }
            break;
        }
    }
}

var numItemsOpen = 0; 

function moreCarousel(e){
    var openClose = document.getElementById("plusButton"+e).innerHTML;
    //alert(openClose);
    if(openClose == "+"){
        document.getElementById("plusButton"+e).innerHTML = "-";
        document.getElementById("plusDescription"+e).classList.remove("hideItem");
        document.getElementById("contaierCarousel").style.height = "650px";
        numItemsOpen++;
    }else{
        document.getElementById("plusButton"+e).innerHTML = "+";
        document.getElementById("plusDescription"+e).classList.add("hideItem");
        numItemsOpen--;
    }

    if(numItemsOpen == 0){
        document.getElementById("contaierCarousel").style.height = "450px";
    }
}