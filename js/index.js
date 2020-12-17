// Various quotes from 10 different people
const quotes = [
    {img: "abraham_lincoln.jpg", 
    author: "Abraham Lincoln", 
    quote: "At what point then is the approach of danger to be expected? I answer, if it ever reach us, it must spring up amongst us. It cannot come from abroad. If destruction be our lot, we must ourselves be its author and finisher. As a nation of freemen, we must live through all time, or die by suicide."},
    {img: "albert_einstein.jpg",
    author: "Albert Einstein",
    quote: "I have no special talent.  I am only passionately curious."},
    {img: "benjamin_franklin.jpg",
    author: "Benjamin Franklin",
    quote: "Those that can give up essential liberty to gain a little temporary safety deserve neither liberty nor safety."},
    {img: "george_washington.jpg",
    author: "George Washington",
    quote: "The liberty enjoyed by the people of these States of worshipping Almighty God, agreable to their consciences, is not only among the choicest of their blessings, but also of their rights."},
    {img: "isaac_newton.jpg",
    author: "Sir Isaac Newton",
    quote: "If I have seen further than others, it is by standing upon the shoulders of giants."},
    {img: "james_madison.jpg",
    author: "James Madison",
    quote: "That religion, or the duty which we owe to our CREATOR, and the manner of discharging it, can be directed only by reason and conviction, not by force or violence; and therefore, all men are equally entitled to the free exercise of religion, according to the dictates of conscience; and that it is the mutual duty of all to practise Christian forbearance, love, and charity; towards each other."},
    {img: "mark_twain.jpg",
    author: "Mark Twain",
    quote: "Whenever you find yourself on the side of the majority, it is time to pause and reflect."},
    {img: "samuel_adams.jpg",
    author: "Samuel Adams",
    quote: "A general Dissolution of Principles & Manners will more surely overthrow the Liberties of America than the whole Force of the Common Enemy."},
    {img: "sir_winston_churchill.jpg",
    author: "Sir Winston Churchill",
    quote: "Success is the ability to go from one failure to another with no loss of enthusiasm."},
    {img: "thomas_alva_edison.jpg",
    author: "Thomas Alva Edison",
    quote: "Genius is one percent inspiration, ninety-nine percent perspiration."}
    ];

// Randomly displays image, author, quote in specified html elements
function setQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);

    $("#avatar").attr("src", "images/" + quotes[randomNumber].img);
    $("#text").html('"' + quotes[randomNumber].quote + '"');
    $("#author").html("-" + quotes[randomNumber].author);
}

// When page is loaded, display a random quote
setQuote();

// Button generates a random new quote
$("button").on("click", function() {setQuote()});

// Get the current date
var date = new Date();
// Get full year
var year = date.getFullYear();

// Display attribution and current copyright
$("#attribution-copyright").html("Designed by Ben Rietman, Copyright " + year);




