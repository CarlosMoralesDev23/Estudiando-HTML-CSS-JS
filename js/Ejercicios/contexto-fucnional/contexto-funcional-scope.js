function function1() {
    var a = 2
    
    function funcion2() {
        var b = 3

        function funcion3() {
            console.log( a, b )  
        }
    }

    //  las funciones anidadas o hijas tendran acceso a las variables declaradas en sus antecesoras o padres.  
    // pero no viceversa
}