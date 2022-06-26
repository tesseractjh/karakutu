const getNumFromStr = (str: string) => Number(str.replace(/[^0-9.-]+/g, ''));
const TEST_FONT_SIZE = 10;
const FONT_SIZE = (() => {
  const root = document.querySelector('html');
  if (root) {
    const fontSize = getNumFromStr(
      window.getComputedStyle(root).getPropertyValue('font-size')
    );
    return fontSize && !Number.isNaN(fontSize)
      ? fontSize * 0.625
      : TEST_FONT_SIZE;
  }
  return TEST_FONT_SIZE;
})();

const pxToRem = (...values: (number | string)[]): string => {
  return values
    .map((value) => {
      if (typeof value === 'number') {
        const rem = value / FONT_SIZE;
        return rem && !Number.isNaN(rem) ? `${rem}rem` : '0';
      }
      const rem = getNumFromStr(value) / FONT_SIZE;
      return rem && !Number.isNaN(rem) ? `${rem}rem` : '0';
    })
    .join(' ');
};

export default pxToRem;
