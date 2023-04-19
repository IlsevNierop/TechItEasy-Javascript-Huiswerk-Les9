// Opdracht 4 -Functies
// Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:
//
//     Philips 43PUS6504/12 - 4K TV
// €379,-
//     43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
// Opdracht 4a: Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
//

//arrow functie voor de variatie
const generateStringTV = (tvObject) => {
    return `${tvObject.brand} ${tvObject.type} - ${tvObject.name}`
};

// test
// console.log(generateStringTV({
//     type: 'NH3216SMART',
//     name: 'HD smart TV',
//     brand: 'Nikkei',
//     price: 159,
//     availableSizes: [32],
//     refreshRate: 100,
//     screenType: 'LED',
//     screenQuality: 'HD ready',
//     smartTv: true,
//     options: {
//         wifi: true,
//         speech: false,
//         hdr: false,
//         bluetooth: false,
//         ambiLight: false,
//     },
//     originalStock: 4,
//     sold: 4,
// }));

//     Opdracht 4b: Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.
//

// deze verwacht een object en niet een prijs als parameter - even uitgecomment en hieronder andere die alleen prijs verwacht - later weer actief gemaakt (zie beneden bij comments)
function generatePriceTV(tvObject) {
    return `€${tvObject.price},-`;
}

//
// console.log(generatePriceTV({
//     type: 'NH3216SMART',
//     name: 'HD smart TV',
//     brand: 'Nikkei',
//     price: 159,
//     availableSizes: [32],
//     refreshRate: 100,
//     screenType: 'LED',
//     screenQuality: 'HD ready',
//     smartTv: true,
//     options: {
//         wifi: true,
//         speech: false,
//         hdr: false,
//         bluetooth: false,
//         ambiLight: false,
//     },
//     originalStock: 4,
//     sold: 4,
// }));

// dit is de functie die de prijs als argument verwacht - dit toch uitgecomment - omdat er vanaf 4d met een object gewerkt moet worden, dus heb mijn eerst geschreven functie (van hierboven) gebruikt.
// function generatePriceTV(price) {
//     return `€${price},-`;}

//test
// console.log(generatePriceTV(130));

// Opdracht 4c: Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Let op: om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.
//

// availableSizes: [43, 50, 55, 58, 65],
function generateStringAvailableSizes(tvObject) {
    let stringAvailableSize = "";
    for (let i = 0; i < tvObject.availableSizes.length; i++) {
        stringAvailableSize += ` ${tvObject.availableSizes[i]} inch (${Math.round(tvObject.availableSizes[i] * 2.54)} cm)`;
        if (i !== tvObject.availableSizes.length - 1) {
            stringAvailableSize += " | ";
        }
    }
    return stringAvailableSize;
}

//test
// console.log(generateStringAvailableSizes({
//     type: 'QE55Q60T',
//     name: '4K QLED TV',
//     brand: 'Samsung',
//     price: 709,
//     availableSizes: [43, 50, 55, 58, 65],
//     refreshRate: 60,
//     screenType: 'QLED',
//     screenQuality: 'Ultra HD/4K',
//     smartTv: true,
//     options: {
//         wifi: true,
//         speech: true,
//         hdr: true,
//         bluetooth: true,
//         ambiLight: false,
//     },
//     originalStock: 7,
//     sold: 0,
// }));


//     Opdracht 4d: Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
//
//     Philips 43PUS6504/12 - 4K TV
// €379,-
//     43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)

// const detailsTV = document.getElementById("details-tv");
//
// detailsTV.innerHTML = `
// <h4>${generateStringTV(inventory[0])}</h4>
// <h5>${generatePriceTV(inventory[0])}</h5>
// <p>${generateStringAvailableSizes(inventory[0])}</p>`;


// Opdracht 4e: Maak een herbruikbare functie die de informatie van alle tv's weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.


function generateDetailsTvs(tvArray) {
    const detailsTV = document.getElementById("details-tv");
    // de details TV leegmaken als deze functie wordt aangeroepen, anders worden er bij het klikken van de button steeds meer TVs toegevoegd (ipv de weergave van de TVs veranderd)
    detailsTV.innerHTML = "";
    tvArray.map((tv) => {
        detailsTV.innerHTML += `
<article>
<h4>${generateStringTV(tv)}</h4>
<h5>${generatePriceTV(tv)}</h5>
<p>${generateStringAvailableSizes(tv)}</p>
</article>`;
    });
}

generateDetailsTvs(inventory);


