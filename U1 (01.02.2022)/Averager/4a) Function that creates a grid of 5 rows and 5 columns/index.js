"use strict";


/*

The console is quite powerful
You can for instance call a function that you have defined
in your JS-file from the console. Check the video.

*/

// function testConsole (p1) {
//   document.querySelector("body").style.backgroundColor = p1;
// }


/*

Exercise
Code a function F25 that fills a 5x5 grid with random numbers.
F25 must take one parameter: container. This is the reference to the HTML-element
that is the grid to which all the random numbers will be appended.


We have already done something like this in a previous exercise (Lektion 3, 4a).
You need however to place it in a function and you need to use the parameter
when appending the numbers (the divs that contain the numbers) to the gridContainer.

Test the function by calling it from the console.

VIDEO:  Record a video where you explain how F25 works line by line. Max 3 minutes.
        This video must be called F25Explanation.
        The video must also show how you call F25 from the console.

*/

function F25 (container) {
  
  for (let i = 0 ; i < 25 ; i++) {
    let grid = document.querySelector(container);
    let e = document.createElement("div"); 
    grid.appendChild(e);
    e.innerHTML = randomNumber(100);
  }
  function randomNumber ( max ) {
    return Math.floor( max * Math.random() );
  }
}

// F25("#gridContainer");

//Jag har deklarerat en funktion (F25) som tar emot parametern "container". 
//Inuti min F25 itererar jag en for-loop där jag deklarerar min counter (i) till att ha värde = 0. 
//Loopen ska iterera så länge countern är mindre än 25 och countern inkrementeras med i = i + 1 för varje iteration. 
//I min loop deklarerar jag en variabel (grid) och assignar värdet document.querySelector(container) till den, för att senare kunna styra
//vad som ska pekas ut i HTML-dokumentet, i detta fall är det gridContainer - som ska användas senare. 
//Jag deklarerar även variabeln "e" och assignar värdet document.createElement("div") till den, för att kunna skapa mina div:ar i min grid, 
//och använder mig sedan av grid.appendChild(e) för att koppla ihop mina skapade div:ar till grid:en de ska ligga i (container).
//Därefter e.innerHTML assignas till randomNumber(100) för att kunna koppla ihop innehållet i div:arna med en funktion som senare ska 
//generera random numbers (100 nummer). 
//Till sist deklarerar jag funktionen randomNumber. Den här funktionen kommer returnera ett random nummer mellan 0 och 99 - eftersom 0 är
//inklusiv och max är exklusiv varje gång den anropas. 
//Eftersom jag inte anropar funktionen direkt i koden så använder jag istället console:n för att kunna anropa den därifrån, vilket fungerar
//eftersom jag definerat den här. 
