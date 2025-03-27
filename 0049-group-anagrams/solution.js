/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const baseCharCode = "a".charCodeAt();
    const groups = new Map();
  
    for (const str of strs) {
      const chars = new Array(26).fill(0);
      for (const char of str) {
        chars[char.charCodeAt() - baseCharCode]++;
      }
  
      const key = chars.join(",");
      groups.set(key, (groups.get(key) ?? []).concat([str]));
    }
  
    return groups.values().reduce((res, anagrams) => [...res, anagrams], []);
  };