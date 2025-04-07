import { getBasicElementClasses } from './baseElement.utils';

describe('base Element utils', () => {
  describe('Get basic-element class names', () => {
    test('no boolean classes passed', () => {
      const [small, primary, contrast] = [undefined, undefined, undefined];
      const expected: string[] = [];

      expect(getBasicElementClasses({ small, primary, contrast })).toEqual(
        expected,
      );
    });

    test('provide only some classes', () => {
      const [small, primary, contrast, error] = [
        true,
        undefined,
        true,
        undefined,
      ];
      const expected = ['small', 'contrast'];

      expect(
        getBasicElementClasses({ small, primary, contrast, error }),
      ).toEqual(expected);
    });

    test('provide only the last className', () => {
      const [small, primary, contrast] = [undefined, undefined, true];
      const expected = ['contrast'];

      expect(getBasicElementClasses({ small, primary, contrast })).toEqual(
        expected,
      );
    });

    test('provide a string value not boolean one', () => {
      const [small, primary, contrast, error] = [
        true,
        undefined,
        true,
        'error',
      ];
      const expected = ['small', 'contrast', 'error'];

      expect(
        getBasicElementClasses({ small, primary, contrast, error }),
      ).toEqual(expected);
    });

    test('provide a string value not boolean one but empty', () => {
      const [small, primary, contrast, error] = [true, undefined, true, ''];
      const expected = ['small', 'contrast'];

      expect(
        getBasicElementClasses({ small, primary, contrast, error }),
      ).toEqual(expected);
    });
  });
});
