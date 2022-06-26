import pxToRem from '@utils/pxToRem';

describe('pxToRem', () => {
  it('number', () => {
    expect(pxToRem(0)).toBe('0');
    expect(pxToRem(10)).toBe('1rem');
    expect(pxToRem(-10)).toBe('-1rem');
    expect(pxToRem(2.5)).toBe('0.25rem');
    expect(pxToRem(0, 10, 2.5, -2.5)).toBe('0 1rem 0.25rem -0.25rem');
  });

  it('string', () => {
    expect(pxToRem('0')).toBe('0');
    expect(pxToRem('10')).toBe('1rem');
    expect(pxToRem('-10')).toBe('-1rem');
    expect(pxToRem('2.5')).toBe('0.25rem');
    expect(pxToRem('0', '10', '2.5', '-2.5')).toBe('0 1rem 0.25rem -0.25rem');
  });

  it('string with non-numeric characters', () => {
    expect(pxToRem('0px')).toBe('0');
    expect(pxToRem('10px')).toBe('1rem');
    expect(pxToRem('-10px')).toBe('-1rem');
    expect(pxToRem('2.5px')).toBe('0.25rem');
    expect(pxToRem('0px', '10px', '2.5px', '-2.5px')).toBe(
      '0 1rem 0.25rem -0.25rem'
    );
  });
});
