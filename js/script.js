let quotes = [
  {
    quote: `If you ever speak to me in Spanish, please use the formal 'usted.'`,
    source: `April Ludgate`,
    citation: `"Jerry's Painting"`,
    year: `Season 3, Episode 11`,
  },
  {
    quote: `Just remember, every time you look up at the moon, I, too, will be looking at a moon. Not the same moon, obviously. That's impossible.`,
    source: `Andy Dwyer`,
    citation: `"Filibuster"`,
    year: `Season 6, Episode 5`,
  },
  {
    quote: `Sometimes you gotta work a little so you can ball a lot.`,
    source: `Tom Haverford`,
    citation: `"Ben's Parents"`,
    year: `Season 5, Episode 6`,
  },
  {
    quote: `I'm going to tell you all of my secrets: I once forgot to brush my teeth for five weeks. I didn't actually sell my car, I just forgot where I parked it. I don't know who Al Gore is and at this point I'm too afraid to ask. When they say 2% milk I don't know what the other 98% is. When I was a baby my head was so big scientists did experiments on me. I once threw a beer at a swan and then it attacked my niece, Rebecca.`,
    source: `Andy Dwyer`,
    citation: `"New Slogan"`,
    year: `Season 6, Episode 15`,
  },
  {
    quote: `No matter what I do, literally nothing bad can happen to me. I'm like a white male U.S. Senator.`,
    source: `Leslie Knope`,
    citation: `"Fluoride"`,
    year: `Season 6, Episode 7`,
  },
  {
    quote: `No soup in the Benz.`,
    source: `Donna Meagle`,
    citation: `"Pawnee Rangers"`,
    year: `Season 4, Episode 4`,
  },
  {
    quote: `It's like I always say. When life give you lemons, you sell some of your grandma's jewelry and go clubbing.`,
    source: `Jean-Ralphio`,
    citation: `"London"`,
    year: `Season 6, Episode 1`,
  },
  {
    quote: `I really only listen to, like, German Death Reggae and Halloween sound effects records from the 1950s. And Bette Midler. Obviously.`,
    source: `April Ludgate`,
    citation: `"Swing Vote"`,
    year: `Season 5, Episode 21`,
  },
  {
    quote: `I'm allergic to sushi. Every time I eat more than 80 sushis, I barf.`,
    source: `Andy Dwyer`,
    citation: `"Ron and Diane"`,
    year: `Season 5, Episode 9`,
  },
  {
    quote: `Treat yo'self!`,
    source: `Tom Haverford and Donna Meagle`,
    tag: `Classic Quote`,
  },
  {
    quote: `I have no idea what I'm doing, but I know I'm doing it really, really well.`,
    source: `Andy Dwyer`,
  },
  {
    quote: `Just give me all the bacon and eggs you have. Wait, wait. I worry what you just heard was, "give me a lot of bacon and eggs." What I said was, "give me all the bacon and eggs you have." Do you understand?`,
    source: `Ron Swanson`,
  },
  {
    quote: `I made my money the old fasioned way - I got run over by a Lexus.`,
    source: `Jean-Ralphio`,
  },
  {
    quote: `One time my refrigerator stopped working. I didn't know what to do. I just moved.`,
    source: `Tom Haverford`,
  },
  {
    quote: `Time is money, money is power, power is pizza, pizza is knowledge. Let's go!`,
    source: `April Ludgate`,
  },
  {
    quote: `I'll have a glass of your most expensive red wine mixed with a glass of your cheapest white wine served in a dog bowl. Silly straws all around, please.`,
    source: `April Ludgate`,
  },
  {
    quote: `I tried to make ramen in the coffee pot and I broke everything.`,
    source: `Andy Dwyer`,
    epName: `"Comeback Kid"`,
    epNum: `Season 4`,
  },
  {
    quote: `April is the best. But she's 20. When April was born, I was already in the third grade, which means if we were friends back then, I would have been hanging out with a baby. I don't know anything about infant care. My god, I could have killed her.`,
    source: `Andy Dwyer`,
  },
  {
    quote: `When I get bummed out, I take my shirt off because the bad feelings make me feel sweaty.`,
    source: `Andy Dwyer`,
  },
  {
    quote: `Did you know that the food you eat becomes energy? Boom! That's spaghetti. Nachos. That's a cookie.`,
    source: `Andy Dwyer`,
  },
  {
    quote: `I once ate a Twix with the wrapper on it and I've never seen the wrapper come out.`,
    source: `Andy Dwyer`,
  },
];

let previousNumber;

/**
 * Accesses and returns an object from the quotes array at random. Will not return the same object twice in a row.
 *
 * @returns {object} an object from the quotes array.
 */
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  while (previousNumber === randomNumber) {
    randomNumber = Math.floor(Math.random() * quotes.length);
  }
  previousNumber = randomNumber;
  let selectedQuote = quotes[randomNumber];
  return selectedQuote;
}

/** Generates a random rbg color to be used as a background color.
 *
 * @returns {string} an rgb encoded color string.
 */
function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let randomColor = `rgb(${red}, ${green}, ${blue})`;
  return randomColor;
}

/**
 *
 * Renders a randomly generated quotes to the page and updates the background color to a randomly generated rgb color.
 */
function printQuote() {
  let randomQuote = getRandomQuote();
  let myString = `<p class="quote">${randomQuote.quote}</p> <p class="source">${randomQuote.source}`;
  if (randomQuote.citation) {
    myString += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    myString += `<span class="year">${randomQuote.year}</span>`;
  }
  if (randomQuote.tag) {
    myString += `, ${randomQuote.tag}`;
  }
  myString += `</p>`;
  // code adapted from w3schools: https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp:
  document.body.style.backgroundColor = getRandomColor();
  document.getElementById("quote-box").innerHTML = myString;
}

/**
 *
 * Auto refreshes the page and renders a new random quote every 10 seconds.
 */
setInterval(printQuote, 20000);

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
