/*My thought process:
- check if the first index of the haystack is an array, if it is not, return the last index of the needle in the haystack;
- but, if it is an array, iterate through the array in reverse order, where row will be index(i);
- create a new variable, column, and store the last index of the haystack row;
- check if the colum is not equal to -1, (meeaning, if the needle is found in the last index of the haystack row, then column will not be equal to -1, but if the needle is not found, column will be -1 and then we go into another row);
- afterwards, return an array of row, column;
-  return -1 if after every loop, the needle is not found at all in the haystack
*/
function listSorting(needle, haystack) {
    if(!Array.isArray(haystack[0])) {
        return haystack.lastIndexOf(needle)
    }
    for(let row = haystack.length - 1; row >= 0; row--) {
        let column = haystack[row].lastIndexOf(needle);
        if(column !== -1) {
            return [row, column];
        }
    }
    return -1;
};
module.exports = listSorting;
