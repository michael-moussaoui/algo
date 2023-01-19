// https://developer.mozilla.org/fr/docs/Web/JavaScript

// Un commentaire sur une seule ligne

/* 
  commentaire sur plusieurs lignes
  commentaire sur plusieurs lignes
  commentaire sur plusieurs lignes
  */

/**
 * Create a person
 * @param {string} name - Nom de la personne
 * @param {number} age - Age de la personne
 */

function Person(name, age) {}
Person("Michael", 43);

console.log("hello world");
console.error("attention il y a une erreur");
console.warn("attention il y a un warning");

// Déclaration de variable

// var, let, const
const taux = 1.2;
const fruits = ["fraise", "pomme", "orange"];
console.table(fruits);

function ttc(priceht) {
	return priceht * taux;
}

// console.log(taux);
ttc(20);

//Types de variables

/*string
boolean
number
array
object
undefined
null*/

console.log(typeof taux);

const apprenant = {
	prenom: "michael",
	nom: "moussaoui",
	age: 43,
	stack: ["ruby", "perl", "c", "matlab"],
	isAdmin: false,
};
console.log(apprenant);

apprenant.sexe = "male";
delete apprenant.age;
console.log(apprenant);

//function

// function sayHello(name) {
// 	console.log(`Bonjour je m'appelle "${name}"`);
// }

const sayHello = (name) => {
	console.log(`Bonjour je m'appelle "${name}"`);
};

sayHello("michael");

//boucles

// for (let i = 1; i <= 10; i++) {
// 	console.log(i);
// }

let i = 1;
while (i <= 10) {
	console.log(i);
	i++;
}

apprenant.stack.forEach((toto) => {
	if (toto !== "php") {
		console.log("dommage pas de php");
	} else {
	}
	if (toto === "ruby") {
		console.log("super t'es engagé");
	}
	console.log(toto);
});
