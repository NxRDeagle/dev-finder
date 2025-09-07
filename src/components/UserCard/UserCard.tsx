import UserInfo from '../UserInfo/UserInfo';
import UserStat from '../UserStat/UserStat';
import UserTitle from '../UserTitle/UserTitle';
import { IUserCardProps } from './types';
import styles from './UserCard.module.scss';

const UserCard = (props: IUserCardProps) => {
  const { avatar, followers, following, repos, created, login, name, bio, blog, location, twitter, company } = props;

  return (
    <div className={styles.userCard}>
      <img className={styles.avatar} src={avatar} alt={login} />
      <UserTitle login={login} name={name} created={created} />
      <p className={`${styles.bio}${bio ? '' : ` ${styles.empty}`}`}>{bio ?? 'This profile has no bio'}</p>
      <UserStat followers={followers} following={following} repos={repos} />
      <UserInfo blog={blog} location={location} twitter={twitter} company={company} />
    </div>
  );
};

export default UserCard;
