//Le premier élément est 23

//Le deuxième élément est 42

//Tous les éléments suivants sont la somme des 2 éléments précédents, à laquelle on retire 1 si cette somme est paire

//Le nombre de Vitruve correspondrait au trentième élément de cette suite.

// 23 / 42 /  ->(23+42 = 65)  / ->(42+65 = 107) / ->(65+107 = 172) donc -1(171) car paire etc...

const array = [23, 42];

//récupere le dernier nombre
array[array.length - 1];
//récupere l'avant-dernier nombre
array[array.length - 2];

let total = 0;
let n = 0;

// calcule la somme des 2 éléments précédents
while (n < 28) {
	total = array[array.length - 1] + array[array.length - 2];

	//vérifie si le total est un nombre paire, si le cas échéant on retire 1
	if (total % 2 == 0) {
		console.log("paire");
		total = total - 1;
	} else {
		console.log("impaire");
	}
	// ajout du résultat à la fin du tableau
	array.push(total);

	n++;
}

console.log(array);
console.log(
	"le nombre de Vitruve correnspondrait avec ce nombre :" + array[29]
);
