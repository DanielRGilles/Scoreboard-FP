// import functions and grab DOM elements
const cowEl = document.getElementById('cow-score');
const soonEl = document.getElementById('soon-score');
const cowBtnEl = document.getElementById('cowboy');
const soonBtnEl = document.getElementById('sooner');

// initialize state
let cowScore = 0;
let soonScore = 0;
// set event listeners
cowBtnEl.addEventListener('click', () => {
    cowScore = cowScore + 7;
    // console.log(cowScore);

    cowEl.textContent = cowScore;
});
soonBtnEl.addEventListener('click', () => {
    soonScore = soonScore + 7;
  // console.log(soonScore);
  
    soonEl.textContent = soonScore;
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
