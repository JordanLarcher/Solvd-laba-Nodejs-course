/**
 * Implement a function called getAverageGrade that takes 
 * an array of student objects, each containing a name and 
 * grades property. The function should return the average 
 * grade of all students, without modifying the original 
 * array or its items. Use function composition and point-free style.
 */


const mapGrades = students =>
    students.flatMap( student => student.grades );

const sum = numbers => 
    numbers.reduce( (a, b) => a + b, 0);

const arrayLength = array => 
    array.length;

const getAverageGrade = students => {
    return sum(mapGrades(students)) / length(mapGrades(students));
};