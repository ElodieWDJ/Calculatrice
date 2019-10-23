


    let nombre = document.querySelector("#ecran");

    // Afficher une valeur dans la calculette
    
    function ajouterValeur(n)
    {
        nombre.value = nombre.value + n;
    }
    
    // Calculer
    
    function calculer()
    {
        let b = eval(nombre.value);
        nombre.value = b;
      
    }

    function pourcentage(n)
    {
    nombre.value /= n;
    }

    // Suprimer
    
    function suprimerValeur()
    {
        nombre.value = " ";
    }





