const formatString = function (string, maxLength = 40) {
  const stringLength = string.split("");

  if (stringLength.length > maxLength) {
    stringLength.length = maxLength;
    return stringLength.join("") + "...";
  } else if (
    (stringLength.length = maxLength || stringLength.length < maxLength)
  ) {
    return stringLength.join("");
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
