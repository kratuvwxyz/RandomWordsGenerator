/* click and copy function */
clickCopy = (event) => {
    let el = $("<textarea></textarea>");
    let elId = "#" + event.target.id;
    let text = $(elId).text();
    $(el).val(text);
    $("#app").append(el);
    $(el).select();
    document.execCommand("copy");
    $(el).remove();
};

/* camel case string generator function */
function camelize(str) {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, "");
}

/* random number generator between minimum number and maximum number */
function randombetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/* random array shuffle function */
function randomArrayShuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

/* tooltip */
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

/* audio */
let audio = document.getElementById("audio");

/* button */
function timeButton(a, b, c, f, d, e, g, h, i, j) {
    $(a)
        .text(b)
        .addClass(c)
        .css(d, e)
        .css(g, h)
        .css(i, j)
        .click((event) => {
            if (f === true) {
                clickCopy(event);
                audio.play();
            }
        });
}

// =======================================================================================================
// =======================================================================================================
// Random Words Generator
// =======================================================================================================
// =======================================================================================================

const thousandNoun =
    "ability absence abuse access accident accommodation account acid act action activity addition address administration adult advance advantage advice afternoon age agency agent agreement agriculture aid aim air aircraft alan alternative amount analysis animal answer appeal appearance application appointment approach approval area argument arm army arrival art article artist aspect assembly assessment assistance association atmosphere attack attempt attention attitude audience author authority autumn average award awareness baby back background bag balance ball band bank bar base basis bath battle beach beauty bed bedroom behalf behaviour belief benefit bill bird birth bishop block blood board boat bob body book border bottle bottom box boy brain branch bread break breakfast breath bridge brother brown budget bus bush business cabinet call campaign cancer candidate capacity capital captain car card care career cash castle cat cause cell centre century chain chair chairman challenge championship chance chancellor change channel chapter character charge charity chest chief child china choice christ church city claim clause client club coal coast code coffee collection college colour combination command commission commitment committee communication community company comparison competition computer concentration concept concern conclusion condition conference confidence conflict congress connection consequence consideration constitution construction consumer contact content context contract contrast contribution control convention conversation copy core corner corporation cost council country countryside county couple course court cover creation credit crime crisis criticism cross crowd crown culture cup currency curriculum customer dad damage danger date daughter day deal death debate debt decade decision decline defence definition degree delivery demand democracy department deputy description design desire desk detail development diet difference difficulty dinner direction director discipline discussion disease display distance distinction distribution district division doctor document dog door doubt drama dream dress drink drive driver drug duty earth east economy edge editor education effect efficiency effort election electricity element emergency emphasis empire employment end energy engine english enterprise entry environment equipment error establishment estate evidence examination example exchange executive exercise exhibition existence expansion expenditure experience expert explanation expression extension extent eye face fact factor factory failure faith fall family farm fashion father favour fear feature field figure file film finance fire firm fish flat flight floor flow focus food foot football force forest form formation foundation framework frank freedom friend front fruit fuel fun fund furniture future gallery game gap garden gas gate general generation gentleman girl glass goal god gold golf government graham grant grass green group growth guide gun guy hair half hall hand head health heart heat height hell help henry hill history hole holiday home hope horse hospital hotel hour house household husband ice idea identity image impact importance impression improvement incident income increase independence index individual industry inflation influence information initiative injury inquiry instance institute institution insurance intelligence intention interest interpretation interview introduction investigation investment involvement iron island issue item jack jane japan job joe john jones journey judge justice key kind king kingdom kitchen knowledge labour lack lady lake land lane language law lead leader leadership league lee leg legislation length letter level lewis liability library licence life lifespan light limit line link list literature loan location look lord loss lot love lunch machine magazine maintenance major majority man management manager manchester manner map march mark market marriage martin mary mass master match material may meal measure meat member membership memory message metal method middle mike milk mill mind minister ministry minority minute mirror miss mistake model moment money month morning mother motion motor mountain mouth move movement mum murder museum music name nation nature neck need network news newspaper night noise north northern nose note notice notion object occasion offence offer office officer oil operation opinion opportunity opposition option order organisation organization other outcome output owner oxford page pain pair palace panel paper parent parish park parliament part partner partnership party passage past path patient pattern paul pay payment peace pension performance period person peter phase philosophy phone picture piece place plan plane plant plastic plate play player pleasure point police policy pollution pool population port position possibility post potential pound power practice presence present president press pressure price prince principle priority prison problem procedure process product production professor profit program programme progress project property proportion proposal protection provision pub public publication purpose quality quarter queen question race radio rail railway rain range rate reaction reader reality reason recession recognition record recovery reduction ref reference reform regime region relation relationship release relief religion report representation republic reputation request research resistance resolution respect response responsibility rest restaurant result retirement revenue review revolution right ring rise risk river road rock role roof room round route row rugby rule run safety sale sample scale scene scheme school science scope screen sea search season seat second secretary section sector security selection self sense sentence sequence series service session set settlement sex shape share sheet ship shock shop shoulder show side sight sign significance silence silver simon sir sister site situation size skill skin sky sleep smile smith snow society software soil solution son song sort sound source south space speaker specialist species speech speed spirit spokesman sport spot spring square st staff stage standard star start state statement station status steel step stock stone store strategy street strength stress strike structure struggle student study stuff style subject success sugar sum summer sun supply support surface surprise survey system table talk tape target task tax taylor tea teacher team technique technology telephone television temperature term test text thatcher theatre theme theory thing threat time title tom tone tony top total touch tour town track trade tradition traffic train transfer transport travel treatment treaty tree trial trip trouble trust truth turn tv type un uncle unemployment union unit university us use user valley value van variety vehicle version victim victory video view village violence vision visit voice volume vote walk wall war waste water way wealth weather week weekend weight welfare west white whole wife will wind window wine winter woman wood word work worker world writer year youth";

