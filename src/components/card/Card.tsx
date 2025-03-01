import { stringUtils } from '../../utils';
import styles from './card.module.css';

interface ICardProps {
  children: React.ReactNode;
  className?: string;
}

function Card({ children, className }: ICardProps) {
  const classNames = stringUtils.join([styles.card, className]);

  return <div className={classNames}>{children}</div>;
}

export default Card;
