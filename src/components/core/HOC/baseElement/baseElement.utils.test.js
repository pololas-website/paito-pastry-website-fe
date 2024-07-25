import { getBasicElementClasses } from './baseElement.utils.js';

describe('base Element utils', () => {
  describe('flat css classes', () => {
    test('no boolean classes passed', () => {
      const [small, primary, contrast] = [undefined, undefined, undefined];
      const expected = [];

      expect(getBasicElementClasses(small, primary, contrast)).toEqual(
        expected,
      );
    });

    test('provide only some classes', () => {
      const [small, primary, contrast] = [true, undefined, true, undefined];
      const expected = ['small', 'contrast'];

      expect(getBasicElementClasses(small, primary, contrast)).toEqual(
        expected,
      );
    });

    test('provide only the last className', () => {
      const [small, primary, contrast] = [undefined, undefined, true];
      const expected = ['contrast'];

      expect(getBasicElementClasses(small, primary, contrast)).toEqual(
        expected,
      );
    });
  });
});
