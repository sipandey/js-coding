/**
 * Debounces a callback function to prevent it from being executed too fast.
 *
 * Imagine you're at a restaurant and you order food. If the chef comes out every second, 
 * your food will never be ready. But if they come out after a minute, then you'll have time 
 * to eat while they're cooking. That's basically what this function does!
 *
 * @param {function} callback - The thing you want to happen (like "make my coffee")
 * @param {number} wait - How long you want to wait before it happens (like 1 minute)
 * @returns {function} A new version of the thing that waits for a bit
 */
function debounce(callback, wait) {
    let timeoutId;

    return function() {
        // Clear any timer that was already set. This is like canceling your food order.
        clearTimeout(timeoutId); 
        
        // Set a new timer to make the thing happen after a while. This is like placing a new order.
        timeoutId = setTimeout(callback, wait); 
    };
}

module.exports = {
    debounce
};
