/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    return missingNumberNaive(nums);
};

function missingNumberNaive(nums) {
    const seen = new Array(nums.length).fill(false);
    for (const num of nums) {
        seen[num] =  true;
    }

    const missing = seen.findIndex(e => e === false);
    return missing === -1 ? nums.length : missing;
}
