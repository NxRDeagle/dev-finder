import { localDate } from '../../utils';
import { UserTitleProps } from './types';
import styles from './UserTitle.module.scss';

const UserTitle = ({ name, login, created }: UserTitleProps) => {
  const joinedDate = localDate.format(new Date(created));

  return (
    <div className={styles.userTitle}>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{joinedDate}</span>
    </div>
  );
};

export default UserTitle;
