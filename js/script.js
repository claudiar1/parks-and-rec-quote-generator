let quotes = [
  {
    quote: `If you ever speak to me in Spanish, please use the formal 'usted.'`,
    source: `April Ludgate`,
    epName: `"Jerry's Painting"`,
    epNum: `Season 3, Episode 11`
  },
  {
    quote: `Just remember, every time you look up at the moon, I, too, will be looking at a moon. Not the same moon, obviously. That's impossible.`,
    source: `Andy Dwyer`,
    epName: `"Filibuster"`,
    epNum: `Season 6, Episode 5`
  },
  {
    quote: `Sometimes you gotta work a little so you can ball a lot.`,
    source: `Tom Haverford`,
    epName: `"Ben's Parents"`,
    epNum: `Season 5, Episode 6`
  },
  {
    quote: `I'm going to tell you all of my secrets: I once forgot to brush my teeth for five weeks. I didn't actually sell my car, I just forgot where I parked it. I don't know who Al Gore is and at this point I'm too afraid to ask. When they say 2% milk I don't know what the other 98% is. When I was a baby my head was so big scientists did experiments on me. I once threw a beer at a swan and then it attacked my niece, Rebecca.`,
    source: `Andy Dwyer`,
    epName: `"New Slogan"`,
    epNum: `Season 6, Episode 15`
  },
  {
    quote: `No matter what I do, literally nothing bad can happen to me. I'm like a white male U.S. Senator.`,
    source: `Leslie Knope`,
    epName: `"Fluoride"`,
    epNum: `Season 6, Episode 7`
  },
  {
    quote: `No soup in the Benz.`,
    source: `Donna Meagle`,
    epName: `"Pawnee Rangers"`,
    epNum: `Season 4, Episode 4`
  },
  {
    quote: `It's like I always say. When life give you lemons, you sell some of your grandma's jewelry and go clubbing.`,
    source: `Jean-Ralphio`,
    epName: `"London"`,
    epNum: `Season 6, Episode 1`
  },
  {
    quote: `I really only listen to, like, German Death Reggae and Halloween sound effects records from the 1950s. And Bette Midler. Obviously.`,
    source: `April Ludgate`,
    epName: `"Swing Vote"`,
    epNum: `Season 5, Episode 21`
  },
  {
    quote: `I'm allergic to sushi. Every time I eat more than 80 pieces, I throw up.`,
    source: `Andy Dwyer`,
    epName: `"Ron and Diane"`,
    epNum: `Season 5, Episode 9`
  },
  {
    quote: `Treat yo'self!`,
    source: `Tom Haverford and Donna Meagle`
  }
];

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let selectedQuote = quotes[randomNumber];
  return selectedQuote;
}

function printQuote() {
  let randomQuote = getRandomQuote();
  let myString = `<p class="quote">${randomQuote.quote}</p> <p class="source">${randomQuote.source}`;
  if (randomQuote.epName) {
    myString += `<span class="citation">${randomQuote.epName}</span>`;
  }
  if (randomQuote.epNum) {
    myString += `<span class="year">${randomQuote.epNum}</span>`;
  }
  myString += `</p>`;
  document.getElementById("quote-box").innerHTML = myString;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
