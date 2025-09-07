import { IInfoItemProps } from '../InfoItem/types';
import { UserInfoProps } from './types';
import CompanyIcon from '../../assets/icon-company.svg?react';
import LocationIcon from '../../assets/icon-location.svg?react';
import BlogIcon from '../../assets/icon-website.svg?react';
import TwitterIcon from '../../assets/icon-twitter.svg?react';
import styles from './UserInfo.module.scss';
import InfoItem from '../InfoItem/InfoItem';

const UserInfo = ({ blog, company, location, twitter }: UserInfoProps) => {
  const items: IInfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    { icon: <BlogIcon />, text: blog },
    { icon: <TwitterIcon />, text: twitter },
    { icon: <CompanyIcon />, text: company },
  ];
  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
      ))}
    </div>
  );
};

export default UserInfo;
