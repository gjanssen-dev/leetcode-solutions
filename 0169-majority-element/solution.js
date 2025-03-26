/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    return majorityElemenBoyerMoore(nums);
};

function majorityElementNaive(nums) {
    // solution using hash map in O(n) time and space complexity
    const freq = new Map();
    for (const num of nums) {
        freq.set(num, (freq.get(num) ?? 0) + 1);
    }

    return freq.entries().find(([, f]) => f > nums.length / 2)[0];
};

function majorityElemenBoyerMoore(nums) {
    // solution using the Boyer-Moore majority vote algorithm
    let candidate;
    let count = 0;
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }

        if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
};