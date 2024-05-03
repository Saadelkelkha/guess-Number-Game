let numrondom = Math.floor(Math.random() * 10);
let essais = 0;
let nombre;

do {
            nombre = prompt("Devinez le nombre entre 0 et 9:");
            essais++;
            if (nombre < numrondom) {
                alert("Le nombre à trouver est plus grand.");
            } else if (nombre > numrondom) {
                alert("Le nombre à trouver est plus petit.");
            }
} while (nombre != numrondom);

alert("Bravo! Vous avez trouvé le nombre en " + essais + " essais.");