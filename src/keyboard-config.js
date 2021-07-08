// 布局
export const layout = {
  default: [
    "q w e r t y u i o p {bksp}",
    "a s d f g h j k l {clear}",
    "z x c v b n m {next}",
  ],
};

// 替换文本
function initLetterDisplay() {
  const letters = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];
  const letterDisplay = {};
  letters.forEach((letter) => {
    letterDisplay[letter] = letter.toUpperCase();
  });

  return letters;
}

export const display = {...initLetterDisplay()}
