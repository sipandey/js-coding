/**
 * This function helps us control how often something happens.
 *
 * It's like having a traffic light. When it's green, you can do something.
 * But when it's red, you have to wait until it turns green again.
 *
 * We use this function to make sure that our code doesn't run too fast.
 */
function throttle(callback, limit) {
    let ready = true;

    return function(...args) { 
        if(!ready) return;
        
        ready = false;

        setTimeout(() => {
            ready = true;
        }, limit); 

        callback(...args);
    };
}

module.exports = {
    throttle
};