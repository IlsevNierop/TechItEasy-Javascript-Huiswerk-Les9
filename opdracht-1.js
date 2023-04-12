// Opdracht 1 - Array Methoden


// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
// via de map methode een nieuwe array gemaakt met alle tv-types
const tvTypes = inventory.map((inventory) => {return inventory.type});
console.log(tvTypes);

//     Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
// door de filter methode te gebruiken - en als de originalStock - sold === 0 --> dan is het uitverkocht

const soldOutTvs = inventory.filter((inventory) => {return (inventory.originalStock - inventory.sold )=== 0});
console.log(soldOutTvs);

//BONUS:
//bovenstaande in functie plaatsen
function showSoldOutTvs (tvArray) {
    const soldOutTvs = tvArray.filter((inventory) => {return (inventory.originalStock - inventory.sold )=== 0});
    generateDetailsTvs(soldOutTvs);
}
//button click event listener aanmaken met een functie die parameter verwacht.
const buttonSoldOutTvs = document.getElementById('soldout-tvs-button');
buttonSoldOutTvs.addEventListener('click', () => {
    showSoldOutTvs(inventory);
});


// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
// filter - inventory.options.ambiLight

const tvsAmbiLight = inventory.filter((inventory) => {return inventory.options.ambiLight});
console.log(tvsAmbiLight);

//BONUS
//bovenstaande in functie plaatsen
function showAmbiLightTvs (tvArray) {
    const tvsAmbiLight = tvArray.filter((inventory) => {return inventory.options.ambiLight});
    generateDetailsTvs(tvsAmbiLight);
}
//button click event listener aanmaken met een functie die parameter verwacht.
const buttonAmbiLight = document.getElementById('ambilight-tvs-button');
buttonAmbiLight.addEventListener('click', () => {
    showAmbiLightTvs(inventory);
});

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

// maak nieuwe array via map methode - kloon van de originele. En de nieuwe array sorteren op prijs: inventory.price
//
// const newInventory = inventory.map((inventory) => {
//     return inventory
// });
// newInventory.sort((a,b) => a.price - b.price);
// console.log(newInventory);

//BONUS
//bovenstaande in functie stoppen:

function sortTVPrice (tvArray) {
    const newInventory = tvArray.map((inventory) => {
        return inventory
    });
    newInventory.sort((a, b) => a.price - b.price);
    generateDetailsTvs(newInventory);
}

//button click event listener aanmaken met een functie die parameter verwacht.
const buttonSortPrice = document.getElementById('sort-price-button');
buttonSortPrice.addEventListener('click', () => {
    sortTVPrice(inventory);
});


//reset button toegevoegd

const buttonReset = document.getElementById('reset-button');
buttonReset.addEventListener('click', () => {
    generateDetailsTvs(inventory);
});

