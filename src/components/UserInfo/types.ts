import { IGithubUser } from '../../types';

export type UserInfoProps = Pick<IGithubUser, 'blog' | 'company' | 'location' | 'twitter'>;
