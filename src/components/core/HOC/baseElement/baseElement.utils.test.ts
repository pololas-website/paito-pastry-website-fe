import {
  getBasicElementClasses,
  getComposedClassName,
  IBaseElementProperties,
  IStyles,
} from './baseElement.utils';

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

  describe('Testing the "composeAllClasses" function:', () => {
    const initialModuleStyles: IStyles = {
      small: 'small-class',
      primary: 'primary-class',
      contrast: 'contrast-class',
      error: 'error-class',
    };
    let moduleStyles: IStyles = { ...initialModuleStyles };
    const initialProperties: IBaseElementProperties = {
      small: true,
      primary: true,
      contrast: true,
      error: 'error message',
    };
    let properties: IBaseElementProperties = { ...initialProperties };

    beforeEach(() => {
      moduleStyles = { ...initialModuleStyles };
      properties = { ...initialProperties };
    });

    it('should return all the provided classes', () => {
      const extraClass = 'extra-class-name';
      const expected = [
        'small-class',
        'primary-class',
        'contrast-class',
        'error-class',
        'extra-class-name',
      ].join(' ');

      const result = getComposedClassName(properties, moduleStyles, extraClass);

      expect(result).toEqual(expected);
    });

    it('should return an empty string className when provided an object Properties with all its values set to undefined.', () => {
      properties = {};
      const extraClass = undefined;
      const expected = '';

      const result = getComposedClassName(properties, moduleStyles, extraClass);

      expect(result).toEqual(expected);
    });

    it('should not return an error className with an empty string set to the error property.', () => {
      properties.error = '';
      const extraClass = undefined;
      const expected = ['small-class', 'primary-class', 'contrast-class'].join(
        ' ',
      );

      const result = getComposedClassName(properties, moduleStyles, extraClass);

      expect(result).toEqual(expected);
    });

    it('should return an error className with the error property set to true.', () => {
      properties = { error: true };
      const extraClass = undefined;
      const expected = 'error-class';

      const result = getComposedClassName(properties, moduleStyles, extraClass);

      expect(result).toEqual(expected);
    });
  });
});
