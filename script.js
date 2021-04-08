var age = 18;
var isFemale = true;
var driverStatus = 'geen bob';

if (age > 17) {
    if (isFemale) {
        if (driverStatus == 'bob') {

            console.log("Vrouwen die", age, "jaar en ouder zijn en kunnen terug rijden zijn van harte welkom");
        }
        else {
            console.log("Je hebt aangegeven" , age, "jaar te zijn en dus oud genoeg \nmaar ook geen Bob te zijn en dan kan je dus niet naar huis. \nWe zien je graag een andere keer terug")
        }
        }
    else {
        console.log("Helaas; je bent wel", age, "jaar, maar geen vrouw. \nWe zien je graag een andere keer terug")
    } 
} 
else {
console.log("Jouw leeftijd is:", age, "en dat is helaas niet oud genoeg voor dit feestje");
}

