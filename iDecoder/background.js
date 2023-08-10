chrome.contextMenus.create({
  id: "iDecoder",
  title: "Перевести с помощью iDecoder",
  contexts: ["editable"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "iDecoder") {
    chrome.tabs.executeScript(
      {
        code: "window.getSelection().toString();",
      },
      function (selection) {
        if (selection && selection[0]) {
          var decodedText = decodeText(selection[0]);
          chrome.tabs.executeScript({
            code:
              "document.execCommand('insertText', false, '" +
              decodedText +
              "');",
          });
        }
      }
    );
  }
});

function decodeText(text) {
var dictionary = {

  a: "ф",
  b: "и",
  c: "с",
  d: "в",
  e: "у",
  f: "а",
  g: "п",
  h: "р",
  i: "ш",
  j: "о",
  k: "л",
  l: "д",
  m: "ь",
  n: "т",
  o: "щ",
  p: "з",
  q: "й",
  r: "к",
  s: "ы",
  t: "е",
  u: "г",
  v: "м",
  w: "ц",
  x: "ч",
  y: "н",
  z: "я",
  A: "Ф",
  B: "И",
  C: "С",
  D: "В",
  E: "У",
  F: "А",
  G: "П",
  H: "Р",
  I: "Ш",
  J: "О",
  K: "Л",
  L: "Д",
  M: "Ь",
  N: "Т",
  O: "Щ",
  P: "З",
  Q: "Й",
  R: "К",
  S: "Ы",
  T: "Е",
  U: "Г",
  V: "М",
  W: "Ц",
  X: "Ч",
  Y: "Н",
  Z: "Я",

  
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",

  "`": "ё",
  "~": "Ё",
  "!": "!",
  "@": '"',
  "#": "№",
  "$": ";",
  "%": "%",
  "^": ":",
  "&": "?",
  "*": "*",
  "(": "(",
  ")": ")",
  "-": "-",
  "_": "_",
  "=": "=",
  "+": "+",
  "[": "х",
  "{": "Х",
  "]": "ъ",
  "}": "Ъ",
  ";": "ж",
  ":": "Ж",
  "'": "э",
  '"': "Э",
  ",": "б",
  "<": "Б",
  ".": "ю",
  ">": "Ю",
  "/": ".",
  "?": ",",
  "\\": "\\",
  "|": "/",
  " ": " ",
};

  var decodedText = "";
  for (var i = 0; i < text.length; i++) {
    var char = text[i];
    if (dictionary.hasOwnProperty(char)) {
      decodedText += dictionary[char];
    } else {
      decodedText += char;
    }
  }

  return decodedText;
}



