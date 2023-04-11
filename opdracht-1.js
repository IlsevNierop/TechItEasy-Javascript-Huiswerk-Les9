// Opdracht 1 - Array Methoden


// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
// via de map methode een nieuwe array gemaakt met alle tv-types
const tvTypes = inventory.map((inventory) => {return inventory.type});
console.log(tvTypes);

//     Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
// door de filter methode te gebruiken - en als de originalStock - sold === 0 --> dan is het uitverkocht

const soldOutTvs = inventory.filter((inventory) => {return (inventory.originalStock - inventory.sold )=== 0});
console.log(soldOutTvs);

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
// filter - inventory.options.ambiLight

const tvsAmbiLight = inventory.filter((inventory) => {return inventory.options.ambiLight});
console.log(tvsAmbiLight);

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.
// maak nieuwe array via map methode - kloon van de originele. En de nieuwe array sorteren op prijs: inventory.price

const newInventory = inventory.map((inventory) => {
    return inventory
});
newInventory.sort((a,b) => a.price - b.price);
console.log(newInventory);
