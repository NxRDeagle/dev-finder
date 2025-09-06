import * as React from 'react';
import MoonIcon from '../../assets/icon-moon.svg?react';
import SunIcon from '../../assets/icon-sun.svg?react';
import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
  const [isDarkTheme, setDarkTheme] = React.useState(false);
  const text = isDarkTheme ? 'Light' : 'Dark';
  const ThemeIcon = isDarkTheme ? SunIcon : MoonIcon;

  const toggleThemeMode = React.useCallback(() => {
    setDarkTheme(!isDarkTheme);
  }, [isDarkTheme, setDarkTheme]);

  React.useEffect(() => {
    document.body.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  return (
    <div className={styles.switcher} onClick={toggleThemeMode}>
      <span>{text}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};

export default ThemeSwitcher;
