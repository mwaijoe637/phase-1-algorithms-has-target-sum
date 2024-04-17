function hasTargetSum(array, target) {
  // Write your algorithm here
  
    const seenNumbers = new Set();
    for (const num of array) {
        const complement = target - num;
        if (seenNumbers.has(complement)) {
            return true;
        }
        seenNumbers.add(num);
    }
    return false;
}



/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
  Add your pseudocode here
  Function hasTargetSum(array, target):
    Initialize an empty hash table (or set), seen_numbers
    For each number num in array:
        Calculate complement = target - num
        If complement is in seen_numbers:
            Return true
        Add num to seen_numbers
    Return false

*/

/*
  Add written explanation of your solution here
  This function iterates through the array once, and for each number, it performs constant time operations such as checking if a number exists in a set. Therefore, the time complexity of this solution is O(n), where n is the number of elements in the array.

The space complexity is also O(n) because in the worst case, we might store all the elements of the array in the set.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
