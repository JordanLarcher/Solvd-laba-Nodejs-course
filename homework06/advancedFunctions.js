// Task 1
const translations = {
  en: {
    greet: "Hello",
    intro: "Welcome to our website"
  },
  fr: {
    greet: "Bonjour",
    intro: "Bienvenue sur notre site web"
  }
};

const language = "fr"; 
/**
 * @param {Array<string>} keys - 
 * @returns {string} string translations
 */

function localize(keys){
    const key = keys[0];

    // we can access the translations by using the language and key
    return translations[language][key] || `Key '${key}' not found`;
}


// Task 2
/**
 * @param {Array<string>} strings - Statifc .
 * @param  {...any} keywords - 
 * @returns {string} Returns a string with the highlighted keywords
 */

function highlightKeyWords(strings, ...keywords){
    // Use reduce to build the final string
    return keywords.reduce((acc, keyword, i) => {
        //Concatenate the counter, keyword, and the static part 
        return `${acc}<span> class='highlight'>${keyword}</span>${strings[i + 1]}`;
    }, strings[0]);
}
const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";

const highlighted = highlightKeywords(template, keywords);

console.log(highlighted);

// Task 3 Multiline Tagged Template
/**
 * @param {Array<string>} strings - The static tagged template.
 * @returns {string} Returns the string with the line numbers.
 */

function multiline(strings){
    // Get the first text from the Array
    const rawString = strings[0];


    return rawString
    .trim()
    .split('\n') // Devides the string in an Array of lines
    .map((line, index) => `${index + 1} ${line}`)
    .join('\n');
}


const code = multiline\`
function add(a, b) {
return a + b;
}
\`;

console.log(code);
// Expected:
// "1 function add(a, b) {
//  2 return a + b;
//  3 }"
//


// Task 4:  Implementing Debounce Function
/**
 * @param {Function} func - 
 * @param {number} delay - 
 * @returns {Function}
 */

function debounce(func, delay) {
    let timeoutId;

    // Returns a new function that with the original function
    return function(...args){
        // 'this' makes reference to the context where the debounce function was called 
        const context = this;

        // Clear the timeout 
        clearTimeout(timeoutId);

        // Create a new timeout
        timeoutId = setTimeout(() => {
            // When the timeout ends, we call the original function 
            // with the context and the right arguments
            func.apply(context, args);
        }, delay);
    }
}


function debouncedSearch(query) {
	// Perform search operation with the query
	console.log("Searching for:", query);
}

const debouncedSearchHandler = debounce(debouncedSearch, 300);

const inputElement = document.getElementById("search-input");
inputElement.addEventListener("input", event => {
	debouncedSearchHandler(event.target.value);
});


// Task 5 Implementing Throttle Function

/**
 * @param {Function} func - 
 * @param {number} interval - 
 * @returns {Function}
 */

function throttle(func, interval) {
    let shouldWait = false; 
    let waitingArguments = null;

    const timeoutFunc = () => {
        if(waitingArguments == null) {
            shouldWait = false;
        }else {
            // if there was not call, it is executed and the timeout is restarted
            func(...waitingArguments);
            waitingArguments = null;
            setTimeout(timeoutFunc, interval);
        }
    };




    returns (...args) => {
        if(shouldWait) {
            // if we are waiting, we save the arguments for later 
            waitingArguments = args;
            return;
        }

        // If we are not waiting, then the function is executed
        func(...args);
        shouldWait = true; // wait is activated 
        
        // The timeout is configured to deactivate the wait time 
        setTimeout(timeoutFunc, interval);
    }
}


function onScroll(event) {
	// Handle scroll event
	console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 1000);

window.addEventListener("scroll", throttledScrollHandler);



