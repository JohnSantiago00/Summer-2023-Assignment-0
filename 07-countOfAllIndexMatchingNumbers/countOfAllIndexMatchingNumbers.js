function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == i) {
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
