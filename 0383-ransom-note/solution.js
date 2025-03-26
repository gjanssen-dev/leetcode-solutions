/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const letters = new Map();
  
    for (let i = 0; i < magazine.length; i++) {
      const char = magazine.charAt(i);
      letters.set(char, (letters.get(char) ?? 0) + 1);
    }
  
    for (let i = 0; i < ransomNote.length; i++) {
      const char = ransomNote.charAt(i);
      if (!letters.get(char)) {
        return false;
      }
  
      letters.set(char, letters.get(char) - 1);
    }
  
    return true;
  };