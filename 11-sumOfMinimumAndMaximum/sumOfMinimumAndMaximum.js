function sumOfMinimumAndMaximum(nums) {
  // Insert code here;

  let min = Math.min.apply(null, nums);
  let max = Math.max.apply(null, nums);
  return min + max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
