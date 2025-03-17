import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import styles from './tooltip.module.css';

interface ITooltipDescriptionProps {
  description: string | React.ReactNode;
  onClick?: () => void;
}

const TooltipDescription = forwardRef<HTMLDivElement, ITooltipDescriptionProps>(
  ({ description, onClick }, ref) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useImperativeHandle(ref, () => containerRef.current!);

    useEffect(() => {
      let handleClickOutSide: (e: MouseEvent) => void;

      if (onClick) {
        handleClickOutSide = (e: MouseEvent) => {
          if (!containerRef.current?.contains(e.target as Node)) {
            onClick();
          }
        };

        document.addEventListener('click', handleClickOutSide);
      }

      return () => document.removeEventListener('click', handleClickOutSide);
    }, [onClick]);

    return (
      <div className={styles['tooltip-container']} ref={containerRef}>
        {description}
      </div>
    );
  },
);

export default TooltipDescription;
