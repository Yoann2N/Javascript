// ecrire un objet littéral cercle qui contient les propriétés suivantes:
// - rayon : nombre
// - perimetre : fonction qui retourne le périmètre du cercle
// - aire : fonction qui retourne l'aire du cercle

console.log(Math.PI);

const cercle = {
    rayon: 5, // Exemple de rayon par défaut

    // Fonction pour calculer le périmètre
    perimetre: function() {
        return 2 * Math.PI * this.rayon;
    },

    // Fonction pour calculer l'aire
    aire: function() {
        return Math.PI * Math.pow(this.rayon, 2);
    }
};

// Exemple d'utilisation
console.log("Rayon du cercle :", cercle.rayon); 
console.log("Périmètre du cercle :", cercle.perimetre().toFixed(2)); // Arrondi à 2 décimales
console.log("Aire du cercle :", cercle.aire().toFixed(2)); // Arrondi à 2 décimales