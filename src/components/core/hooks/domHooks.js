import { useEffect } from 'react';
import * as domUtils from '../../../utils/domUtils';

const body = document.body;
const html = document.documentElement;

export function useDisableScroll(disable) {
  useEffect(() => {
    if (domUtils.isOverFlowing(html)) {
      html.style.overflow = disable ? 'hidden' : '';
      body.style.paddingRight = disable ? '17px' : '';
    }
  }, [disable]);
}
