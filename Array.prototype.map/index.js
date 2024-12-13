Array.prototype.myMap = function (callback) {
    // Create an empty array to hold the new values we're about to transform
    const result = [];
    
    // Loop through the original array (which is `this` in this case)
    for (let i = 0; i < this.length; i++) {
      // Check if the current element exists on the array (to avoid weird behavior with "holes" in sparse arrays)
      if (this.hasOwnProperty(i)) {
        // Call the function (callback) with:
        // - this[i]: the current element in the array
        // - i: the current index in the loop
        // - this: the whole array (so the callback knows everything if it needs it)
        const transformedValue = callback(this[i], i, this);
  
        // Take the result of the callback and push it into our new array
        result.push(transformedValue);
      }
    }
  
    // Return the new array we built, full of transformed values
    return result;
  };


const numbers = [1, 2, 3];

// Use our custom myMap to double each number
const doubled = numbers.myMap((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6]