function moveDodgerLeft() {
  const dodger = document.getElementById('dodger'); // get element when function runs
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = (left - 10) + 'px';
  }
}

function moveDodgerRight() {
  const dodger = document.getElementById('dodger'); // get element here too
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = (left + 10) + 'px';
  }
}

module.exports = {
  moveDodgerLeft,
  moveDodgerRight
};
