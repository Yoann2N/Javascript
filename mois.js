function mois(i) {

    // retourner la chaîne de caractère correspondant au mois numériques demandé
    // en utilisant un tableau 
    // sans faire ça : if( i==1) return "janvier"; else if (i==2) return "fevrier"; ...

let mois = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];
if (mois < 1 || mois > 12) {
    return "Numéro de mois non valide";
}
else {
        return mois[mois - 1];
    };
 
}

console.log(getMonthName(1)); // Affiche "Janvier"
console.log(getMonthName(12)); // Affiche "Décembre"