```javascript
function myFunc(a, b) {
  if (a === undefined || b === undefined) {
    return 0; // Handle undefined inputs
  }
  // ... rest of the function
}

myFunc(1); // This will execute without error, but may return unexpected results depending on the implementation of the rest of the function. 
```