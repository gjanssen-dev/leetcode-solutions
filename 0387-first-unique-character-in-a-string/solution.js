/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const freq = new Map();
  
    for (let i = 0; i < s.length; i++) {
      const char = s.charAt(i);
      freq.set(char, (freq.get(char) ?? 0) + 1);
    }
  
    for (let i = 0; i < s.length; i++) {
      const char = s.charAt(i);
      if (freq.get(char) === 1) {
        return i;
      }
    }
  
    return -1;
  };