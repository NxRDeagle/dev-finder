import { IGithubUser } from '../../types';

export type UserStatProps = Pick<IGithubUser, 'repos' | 'followers' | 'following'>;
