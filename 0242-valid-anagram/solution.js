/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const freq = new Map();
    for (let i = 0; i < s.length; i++) {
        const charS = s.charAt(i);
        const charT = t.charAt(i);

        freq.set(charS, (freq.get(charS) ?? 0) + 1);
        freq.set(charT, (freq.get(charT) ?? 0) - 1);
    }

    return freq.values().every(f => f === 0);
};