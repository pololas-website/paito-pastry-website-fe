import { useCallback, useEffect, useState } from 'react';
import { domUtils } from '../../../utils';

const body = document.body;
const html = document.documentElement;

export function useDisableScroll(disable: boolean) {
  useEffect(() => {
    if (domUtils.isOverFlowing(html)) {
      html.style.overflow = disable ? 'hidden' : '';
      body.style.paddingRight = disable ? '17px' : '';
    }
  }, [disable]);
}

export function useFadeAnimation(
  elementRef: React.MutableRefObject<HTMLElement | null>,
): [boolean, (fade: boolean) => void] {
  const [visible, setVisible] = useState(false);
  const timeTransition = 400;
  const transition = `opacity ${timeTransition}ms ease-in-out`;

  useEffect(() => {
    if (visible) {
      elementRef.current!.style.transition = transition;
      setTimeout(() => (elementRef.current!.style.opacity = '1'), 0);
    }
  }, [visible, elementRef, transition]);

  const setFadeIn = useCallback(
    (fade: boolean) => {
      if (fade) {
        setVisible(true);
        return;
      }

      if (elementRef.current) {
        elementRef.current.style.opacity = '0';
      }
      setTimeout(() => setVisible(false), timeTransition);
    },
    [elementRef],
  );

  return [visible, setFadeIn];
}
