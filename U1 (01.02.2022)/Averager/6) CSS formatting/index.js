'use strict'

/*

Use a CSS-file to make the grid, the input fields, the results and the button look nice.
You're free to format this as you want, but I expect some effort. See my intial video
to get a sense of the level of formatting expected.

*/

document.onload = gridMaker(
  document.querySelector('#grid'),
  document.querySelector('#inputRows').value,
  document.querySelector('#inputCols').value
)
window.onload = gridMaker(
  document.querySelector('#grid'),
  document.querySelector('#inputRows').value,
  document.querySelector('#inputCols').value
)

function functSelect (e) {
  e.classList.toggle('selected')
}

function createNumberDiv () {
  let e = document.createElement('div')
  e.innerHTML = randomNumber(100)
  e.addEventListener('click', function () {
    functSelect(e)
  })

  return e
}

function randomNumber (max) {
  return Math.floor(max * Math.random())
}

function gridMaker (gridContainer, R, C) {
  gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`
  gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`

  gridContainer.innerHTML = ''

  for (let c = 0; c < C; c++) {
    for (let r = 0; r < R; r++) {
      gridContainer.appendChild(createNumberDiv())
    }
  }
}

document.querySelector('button').addEventListener('click', function () {
  gridMaker(
    document.querySelector('#grid'),
    document.querySelector('#inputRows').value,
    document.querySelector('#inputCols').value
  )
})
