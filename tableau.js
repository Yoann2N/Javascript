let etudiant = "Paul"; // variable de type string
let etudiants = ["Jean", "Pierre", "Marie", "Lucie", "Paul", "Jacques"];  // variable de type tableau, initialisé avec une liste de chaine de caractères  

console.log(etudiant); // affiche "Paul"
console.log(etudiants); // affiche ["Jean", "Pierre", "Marie", "Lucie", "Paul", "Jacques"]

// afficher la taille du tableau
console.log("taille du tableau", etudiants.length); // affiche 6

console.log("premier élément du tableau", etudiants[0]); // affiche "Jean"
console.log("dernier élément du tableau", etudiants[etudiants.length - 1]); // affiche "Jacques"

// boucle pour afficher les éléments du tableau
for (let i = 0; i < etudiants.length; i++) {
    console.log("étudiant", etudiants[i]);
}

// ajouter un élément à la fin du tableau
etudiants.push("Julie");
console.log("taille du tableau", etudiants.length); // affiche 7
console.log(etudiants); // affiche ["Jean", "Pierre", "Marie", "Lucie", "Paul", "Jacques", "Julie"]

// supprimer le dernier élément du tableau
etudiants.pop();
console.log("taille du tableau", etudiants.length);
console.log(etudiants);

// ajouter un élément au début du tableau
etudiants.unshift("Julie");

// supprimer le premier élément du tableau
etudiants.shift();
