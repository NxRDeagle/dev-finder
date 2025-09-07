import * as React from 'react';
import SearchIcon from '../../assets/icon-search.svg?react';
import Button from '../Button/Button';
import { ISearchProps, TFormFields } from './types';
import styles from './Search.module.scss';

const Search = ({ hasError, onSubmit }: ISearchProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement & TFormFields>) => {
    event.preventDefault();
    const target = event.currentTarget;
    const text = target?.username?.value;
    if (text?.trim()) {
      onSubmit(text);
      target?.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon className={styles.searchIcon} />
        </label>
        <input
          type="text"
          className={styles.textField}
          id="search"
          name="username"
          placeholder="Search GitHub username..."
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};

export default Search;
