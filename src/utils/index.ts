import { IGithubUser, IGithubUserResponse } from '../types';

export const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isGithubUser = (user: any): user is IGithubUserResponse => 'id' in user;

export const mapGithubUser = (user: IGithubUserResponse): IGithubUser => ({
  login: user.login,
  avatar: user.avatar_url,
  name: user.name,
  bio: user.bio,
  blog: user.blog,
  company: user.company,
  created: user.created_at,
  followers: user.followers,
  following: user.following,
  location: user.location,
  repos: user.public_repos,
  twitter: user.twitter_username,
});
