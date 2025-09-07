import { IGithubUser } from '../../types';

export type UserTitleProps = Pick<IGithubUser, 'name' | 'login' | 'created'>;
