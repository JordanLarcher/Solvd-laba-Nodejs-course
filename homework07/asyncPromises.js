// Task 1 
/**
 * Imitates the behaviour of Promise.replaceAll.
 * @param {Array<Promise>} promises - An array of promises.
 * @returns {Promise} 
 */


function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;
        const totalPromises = promises.length;


        if (totalPromises === 0) {
            resolve([]); // if the array is empty the promise is resolved inmediately 
            return;
        }

        promises.forEach((promise, index) => {
            // Verify that  we receive a promise 
            Promise.resolve(promise)
                .then(value => {
                    // save the reuslt in the right position 
                    results[index] = value;
                    completed++;

                    // If all promises are completed, then the principal promise is resolved
                    if (completed === totalPromises) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    // If any of the promises fail, the principal promise is inmediately rejected 
                    reject(error);
                })
        })
    })
}

const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
];

promiseAll(promises)
    .then(results => {
        console.log("All promises resolved:", results); // Expected: [1, 2, 3]
    })
    .catch(error => {
        console.error("At least one promise rejected:", error);
    });



// Task 2

/**
* Imitates Promise.allSettled().
* @param {Array<Promise>} promises - An array promises.
* @returns {Promise} 
*
*/

function promiseAllSettled(promises) {
    return new Promise(resolve => {
        const results = [];
        let settled = 0;
        const totalPromises = promises.length;

        if (totalPromises === 0) {
            resolve([]);
            return;
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = { status: 'fulfilled', value };
                })
                .catch(reason => {
                    results[index] = { status: 'rejected', value };
                })
                .finally(() => {
                    // finally will always be executed, either it is failed or sucessful
                    settled++;
                    if (settled === totalPromises) {
                        resolve(results);
                    }
                });
        });
    });
}

const promisesArray = [
    Promise.resolve(1),
    Promise.reject("Error occurred"),
    Promise.resolve(3)
];

promiseAllSettled(promisesArray)
    .then(results => {
        console.log("All promises settled:", results);
        // Expected: [{ status: 'fulfilled', value: 1 },
        //            { status: 'rejected', reason: 'Error occurred' },
        //            { status: 'fulfilled', value: 3 }]
    });


//Task 3 Implement Chaining of Promises as a Separate Function

/**
* Ejecuta un array de funciones que devuelven promesas de forma secuencial.
* @param {Array<Function>} functionsArray - Un array de funciones.
* @returns {Promise} Una promesa que se resuelve con el resultado de la última función.
*/

function chainPromises(functionsArray) {
    // Reduce will concatenate the promises secuencial
    return functionsArray.reduce((promisesChain, currentFunction) => {
        // 'then' waits the last promise to be finished and then continue executing the next one 
        return promisesChain.then(resultFromPreviousPromise =>
            currentFunction(resultFromPreviousPromise)
        );
    }, Promise.resolve()); // We start with a resolved promise
}


// Examples
function asyncFunction1() {
    return Promise.resolve("Result from asyncFunction1");
}

function asyncFunction2(data) {
    return Promise.resolve(data + " - Result from asyncFunction2");
}

function asyncFunction3(data) {
    return Promise.resolve(data + " - Result from asyncFunction3");
}

const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction3];

chainPromises(functionsArray)
    .then(result => {
        console.log("Chained promise result:", result);
        // Expected: "Result from asyncFunction1 - Result from asyncFunction2 - Result from asyncFunction3"
        //   })
        //     .catch(error => {
        //         console.error("Chained promise error:", error);
        //           });
        //     })
    })



//Task 4: Implement promisify Function
/**
 * Converts a styled callback function to one that returns a promise 
 * @param {Function} callbackStyleFunction - Function to be converted
 * @returns {Function} The new function that will return the promise.
 */

function promisify(callbackStyleFunction) {
    // here returns the promisify function
    return function (...args) {
        // This function will return a promise
        return new Promise((resolve, reject) => {
            // Create a callback function to will be returned to the original one 
            const customCallback = (error, result) => {
                if (error) {
                    // If the original function returns an error, then we reject the promise 
                    return reject(error);
                }
                // Otherwise, we return the resolved promise
                resolve(result);
            };

            // Lest call the original function with the arguments and the callback function
            callbackStyleFunction.apply(this, [...args, customCallback]);
        });
    };
}

// Example 

function callbackStyleFunction(value, callback) {
    setTimeout(() => {
        if (value > 0) {
            callback(null, value * 2);
        } else {
            callback("Invalid value", null);
        }
    }, 1000);
}

const promisedFunction = promisify(callbackStyleFunction);

promisedFunction(3)
    .then(result => {
        console.log("Promised function result:", result); // Expected: 6
    })
    .catch(error => {
        console.error("Promised function error:", error);
    });
