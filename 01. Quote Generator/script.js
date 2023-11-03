const synth = window.speechSynthesis;

let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let btn = document.querySelector("#new-quote");
let audioBtn = document.querySelector("#quote-audio");

// Quotes Array

const quotes = [
  {
    quote: `❝ The best way to find yourself is to lose yourself in the service of others. ❞`,
    author: `~ Mahatma Gandhi`,
  },
  {
    quote: `❝ If you want to live a happy life, tie it to a goal, not to people or things. ❞`,
    author: `~ Albert Einstein`,
  },
  {
    quote: `❝ At his best, man is the noblest of all animals; separated from law and justice he is the worst. ❞`,
    author: `~ Aristotle`,
  },
  {
    quote: `❝ Your time is limited, so dont waste it living someone else's life. ❞`,
    author: `~ Steve Jobs`,
  },
  {
    quote: `❝ Tell me and I forget. Teach me and I remember. Involve me and I learn. ❞`,
    author: `~ Benjamin Franklin`,
  },
  {
    quote: `❝ If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. ❞`,
    author: `~ Oprah Winfrey`,
  },
  {
    quote: `❝ it does not matter how slowly you go as long as you do not stop. ❞`,
    author: `~ Confucius`,
  },
  {
    quote: `❝ Our lives begin to end the day we become silent about things that matter. ❞`,
    author: `~ Martin Luther King, Jr.`,
  },
  {
    quote: `❝ Remember that not getting what you want is sometimes a wonderful stroke of luck. ❞`,
    author: `~ Dalai Lama`,
  },
  {
    quote: `❝ The journey of a thousand miles begins with one step. ❞`,
    author: `~ Lao Tzu`,
  },
];

// Event Listener to update Quote and it's auther once the button is clicked.
btn.addEventListener("click", () => {
  // Math.random() => Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
  // Math.floor() =>  Used to round a number down to the nearest integer that is less than or equal to the given number.
  let randomQuote = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[randomQuote].quote;
  author.innerText = quotes[randomQuote].author;
});

audioBtn.addEventListener("click", () => {
  // Create a new speech synthesis object which is a Web Speech API, represents a speech request
  let utterance = new SpeechSynthesisUtterance(
    `${quote.innerText} by ${author.innerText}`
  );

  // Use the Web Speech API synthesis object to read the text
  speechSynthesis.speak(utterance);
});
