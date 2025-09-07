import * as React from 'react';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import UserCard from './components/UserCard/UserCard';
import { isGithubUser, mapGithubUser } from './utils';
import { BASE_URL } from './utils/constants';
import { IGithubError, IGithubUser, IGithubUserResponse } from './types';
import { defaultUser } from './mocks';

const App = () => {
  const [user, setUser] = React.useState<IGithubUser | null>(defaultUser);

  const fetchUser = async (userName: string) => {
    const url = BASE_URL + userName;
    const result: Promise<IGithubUserResponse | IGithubError> = await fetch(url).then((response) => response.json());
    if (isGithubUser(result)) {
      setUser(mapGithubUser(result));
    } else {
      setUser(null);
    }
  };

  return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  );
};

export default App;
