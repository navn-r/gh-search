import { GithubUser } from './gh-user';

export interface GithubRepo {
  id: number,
  name: string,
  full_name: string,
  owner: GithubUser,
  html_url: string,
  description: string,
  fork: boolean,
  language: string,
  homepage: string,
  license: {
    name: string
  },
  stargazers_count: number,
  forks: number,
  archived: boolean,
}
