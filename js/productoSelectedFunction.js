$( document ).ready(function() {


    
    /*
    function MediaQuerieMax992(x) {
        if (y.matches) { 
            document.getElementById("leftItems").style.height="auto";
            document.getElementById("centerItems").classList.remove("centerText");
        }else{
            var heightContainer = document.getElementById('rightItems').clientHeight;
            document.getElementById("leftItems").style.height=heightContainer+"px";
            document.getElementById("centerItems").classList.add("centerText");
        }
    } 
    */
    //Esto nos ayuda a reorganizar los elementos cuando se expanden al 100%
    function MediaQuerieMin992(y) {
        if (y.matches) { 
            var heightContainer = document.getElementById('rightItems').clientHeight;
            document.getElementById("leftItems").style.height=heightContainer+"px";
            document.getElementById("centerItems").classList.add("centerText");
        }else{
            document.getElementById("leftItems").style.height="auto";
            document.getElementById("centerItems").classList.remove("centerText");
        }
    }

    //esta funcion nos ayuda a centrar el texto cuando el tamaño es el mas grande
    function MediaQuerieMin1200(z) {
        if (z.matches) { 
            var heightContainer = document.getElementById('rightItems').clientHeight;
            document.getElementById("leftItems").style.height=heightContainer+"px";
            document.getElementById("centerItems").classList.remove("centerText");
            document.getElementById("centerItems").classList.add("centerText");
        }
    }

    //var x = window.matchMedia("(max-width: 992px)")

    var y = window.matchMedia("(min-width: 992px)")
    var z = window.matchMedia("(min-width: 1200px)")

    //MediaQuerieMax992(x)
    MediaQuerieMin992(y)
    MediaQuerieMin1200(z)

    //x.addListener(MediaQuerieMax992)
    y.addListener(MediaQuerieMin992)
    z.addListener(MediaQuerieMin1200)
    
})