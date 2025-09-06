export interface IGithubUser {
  login: string;
  id: number;
  avatarUrl: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitterUsername: string;
  publicRepos: number;
  followers: number;
  following: number;
  createdAt: string;
}

export interface IGithubError {
  message: string;
  dopcumentationUrl: string;
}
