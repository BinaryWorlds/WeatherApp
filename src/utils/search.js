const deletePolishLetters = (string) => {
  const diacritics = [
    'ą',
    'ć',
    'ę',
    'ł',
    'ń',
    'ó',
    'ś',
    'ź',
    'ż',
    'Ą',
    'Ć',
    'Ę',
    'Ł',
    'Ń',
    'Ó',
    'Ś',
    'Ź',
    'Ż',
  ];
  const replaced = [
    'a',
    'c',
    'e',
    'l',
    'n',
    'o',
    's',
    'z',
    'z',
    'A',
    'C',
    'E',
    'L',
    'N',
    'O',
    'S',
    'Z',
    'Z',
  ];

  return [...string]
    .map((el) => {
      const index = diacritics.indexOf(el);
      return index === -1 ? el : replaced[index];
    })
    .join('');
};

export const checkAllowed = (text) => {
  const illegalChar = /[\\|/#~&:;$%@"'`[\]<>(){}+=,^*!?_]/g;
  return !text.match(illegalChar);
};

export const findMatches = (searchedText, cityList) => {
  const text = deletePolishLetters(searchedText);
  const regEx = new RegExp(text, 'gi');

  const result = [];
  let counter = 0;
  const { length } = cityList;

  for (let i = 0; i < length; i++) {
    if (cityList[i][0].match(regEx)) result[counter++] = cityList[i].slice(0);
    if (counter > 9) break;
  }

  return result;
};
