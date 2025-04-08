import { getBasicElementClasses } from './baseElement.utils';

describe('base Element utils', () => {
  describe('Testing the "getBasicElementClasses" function:', () => {
    test('should return an empty string when only falsy values are provided', () => {
      const [small, primary, contrast] = [undefined, undefined, undefined, ''];
      const expected: string[] = [];
      const result = getBasicElementClasses({ small, primary, contrast });

      expect(result).toEqual(expected);
    });

    it('should return only the truthy values as classes', () => {
      const [small, primary, contrast, error] = [
        undefined,
        undefined,
        true,
        '',
      ];
      const expected = ['contrast'];
      const result = getBasicElementClasses({
        small,
        primary,
        contrast,
        error,
      });

      expect(result).toEqual(expected);
    });

    it('should return a valid class if a property string was provided', () => {
      const [small, primary, contrast, error] = [
        true,
        undefined,
        true,
        'error',
      ];
      const expected = ['small', 'contrast', 'error'];
      const result = getBasicElementClasses({
        small,
        primary,
        contrast,
        error,
      });

      expect(result).toEqual(expected);
    });

    it('should not take on account empty strings', () => {
      const [small, primary, contrast, error] = [true, undefined, true, ''];
      const expected = ['small', 'contrast'];
      const result = getBasicElementClasses({
        small,
        primary,
        contrast,
        error,
      });

      expect(result).toEqual(expected);
    });
  });
});
