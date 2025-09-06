import { IContainerProps } from './types';
import styles from './Container.module.scss';

const Container = ({ children }: IContainerProps) => <div className={styles.container}>{children}</div>;

export default Container;
