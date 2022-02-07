"use strict";


/*

We will continue with our work from 4b.
We need to fix these two things:

First:
gridMaker must be called each time the user clicks on the button (See index.html). */

function gridMaker (gridContainer, R, C) {
    gridContainer.style.height = "50vh";
    gridContainer.style.width = "50vh";
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
}

document.querySelector("button").addEventListener ("click", function () {
    gridMaker( document.querySelector("#grid"), document.querySelector("#inputRows").value, document.querySelector("#inputCols").value);
})

// gridMaker( document.querySelector("#grid"), 4, 4 );

/*
Second:
We now need to make sure that when we call (anropar) gridMaker we must use
the values in #inputRows and #inputColumns as arguments.

*/

