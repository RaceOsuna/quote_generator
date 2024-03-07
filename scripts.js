let quote = document.getElementById('quote');
let author = document.getElementById('author');
let twitterButton = document.getElementById('twitter');
let getQuoteButton = document.getElementById('new-quote')
let quoteData = [];

function getRandomQuote() {
  const newQuote = quoteData[Math.floor(Math.random() * quoteData.length)]
  quote.textContent = newQuote.text;
  author.textContent = `${newQuote.author}` || "-Unknown";
}

async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    quoteData = await response.json();
    getRandomQuote();
  } catch (error) {
    console.log(error);
  }
}

//tweet quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`
  window.open(twitterUrl, '_blank')
}

//Event Listeners
getQuoteButton.addEventListener('click', getRandomQuote)
twitterButton.addEventListener('click', tweetQuote)

// on load
getQuotes()

