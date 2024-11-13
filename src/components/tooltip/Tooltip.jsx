import { useRef } from 'react';
import * as styles from './tooltip.module.css';
import { useFadeAnimation, useDisableScroll } from '../core/hooks/domHooks';

function Tooltip({ children, description }) {
  const tooltipContainderRef = useRef(null);
  const [fadeIn, setFadeIn] = useFadeAnimation(tooltipContainderRef);

  useDisableScroll(fadeIn);

  function handleHideToolTip(e) {
    e.stopPropagation();
    setFadeIn(false);
  }

  return (
    <div className={styles.container} onClick={() => setFadeIn(true)}>
      {children}
      {fadeIn && (
        <>
          <div
            className={styles['background-layer']}
            onClick={(e) => handleHideToolTip(e)}
          ></div>
          <div
            className={styles['tooltip-container']}
            ref={tooltipContainderRef}
          >
            {description}
          </div>
        </>
      )}
    </div>
  );
}

export default Tooltip;
