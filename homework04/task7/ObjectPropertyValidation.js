/**
 * ============================================================================
 * Implement a function called validateObject that takes an object and a validation schema as arguments. 
 * The schema should define the required properties, their types, and any additional validation rules. 
 * The function should return true if the object matches the schema, and false otherwise. 
 * You can choose any schema you want.
 */

// ============================================================================
// Task 7: Object Property Validation 
// This is a design pattern that allows you to validate an object against a schema.
// The validateObject function checks if the object has the required properties, their types, and any
// additional validation rules defined in the schema.
// ============================================================================


const validateObject = (obj, schema) => {


    // Check if the object has all required properties
    for(const key in schema) {

        if(schema[key].required && !Object.prototype.hasOwnProperty.call(obj, key)) {
            console.warn(`Missing required property: ${key}`);
            return false; // Return false if a required property is missing
        }


        // If the property exists, check its type
        if(Object.prototype.hasOwnProperty.call(obj,  key)) {
            const value = obj[key];
            const rules = schema[key];

            // Check if the value matches the specified type
            if(rules.type && typeof value !== rules.type) {
                console.warn(`Invalid type for property: ${key}. Expected ${rules.type}, got ${typeof value}`);
                return false;
            }

            // Check for additional validation rules
            if(rules.validate && typeof rules.validate === 'function') {
                const isValid = rules.validate(value);
                if(!isValid) {
                    console.warn(`Validation failed for property: ${key}`);
                    return false;
                }
            }
        }
    }
    return true; // Return true if all checks pass
}