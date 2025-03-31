/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
// return naiveSolution(nums, k);
return optimizedSolution(nums, k);
};

function naiveSolution(nums, k) {
const freq = new Map();
for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
}

const res = [];
let i = 0;
while (i < k) {
    let num;
    let maxF = -1;
    for (const [n, f] of freq.entries()) {
    if (f > maxF) {
        maxF = f;
        num = n;
    }
    }

    freq.delete(num);
    res.push(num);
    i++;
}

return res;
}

function optimizedSolution(nums, k) {
const freq = new Map();
for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
}

const buckets = [];
for (const [n, f] of freq) {
    buckets[f] = [...(buckets[f] ?? []), n];
}

const res = [];
for (let i = buckets.length - 1; i >= 0; i--) {
    if (buckets[i]) res.push(...buckets[i]);
    if (res.length === k) break;
}

return res;
}
  