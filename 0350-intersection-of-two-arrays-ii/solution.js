/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const res = [];
    const freq = new Map();
    for (const num of nums1) {
        freq.set(num, (freq.get(num) ?? 0) + 1);
    }

    for (const num of nums2) {
        if (freq.get(num)) {
            res.push(num);
            freq.set(num, freq.get(num) - 1);
        }
    }

    return res;
};