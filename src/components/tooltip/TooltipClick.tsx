import { useRef } from 'react';
import styles from './tooltip.module.css';
import { useFadeAnimation, useDisableScroll } from '../core/hooks/domHooks';
import { ITooltipBaseProps } from './Tooltip';

type TooltipClickProps = ITooltipBaseProps;

export type TooltipClick = ({
  children,
  description,
}: TooltipClickProps) => JSX.Element;

const TooltipClick: TooltipClick = ({
  children,
  description,
}: TooltipClickProps) => {
  const tooltipContainerRef = useRef<HTMLDivElement | null>(null);
  const [fadeIn, setFadeIn] = useFadeAnimation(tooltipContainerRef);

  useDisableScroll(fadeIn);

  const handleHideToolTip = () => {
    setFadeIn(false);
  };

  const handleShowToolTip = () => {
    setFadeIn(true);
  };

  return (
    <div className={styles.container} onClick={handleShowToolTip}>
      {children}
      {fadeIn && (
        <>
          <div
            className={styles['background-layer']}
            onClick={handleHideToolTip}
          ></div>
          <div
            className={styles['tooltip-container']}
            ref={tooltipContainerRef}
          >
            {description}
          </div>
        </>
      )}
    </div>
  );
};

export default TooltipClick;
