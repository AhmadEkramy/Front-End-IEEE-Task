var lengthOfLastWord = function(s) {
  const trimS = s.trim();

  if (!trimS) {
    return 0;
  }
  const words = trimS.split(' ');

  return words[words.length - 1].length;
};
