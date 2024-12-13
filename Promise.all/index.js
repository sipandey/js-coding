function customPromiseAll(promises) {
    // Step 1: Create a new promise that we will resolve or reject later
    return new Promise((resolve, reject) => {
      // Step 2: Create an array to store the results of the promises
      const results = [];
      
      // Step 3: Keep track of how many promises have been successfully resolved
      let completed = 0;
  
      // Step 4: Loop through the array of promises
      promises.forEach((promise, index) => {
        // Convert any non-promise values into promises (so they act the same)
        Promise.resolve(promise)
          .then((value) => {
            // If the promise resolves, store its value in the results array at the correct position
            results[index] = value;
            completed++;
  
            // If all promises have resolved, resolve the main promise with the results array
            if (completed === promises.length) {
              resolve(results);
            }
          })
          .catch((error) => {
            // If any promise rejects, immediately reject the main promise
            reject(error);
          });
      });
  
      // Step 5: Handle the case where the input array is empty
      if (promises.length === 0) {
        resolve([]);
      }
    });
  }
  
  // Example usage:
  const p1 = Promise.resolve(1); // A promise that will resolve with 1
  const p2 = Promise.resolve(2); // A promise that will resolve with 2
  const p3 = Promise.resolve(3); // A promise that will resolve with 3
  
  // Using our custom Promise.all implementation
  customPromiseAll([p1, p2, p3])
    .then((results) => console.log("Resolved:", results)) // Expected: [1, 2, 3]
    .catch((error) => console.log("Rejected:", error));
  
  const p4 = Promise.reject("Error"); // A promise that will reject with "Error"
  
  // Example where one promise rejects
  customPromiseAll([p1, p4, p3])
    .then((results) => console.log("Resolved:", results))
    .catch((error) => console.log("Rejected:", error)); // Expected: Rejected: Error
  