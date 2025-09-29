// Il nostro primo file JS!
// Il mestiere dello sviluppatore sw consiste nel RISOLVERE PROBLEMI.
// Un problema si risolve creando una serie ordinata di step: un ALGORITMO.
// Se il problema rimane lo stesso,applicando lo stesso algoritmo lo risolviamo
// ogni singola volta.

// Al fine di scrivere un algoritmo,sarà necessaria (quasi sempre) la creazione
// di VARIABILI.
//  Se volessimo creare una torta potremmo immaginare tute le bacinelle contenenti
// gli ingredienti come delle VARIABILI: sarà necessario mischiarle tra di loro
// secondo un determinato ordine al fine di ottenere il risultato sperato.

// VARIABILI
// Una VARIABILE in JS si dichiara con la parola chiave: "let"

let dog
// ho creato una variabile di nome "dog"
// il nome delle variabili è completamente a vostra scelta. Dovete solo fare attenzione
// a non cominciare il nome con un numero o un simbolo,seguendo la nomenclatura
// "camelCase"

let stefanoIsATeacher
// queste due variabili che ho appena creato hanno un contenuto
// che non è stato definito da nessuna parte: hanno un valore "undefined"
dog = "Fido" //questo è un valore STRINGA
// definire il "nome" o "valore" tra virgolette"" o apostrofi''

let numberOfFireworks
// dog qui vale "Fido"
// numberOfFireworks vale undefined
console.log("VALORE DI DOG", dog)
// un console.log() è un metodo per stampare un messaggio nella console del browser
// i console.log() sonop utili per stampare una riga di testo,un messaggio oppure
// per aprire una variabile e vederne il contenuto
console.log("quanto vale numberOfFireworks inizialmente", numberOfFireworks) //qui il valore è ancora undefined
numberOfFireworks = 18
console.log("quanto vale numberOfFireworks dopo", numberOfFireworks) //qui il valore adesso è 18

console.log("CIAO STEFANO")

numberOfFireworks = 56

numberOfFireworks = 99

// è anche possibile CREARE una variabile e ASSEGNARLE un valore in un colpo solo
let teacher = "Stefano" //la variabile NASCE con il valore di "Stefano"
teacher = "Giuseppino" // qui "let" non ci va perchè la variabile è già stata creata, le sto cambiando solo il valore

console.log(teacher)

// QUALI TIPI DI DATO ESISTONO IN JS?
// string ->"Stefano, "Fido", "Impariamo JS!"
// number -> 0, 100, 20, -3, 15.56
// boolean -> true, false
// undefined -> tipico di una VARIABILE inizializzata ma non ancora assegnata ad un valore
// null -> un valore completamente VUOTO, INESISTENTE, AZZERATO.

let = haiLaPatente = false
let myFavouriteNumber = 7
console.log(myFavouriteNumber)
myFavouriteNumber = 12
console.log("VALORE DI MYFAVNUMBER", myFavouriteNumber)

// QUESTE DUE RIGHE DANNO ERRORE
//favouriteColor = "red"
//let favouriteColor

// OPERATORI MATEMATICI
let n1 = 8
let n2 = 3 + 2 //5
let s1 = n1 + n2 // 13
console.log("il valore di s1 è", s1)

let n3 = 12.5
let n4 = 4.6
let s2 = n3 - n4 // 7.9

let n5 = 5 * 4 //20
let n6 = n5 / 5 // 4

// OPERATORE MODULO (%)
// il modulo è detto anche RESTO DELLA DIVISIONE
let n7 = 20 % 6 // 2
console.log("ESEMPIO MODULO", n7)

// CONCATENAZIONE STRINGHE
let str1 = "Ciao"
let str2 = "Stefano"
let res1 = str1 + str2
console.log("RES 1", res1) //"CiaoStefano"

let str3 = "Buongiorno"
let str4 = "Ragazzi"
let res2 = str3 + " " + str4
console.log("RES2", res2) //"Buongiorno Ragazzi"

// OPERATORI DI COMPARAZIONE
// < > <= >= ! === !==
let log1 = 7 < 8 //true
let log2 = 15 > 22 // false
let log3 = 3 < 3 // false
let log4 = 3 <= 3 // true
let log5 = !log4 //l'inverso di log4 , false
let log6 = 14 === 14 //si legge "14 uguale a 14" -> true
let log7 = 16 !== 23 //si legge "16 diverso da 23" -> true

let log8 = 14 === "14" //false,l'operatore === compara SIA il valore SIA il tipo
let bossFinale1 = "14" + "16" //"1416", NON 30!!!
let bossFinale2 = 14 + "16" //"1416", NON 30!!!
//  la somma funziona solamente se tutti gli addendi sono numeri!

let bossFinale3 = 15 + undefined
console.log("numero + undefined fa", bossFinale3)

// torniamo alla dichiarazione di variabili...
let myName = "Stefano"
const webAddress = "www.epicode.com" //variabile alla quale non si può più cambiare il suo valore
//webAddress = "www.google.com" //ERRORE!!!
// le variabili definite con LET permettono la loro riassegnazione ad un nuovo valore,
// le variabili definite con CONST non lo permettono! in italiano si definiscono "costanti"

// var
// var era una vecchia parola chiave per la dichiarazione di variabili
// non si usa più e oggi si utilizzano SOLAMENTE let e const!
// var aveva un problema: creava variabili con visibilità di FUNZIONE e non di BLOCCO
//favouriteCat = "Tom"
//var favouriteCat
// imparare a programmare così non serve a niente :(

// OPERATORI LOGICI (AND, OR)
let result1 = 15 > 10 //true
let result2 = 13 !== 25 //true

// ...però nella vita reale spesso abbiamo PIù circostanze/situazioni da verificare
// ed eventualmente combinare insieme

// ci sono situazione in cui TUTTE le verifiche devono dare esito positivo
let vadoAlMare
// vado al mare solamente se è bel tempo e se ho finito i compiti
let belTempo = true
let finitoICompiti = true
vadoAlMare = belTempo && finitoICompiti

// SPECCHIETTO AND &&
// true && true -> true
// false && true -> false
// true && false -> false
// false && false -> false

let finalResult1 = 14 <= 13 && 12 > 15 // false && false = false
let finalResult2 = 13 <= 13 && 10 > 5 // true && true = true
let finalResult3 = 10 === 10 && 34 < 5 //true && false > false

//SPECCHIETTO OR ||
// true || true -> true
// false || true -> true
// true || false -> true
// false || false -> false

// l'OR comanda quelle situazioni in cui su diverse condizioni basta che UNA sia
// vera per provocare un risultato di true
let vadoABallare
// vado a ballare se mia mamma mi ha lasciato l'auto o se Gianpietro mi passa a prendere
let macchinaDellaMamma = false
let gianMiPassaAPrendere = true

vadoABallare = macchinaDellaMamma || gianMiPassaAPrendere

let finalResult4 = 15 > 15 || true //false || true -> true
let finalResult5 = 16 % 2 === 0 || 12 < 10 //true || false -> true
