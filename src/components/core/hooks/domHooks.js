import { useEffect, useState } from 'react';
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

export function useFadeAnimation(elementRef) {
  const [visible, setVisible] = useState(false);
  const timeTransition = 400;
  const transition = `opacity ${timeTransition}ms ease-in-out`;

  useEffect(() => {
    if (visible) {
      elementRef.current.style.transition = transition;
      setTimeout(() => (elementRef.current.style.opacity = '1'), 0);
    }
  }, [visible]);

  const setFadeIn = (fade) => {
    if (fade) {
      setVisible(true);
      return;
    }

    elementRef.current.style.opacity = '0';
    setTimeout(() => setVisible(false), timeTransition);
  };

  return [visible, setFadeIn];
}
