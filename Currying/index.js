function transformToSingleArgumentFunction(fn) {
    // Step 1: Return a function that will collect arguments one by one
    return function curried(...args) {
        // Step 2: Check if the original function has received all arguments
        if(args.length >= fn.length) {
            // Call the original function with the arguments if all are provided
            return fn(...args);
        } else {
            // Step 3: Otherwise, return a function that will accept the next argument
            return function(nextArg) {
                // Continue collecting arguments
                return curried(...args, nextArg);
            }
        }
    }
}

// Example usage:
function add(a, b, c) {
    return a + b + c;
  }
  
  const curriedAdd = transformToSingleArgumentFunction(add);
  
  console.log(curriedAdd(1)(2)(3)); // Output: 6