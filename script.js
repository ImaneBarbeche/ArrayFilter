const heroes = [
    { name: "Spider-Man", power: 85, universe: "Marvel", isActive: true, isAlien: false },
    { name: "Batman", power: 80, universe: "DC", isActive: false, isAlien: false },
    { name: "Wonder Woman", power: 90, universe: "DC", isActive: true, isAlien: true },
    { name: "Iron Man", power: 88, universe: "Marvel", isActive: true, isAlien: false },
    { name: "Captain Marvel", power: 95, universe: "Marvel", isActive: false, isAlien: true },
    { name: "Flash", power: 78, universe: "DC", isActive: true, isAlien: false },
    { name: "Thor", power: 92, universe: "Marvel", isActive: true, isAlien: true },
    { name: "Green Lantern", power: 83, universe: "DC", isActive: true, isAlien: true },
    { name: "Black Panther", power: 87, universe: "Marvel", isActive: false, isAlien: false },
    { name: "Martian Manhunter", power: 91, universe: "DC", isActive: true, isAlien: true }
    ];


// const result = heroes.filter((hero) => hero.isActive); : ici, dans la parenthèse on peut écrire n'importe quelle valeur 
// en restant compréhensible bien sur. Il n'est donc pas nécessaie de nommer ceci comme notre constante plus haut

//🔥 Challenge 1 :
//👉 Récupère tous les héros **actifs**.

const result = heroes.filter((hero) => hero.isActive);
console.log(result)

//⚡ Challenge 2 :
//👉 Récupère tous les héros de l’univers **Marvel**.

const result1 = heroes.filter((hero) => hero.universe === "Marvel");
console.log(result1)

//🧬 Challenge 3 :
//👉 Récupère tous les **héros extraterrestres** (`isAlien === true`).

const result2 = heroes.filter((hero) => hero.isAlien === true);
console.log(result2)

//🥊 Challenge 4 :
//👉 Récupère tous les héros ayant une puissance **supérieure ou égale à 90**.

const result3 = heroes.filter((hero) => hero.power >= 90);
console.log(result3)

//🎭 Challenge 5 :
//👉 Récupère tous les **héros humains et actifs**.

const result4 = heroes.filter((hero) => hero.isActive === true && hero.isAlien === false);
console.log(result4)

//🌌 Challenge 6 :
//👉 Récupère les **héros actifs de l’univers DC avec une puissance ≥ 85**.

const result5 = heroes.filter((hero) => hero.isActive === true && hero.universe === "DC" && hero.power >= 85);
console.log(result5)

//💣 Challenge 7 :
//👉 Récupère tous les héros **inactifs ET non extraterrestres**.

const result6 = heroes.filter((hero) => hero.isActive === false && hero.isAlien === false);
console.log(result6)

//🧠 Challenge 8 :
//👉 Récupère les héros dont **le nom contient “man”** (insensible à la casse).
//(Ex. Spider-Man, Batman, Martian Manhunter…)

const result7 = heroes.filter((hero) => hero.name.toLowerCase().includes('man'));
console.log(result7)



//🧪 Challenge 9 :
//👉 Récupère les héros **dont la puissance est impaire**.

const result8 = heroes.filter((hero) => hero.power % 2 !== 0); // %2 !==0 cherche les nombres impairs, %2 === 0 cherche les nombre pairs
console.log(result8)



//🧞‍♂️ Challenge 10 :
//👉 Récupère les **héros dont le nom fait plus de 10 caractères

const result9 = heroes.filter((hero) => hero.name.length > 10);
console.log(result9)