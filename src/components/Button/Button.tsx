import styles from './Button.module.scss';
import { IButtonProps } from './types';

const Button = ({ children, onClick }: IButtonProps) => (
  <button onClick={onClick} className={styles.button}>
    {children}
  </button>
);

export default Button;
