# Unhandled Undefined Function Parameters in Node.js

This repository demonstrates a common yet easily overlooked error in Node.js:  functions that don't handle undefined parameters gracefully.  This can lead to unexpected behavior or crashes, particularly if the function performs operations based on these parameters without checking for their presence or validity.

The `bug.js` file contains a sample function that showcases this issue, while `bugSolution.js` provides a corrected version.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`