// selection of words
let words = thousandNoun;

// find words thorough character sizes
const a3 = words
    .replace(/(\b(\w{1,2})\b(\s|$))/g, "")
    .replace(/(\b(\w{4,20})\b(\s|$))/g, "")
    .split(" ");
const a4 = words
    .replace(/(\b(\w{1,3})\b(\s|$))/g, "")
    .replace(/(\b(\w{5,20})\b(\s|$))/g, "")
    .split(" ");
const a5 = words
    .replace(/(\b(\w{1,4})\b(\s|$))/g, "")
    .replace(/(\b(\w{6,20})\b(\s|$))/g, "")
    .split(" ");
const a6 = words
    .replace(/(\b(\w{1,5})\b(\s|$))/g, "")
    .replace(/(\b(\w{7,20})\b(\s|$))/g, "")
    .split(" ");
const a7 = words
    .replace(/(\b(\w{1,6})\b(\s|$))/g, "")
    .replace(/(\b(\w{8,20})\b(\s|$))/g, "")
    .split(" ");
const a8 = words
    .replace(/(\b(\w{1,7})\b(\s|$))/g, "")
    .replace(/(\b(\w{9,20})\b(\s|$))/g, "")
    .split(" ");
const a9 = words
    .replace(/(\b(\w{1,8})\b(\s|$))/g, "")
    .replace(/(\b(\w{10,20})\b(\s|$))/g, "")
    .split(" ");
// run the function first time
let drowCheck, drow;

// randomly create array
// a = r1 min, b = r1 max, c = r2 min, d = r2 max, e = r3 min, f = r3 max, max = no more than this number to show, total = total characters
function fourArray(a, b, c, d, e, f, max, total) {
    let r1 = randombetween(a, b);
    let r2 = randombetween(c, d);
    let r3 = randombetween(e, f);
    let x = r1 + r2 + r3;
    let r4 = total - x > max ? max : total - x;
    let items = [r1, r2, r3, r4];
    return randomArrayShuffle(items);
}

// using an array getting correct word
function createRandomWord() {
    let x = fourArray(3, 5, 4, 6, 5, 7, 9, 20);
    let y = [];
    for (let i = 0; i < x.length; i++) {
        let z = x[i] === 3 ? a3[Math.floor(Math.random() * a3.length)] : x[i] === 4 ? a4[Math.floor(Math.random() * a4.length)] : x[i] === 5 ? a5[Math.floor(Math.random() * a5.length)] : x[i] === 6 ? a6[Math.floor(Math.random() * a6.length)] : a7[Math.floor(Math.random() * a7.length)];
        // let z = x[i] === 3 ? a3[Math.floor(Math.random() * a3.length)] : x[i] === 4 ? a4[Math.floor(Math.random() * a4.length)] : x[i] === 5 ? a5[Math.floor(Math.random() * a5.length)] : x[i] === 6 ? a6[Math.floor(Math.random() * a6.length)] : x[i] === 7 ? a7[Math.floor(Math.random() * a7.length)] : x[i] === 8 ? a8[Math.floor(Math.random() * a8.length)] : a9[Math.floor(Math.random() * a9.length)];
        y.push(z);
    }
    return y.join(" ");
    // return camelize(y.join(" "));
}

// generate random words
function generateRandomWords() {
    do {
        drow = createRandomWord();
    } while (drow.length <= 22 || drow.length >= 24);
    timeButton("#section9", drow, "btn btn-warning btn-lg btn-block", true, 'font-size', '5vw', 'font-family', 'monospace', 'text-shadow', '.0375em .0375em #ffffff66');
    timeButton("#section11", camelize(drow), "btn btn-info", true, 'font-family', 'monospace', 'text-shadow', '.0375em .0375em #ffffff66');
}

generateRandomWords();