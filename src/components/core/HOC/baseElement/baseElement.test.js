import { flatClasses } from './baseElement.utils.js';

describe('base Element utils', () => {
  describe('flat css classes', () => {
    test('no boolean classes passed', () => {
      const [small, primary, contrast, extraClasses] = [
        undefined,
        undefined,
        undefined,
        undefined,
      ];
      const expected = '';

      expect(flatClasses(small, primary, contrast, extraClasses)).toBe(
        expected,
      );
    });

    test('provide only some classes', () => {
      const [small, primary, contrast, extraClasses] = [
        true,
        undefined,
        true,
        undefined,
      ];
      const expected = 'small contrast';

      expect(flatClasses(small, primary, contrast, extraClasses)).toBe(
        expected,
      );
    });

    test('provide only the last className', () => {
      const [small, primary, contrast, extraClasses] = [
        undefined,
        undefined,
        undefined,
        'class__test',
      ];
      const expected = 'class__test';

      expect(flatClasses(small, primary, contrast, extraClasses)).toBe(
        expected,
      );
    });
  });
});
